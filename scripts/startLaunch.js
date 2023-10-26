const RPClient = require('@reportportal/client-javascript');
const rpConfig = require('../rpConfig');

const client = new RPClient(rpConfig);

const startLaunch = async () => {
    const response = await client.startLaunch({ name: 'Cypress launch', mode: 'DEFAULT' }).promise;
    const launchId = response.id;

    return launchId;
};

module.exports = startLaunch;