<script>
  import language from './language.json'

  let lang = 'en'

  $: translate = language[lang]

  $: document.documentElement.lang = lang
  $: document.documentElement.style.fontFamily = translate.fontFamily
</script>

<svelte:head>
  <link href={translate.fontSrc} rel="stylesheet">
  <title>{translate.title}</title>
</svelte:head>

<div class="p-7 md:p-12 flex flex-wrap-reverse gap-2 md:gap-4">
  <div class="grow">
    <h3 class="mb-2 text-black text-2xl">
      { translate["head_line"] }
    </h3>
    <p class="mb-2">
      <a
        class="text-black"
        href="https://zummon.page/"
        target="_blank"
      >
        <u>{ translate["made_by"] }</u>
      </a>
      { translate["translate_by"] }
    </p>
  </div>
  <div class="">
    <select class="border p-2" bind:value={lang}>
      {#each Object.keys(language) as locale, index (`lang-${index}`)}
        <option value={locale}>
          { language[locale].name }
        </option>
      {/each}
    </select>
  </div>
</div>

<div class="px-4 md:px-8 pb-7 md:pb-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 divide-y sm:divide-y-0 md:divide-x">
  <div class="sm:row-span-2 md:row-span-2 p-2 md:p-3 lg:p-4">
    <img class="rounded" src="https://cdn.leonardo.ai/users/e29c0123-9b74-49b3-a29b-9d7e230a889c/generations/d55e3601-4316-4aea-bbf0-4afaa9258273/variations/Default_Danielle_van_de_Donk_full_body_potrait_of_a_photoreali_0_d55e3601-4316-4aea-bbf0-4afaa9258273_1.jpg" alt="" />
    <p class="mt-6 text-justify">
      { translate["whats_it"] }
    </p>
    <div class="mt-6">
      <span class="sr-only">icon icon-tabler icon-tabler-chart-dots-3</span>
      <svg xmlns="http://www.w3.org/2000/svg" class="mx-auto" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
        <path d="M5 7m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
        <path d="M16 15m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
        <path d="M18 6m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
        <path d="M6 18m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
        <path d="M9 17l5 -1.5" />
        <path d="M6.5 8.5l7.81 5.37" />
        <path d="M7 7l8 -1" />
      </svg>
    </div>
  </div>
  <div class="p-2 md:p-3 lg:p-4">
    <p class="first-letter:text-7xl first-letter:mr-2 first-letter:float-left text-justify">
      { translate["other_text_1"] }
    </p>
  </div>
  <div class="p-2 md:p-3 lg:p-4">
    <p class="first-letter:text-7xl first-letter:mr-2 first-letter:float-left text-justify">
      { translate["other_text_2"] }
    </p>
  </div>
  <div class="sm:col-span-2 md:col-span-2 p-2 md:p-3 lg:p-4">
    <p class="first-letter:text-7xl first-letter:mr-2 first-letter:float-left text-justify">
      { translate["other_text_3"] }
    </p>
  </div>
</div>
