import language from '../lib/language.json'
// https://www.lipsum.com/
// https://generator.lorem-ipsum.info/
// https://lorem.in.th/

export async function load(){

	return {
		language,
		defLang: Object.keys(language)[0]
	}
}