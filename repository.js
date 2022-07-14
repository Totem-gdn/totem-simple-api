const { MongoClient } = require('mongodb');
const assets = require('./assets');

const dataTypes = {
  avatars: 'avatars',
  items: 'items',
};

const collections = {
  [dataTypes.avatars]: process.env.MONGODB_AVATARS_COLLECTION || 'avatars',
  [dataTypes.items]: process.env.MONGODB_ITEMS_COLLECTION || 'items',
  seedInfo: 'seed_info',
};

let cachedDb = null;

async function connectToDatabase () {
  if (cachedDb) {
    return cachedDb;
  }
  const client = await MongoClient.connect(process.env.MONGODB_URI);
  const db = await client.db(process.env.MONGODB_DATABASE);
  cachedDb = db;
  return db;
}

async function seedAvatar (owner) {
  const db = await connectToDatabase();
  await db.collection(collections.avatars).insertOne({
    owner,
    owners: [owner],
    avatar: assets.generators.avatars.next().value,
    createdAt: new Date(),
    updatedAt: new Date(),
  });
}

async function seedItems (owner) {
  const itemDocs = [];
  for (let i = 0; i < 5; i++) {
    const item = assets.generators.items.next().value;
    itemDocs.push({
      owner,
      owners: [owner],
      itemType: item.type,
      item: item.value,
      createdAt: new Date(),
      updatedAt: new Date(),
    });
  }
  const db = await connectToDatabase();
  await db.collection(collections.items).insertMany(itemDocs);
}

async function initialSeeding (owner) {
  const db = await connectToDatabase();
  const seedInfo = await db.collection(collections.seedInfo).findOne({ publicKey: owner });
  if (!seedInfo) {
    await seedAvatar(owner);
    await seedItems(owner);
    await db.collection(collections.seedInfo).insertOne({
      publicKey: owner,
      createdAt: new Date(),
      updatedAt: new Date(),
    });
  }
}

async function getAssetsByType (owner, type) {
  const db = await connectToDatabase();
  return await db.collection(collections[type]).find({ owner }).toArray();
}

module.exports = {
  dataTypes,
  initialSeeding,
  getAssetsByType,
};
