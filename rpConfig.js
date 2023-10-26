module.exports = {
  endpoint: 'https://reportportal.epam.com/api/v1',
  token: 'rpToken',
  launch: 'New launch#1',
  project: 'Project name',
  reportHooks: false,
  debug: true,
  attributes: [
    {
      key: 'attributeKey',
      value: 'attrbiuteValue',
    },
    {
      value: 'secondAttrbiuteValue',
    },
  ],
  launchId: process.env.RP_LAUNCH_ID,
  restClientConfig: {
    timeout: 0,
  },
};
