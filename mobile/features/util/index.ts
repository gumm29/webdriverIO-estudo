// import yaml from 'js-yaml'
// import fs from 'fs'

export const get_screen_mappings = (screen) => {
    // let plataforma = get_running_filename()
    // let dir = `./features/pageobjects/elements/${plataforma}/screen_mapping_${screen}.yml`
    // return yaml.load(fs.readFileSync(dir))
}

export const get_screen_mappings_json = (screen) => {
    let dir = `./features/pageobjects/elements/screen_mapping_${screen}.json`
    return dir
}

export const get_running_filename = () => {
    let name = process.argv.toString()
    let names = name.split(',')
    names = name[3].split('.')
    return names[0]
}