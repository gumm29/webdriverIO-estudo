const yaml = require('js-yaml')
const fs   = require('fs')

get_screen_mappings = (screen) => {
    let plataforma = get_runnig_filename()
    dir = `./features/pageobjects/elements/${plataforma}/screen_mapping_${screen}.yml`
    return yaml.load(fs.readFileSync(dir))
}

get_runnig_filename = () => {
    var name = process.argv.toString()
    name = name.split(',')
    name = name[3].split('.')
    return name[0]
}

module.exports = get_screen_mappings