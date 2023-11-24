export const prerender = true;

export async function load({ parent }){

	let { language, defLang } = await parent()

	return {
		translate: language[defLang]
	}
}