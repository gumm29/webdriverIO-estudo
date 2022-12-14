import {get_screen_mappings, get_screen_mappings_json, get_running_filename} from '../util'
// import  json_map from './elements/screen_mapping_home.json'

class LoginPage {
  mapping: any
  mapping_json: any

  constructor(){
    // this.mapping = get_screen_mappings('home')
    this.mapping_json = get_screen_mappings_json('home')
  }

  // get botaoIniciar () { return $(this.mapping.ver) }
  get botaoIniciar () { return $('//android.widget.Button[1]') }
  get doe () { return $('//android.view.View[3]/android.view.View')} //$(this.mapping_json['ver']) }
  get togle () { return $('//android.widget.CheckBox/android.view.View[1]')}
  get tituloForm () { return $('//android.view.View/android.view.View[2]/android.view.View[3]')}
  get nomeGato () { return $('//android.view.View[2]/android.view.View[4]/android.view.View[2]/android.view.View[1]/android.view.View[1]/android.view.View[1]/android.view.View/android.widget.EditText')}
  get enderecoGato () {return $('//android.view.View[2]/android.view.View[4]/android.view.View[4]/android.view.View[1]/android.view.View[1]/android.view.View[1]/android.view.View/android.widget.EditText')}
  get telGato () {return $('//android.view.View[2]/android.view.View[4]/android.view.View[6]/android.view.View[1]/android.view.View[1]/android.view.View[1]/android.view.View/android.widget.EditText')}
  get gato () {return $('//android.view.View[2]/android.view.View[4]/android.view.View[8]/android.view.View[1]/android.view.View[1]/android.view.View[1]/android.view.View/android.widget.EditText')}
  get idadeGato () {return $('//android.view.View[2]/android.view.View[4]/android.view.View[10]/android.view.View[1]/android.view.View[1]/android.view.View[1]/android.view.View/android.widget.EditText')}
  get motivoDoacao () {return $('//android.view.View[2]/android.view.View[4]/android.view.View[12]/android.view.View[1]/android.view.View[1]/android.view.View[1]/android.view.View/android.widget.EditText') }
  get personaPet () { return $('//android.view.View[2]/android.view.View[4]/android.view.View[14]/android.view.View[1]/android.view.View[1]/android.view.View[1]/android.view.View/android.widget.EditText')}
  get foto () {return $('#file')}
  get salvarButton () {return $('//android.view.View[2]/android.view.View[4]/android.widget.Button')}

  async iniciar () {
    await this.botaoIniciar.waitForDisplayed({ timeout: 1000000 })
    let nome = await this.botaoIniciar.getText()
    expect(nome === 'VAMOS L??!').toBeTruthy()
    await this.botaoIniciar.click();
  }

  async paginadoe () {
    await this.doe.waitForDisplayed({ timeout: 1000000 })
    await this.togle.click()
  }

  async preencheForm () {
    await this.tituloForm.waitForDisplayed({ timeout: 1000000 })
    let nomeForm = await this.tituloForm.getText()
    expect(nomeForm === 'Formul??rio para Doa????o')
    await this.nomeGato.addValue('teste')
    await this.enderecoGato.addValue('teste')
    await this.telGato.addValue('11111111111')
    await this.gato.addValue('teste')
    await this.idadeGato.addValue(11)
    await driver.touchAction([ {action: 'longPress', x: 0, y: 1000}, { action: 'moveTo', x: 0, y: 10}, 'release' ]);
    await this.motivoDoacao.addValue('teste 123')
    await this.personaPet.addValue('123 teste')
    // await this.foto.click()
    await this.salvarButton.click()
    await this.doe.waitForDisplayed({ timeout: 1000000 })
  }
}

export default new LoginPage()
