const browserStackConfig = require('./browserstack.config');

const date = new Date();
const dateForDisplay = date.toDateString();
const buildNameForDisplay = `${browserStackConfig.BUILD}: ${dateForDisplay}`;

exports.config = {
  user: browserStackConfig.BROWSERSTACK_USER,
  key: browserStackConfig.BROWSERSTACK_KEY,
  webAppRootUrl: browserStackConfig.WEB_APP_ROOT_URL,
  updateJob: %updateJob,
  specs: [
    './tests/browserstack/specs/%scriptNameMainTest.js',
  ],
  logLevel: '%log_level',
  twitterUserName: browserStackConfig.TWITTER_USER_NAME,
  twitterPassword: browserStackConfig.TWITTER_PASSWORD,
  exclude: [],
  capabilities: [
    {
      name: '%name',
      build: buildNameForDisplay,
      device: '%device',
      os: '%os',
      os_version: '%OS_VERSION',
      real_mobile: %real_mobile,
      acceptSslCerts: %ssl,
      browser: '%browser',
      'browserstack.appium_version': '1.9.1',
      'browserstack.console': '%console',
      'browserstack.debug': %debug,
      'browserstack.local': %localTest,
      isAndroid: %isAndroid,
      isCordovaFromAppStore: %isCordova,
      isIOS: %isIOS,
      isMobileScreenSize: %isMobileScreenSize,
    },
  ],
  coloredLogs: %colored_logs,
  waitforTimeout: %wait_timeout,
  connectionRetryTimeout: %connection_retry_timeout,
  connectionRetryCount: %connection_retry_count,

  framework: 'mocha',
  mochaOpts: {
    ui: 'bdd',
    timeout: 180000,
  },
}
