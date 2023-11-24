<script>
	import Home from '../../lib/Home.svelte'

	export let data
</script>

<Home translate={data.translate}></Home>