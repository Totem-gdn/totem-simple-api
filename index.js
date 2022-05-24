const MongoClient = require("mongodb").MongoClient;
const DATA_TYPES = ['avatars', 'items'];
let cachedDb = null;

const connectToDatabase = async () => {
    if (cachedDb) {
        return cachedDb;
    }
    const client = await MongoClient.connect(process.env.MONGODB_URI);
    const db = await client.db(process.env.MONGODB_DATABASE);
    cachedDb = db;
    return db;
}

exports.handler = async ({pathParameters}, context) => {
    try {
        const {id, type} = pathParameters;
        if (!type || !DATA_TYPES.includes(type)) {
            return {
                status: 400,
                message: "Wrong data, endpoints should be /avatars or /items",
                data: []
            };
        }
        if (!id) {
            return {
                status: 400,
                message: "Please provide the Public Key",
                data: []
            };
        }
        context.callbackWaitsForEmptyEventLoop = false;
        const db = await connectToDatabase();
        const data = await db.collection(type === 'avatars' ? process.env.MONGODB_AVATARS_COLLECTION : process.env.MONGODB_ITEMS_COLLECTION).findOne({ 'owner': id });

        return {
            status: 200,
            message: "OK",
            data: data
        };
    } catch (error) {
        return {
            status: 400,
            message: error?.toString() || 'An error occurred',
            data: []
        };
    }
};