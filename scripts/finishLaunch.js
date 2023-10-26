const RPClient = require('@reportportal/client-javascript');
const rpConfig = require('../rpConfig');

const client = new RPClient(rpConfig);

const finishLaunch = async () => {
    const launchTempId = client.startLaunch({ id: process.env.RP_LAUNCH_ID }).tempId;
    const response = await client.finishLaunch(launchTempId, {}).promise;

    return response;
};

module.exports = finishLaunch;