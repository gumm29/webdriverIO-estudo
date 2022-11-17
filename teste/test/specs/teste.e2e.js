const LoginPage = require('../pageobjects/login.page')

describe('My Login application 2', () => {
  it('should login with valid credentials', async () => {
    await LoginPage.iniciar()
    await LoginPage.paginadoe()
    await LoginPage.preencheForm()
  })
})

describe('My Login application 3', () => {
  it('should login with valid credentials', async () => {
    await LoginPage.iniciar()
    await LoginPage.paginadoe()
    await LoginPage.preencheForm()
  })
})

describe('My Login application 4', () => {
  it('should login with valid credentials', async () => {
    await LoginPage.iniciar()
    await LoginPage.paginadoe()
    await LoginPage.preencheForm()
  })
})