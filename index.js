const {
  dataTypes,
  initialSeeding,
  getAssetsByType,
} = require('./repository');

async function handler ({ pathParameters }, context) {
  try {
    if (!pathParameters.type || !Object.keys(dataTypes).includes(pathParameters.type)) {
      return {
        status: 400,
        message: 'Wrong data, endpoints should be /avatars or /items',
        data: [],
      };
    }
    if (!pathParameters.id) {
      return {
        status: 400,
        message: 'Please provide the Public Key',
        data: [],
      };
    }
    context.callbackWaitsForEmptyEventLoop = false;
    await initialSeeding(pathParameters.id);
    return {
      status: 200,
      message: 'OK',
      data: await getAssetsByType(pathParameters.id, pathParameters.type),
    };
  } catch (error) {
    return {
      status: 400,
      message: error?.toString() || 'An error occurred',
      data: [],
    };
  }
}

exports.handler = handler;
