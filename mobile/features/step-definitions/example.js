const { Given, When, Then } = require('@wdio/cucumber-framework');
const LoginPage = require('../pageobjects/login')
var config = require('../../wdio.conf').config;

Given('I am on the login page', async () => {
    console.log('teste de config ' + config.cucumberOpts.plataforma)
    console.log('teste de config2 ' + process.env.PLATAFORMA)
    await LoginPage.iniciar()
})

When(/^I login with (\w+) and (.+)$/, async (username, password) => {
    await LoginPage.paginadoe()
})

Then(/^I should see a flash message saying (.*)$/, async (message) => {
    await LoginPage.preencheForm()
})

