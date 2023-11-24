export const prerender = true;

export async function load({ parent, params }){

	let { language } = await parent()

	return {
		translate: language[params.lang]
	}
}