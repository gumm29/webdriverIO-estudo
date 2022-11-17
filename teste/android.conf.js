
const {config} = require('./wdio.conf')
const path = require('path')

config.capabilities = [
  {
    platformName: 'Android',
    noReset: false,
    fullReset: false,
    autoLaunch: false,
    maxInstances: 1,
    automationName: 'uiautomator2',
    deviceName: 'Android',
    platformVersion: '10',
    app: path.resolve('./app/miau-dote.apk'),
    specs: ["test/specs/example.e2e.js"]
  },
  {
    platformName: 'Android',
    noReset: true,
    fullReset: false,
    autoLaunch: false,
    maxInstances: 1,
    automationName: 'uiautomator2',
    deviceName: 'Android',
    platformVersion: '10',
    app: path.resolve('./app/miau-dote.apk'),
    specs: ["test/specs/teste.e2e.js"]
  }
]

exports.config = config