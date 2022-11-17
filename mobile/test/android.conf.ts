import {config} from './wdio.conf'
import * as path from 'path'

config.capabilities = [
  {
    platformName: 'Android',
    noReset: true,
    fullReset: false,
    maxInstances: 1,
    automationName: 'uiautomator2',
    deviceName: 'Android',
    platformVersion: '9',
    app: path.resolve(`./app/miau-dote.apk}`)
  }
];

config.cucumberOpts.tagExpression = '@androidApp'

export default config