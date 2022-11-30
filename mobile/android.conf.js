
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
    specs: ["features/*.feature"]
  }
]

exports.config = config