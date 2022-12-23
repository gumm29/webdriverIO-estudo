import { Given, When, Then } from '@wdio/cucumber-framework'
import LoginPage from '../pageobjects/login'
import {config} from '../../wdio.conf'

Given('I am on the login page', async () => {
    console.log('teste de config ' + config.cucumberOpts.plataforma)
    console.log('teste de config2 ' + process.env.PLATAFORMA)
    await LoginPage.iniciar()
})

When('I login with {string} and {string}', async (_username, _password) => {
    await LoginPage.paginadoe()
})

Then('I should see a flash message saying {string}', async (_message) => {
    await LoginPage.preencheForm()
})

