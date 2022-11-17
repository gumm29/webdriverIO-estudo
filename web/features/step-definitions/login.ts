import { Given, When, Then } from '@cucumber/cucumber'
import Page from '../pageobjects/index.page'

const index = new Page()
let title

Given('acesso o site', async () => 
  index.visit()
)

When('clico em entrar', async () =>
  title = index.titulo()
)

Then('verifico mudanca de pagina', async () =>{
  expect(title).toHaveTextContaining('UOL')
})
