const MongoClient = require("mongodb").MongoClient;
const ObjectId = require("mongodb").ObjectId;
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

exports.handler = async ({id}, context) => {
    try {
        if (!id) {
            return {
                statusCode: 200,
                body: "Please provide the ID",
            };
        }
        context.callbackWaitsForEmptyEventLoop = false;
        const db = await connectToDatabase();
        const user = await db.collection(process.env.MONGODB_COLLECTION).findOne(ObjectId(id));
        return {
            statusCode: 200,
            body: JSON.stringify(user),
        };
    } catch (error) {
        return {
            statusCode: 400,
            body: error?.toString() || 'An error occurred',
        };
    }
};