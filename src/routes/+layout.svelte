<script>
	import "../app.css";
  import { onMount } from "svelte";
	import { goto } from '$app/navigation';

	export let data;

	let lang = data.defLang;
	let translate = data.language[lang];

	function handleLang (value) {
		lang = value
		translate = data.language[lang]

		document.documentElement.lang = lang
		document.documentElement.style.fontFamily = translate.fontFamily

		goto(`/${lang}`)
	}

	onMount(() => {
		handleLang(lang)
	})
</script>

<svelte:head>
	<link href={translate.fontSrc} rel="stylesheet" />
	<title>{translate.title}</title>
</svelte:head>

<div class="p-7 md:p-12 flex flex-wrap-reverse gap-2 md:gap-4">
	<div class="grow">
		<h3 class="mb-2 text-black text-2xl">
			{translate["head_line"]}
		</h3>
		<p class="mb-2">
			<a class="text-black underline" href="https://zummon.page/" target="_blank">
				{translate["made_by"]}
			</a>
			{translate["translate_by"]}
		</p>
	</div>
	<div class="">
		<select class="border p-2" on:change={(e) => {
			handleLang(e.target.value)
		}}>
			{#each Object.entries(data.language) as [locale, item], index (`set-lang-${index}`)}
				<option value={locale}>
					{item.name}
				</option>
			{/each}
		</select>
	</div>
</div>

<slot />
