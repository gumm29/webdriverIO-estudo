const yaml = require('js-yaml')
const fs   = require('fs')

get_screen_mappings = (screen) => {
    let plataforma = process.env.PLATAFORMA.toLowerCase()
    dir = `./features/pageobjects/elements/${plataforma}/screen_mapping_${screen}.yml`
    return yaml.load(fs.readFileSync(dir))
}  

module.exports = get_screen_mappings