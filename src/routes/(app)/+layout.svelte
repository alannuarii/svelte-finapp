<script>
	import Header from "../components/Header.svelte";
</script>

<svelte:head>
	<title>FinApp</title>
	<meta name="description" content="Guestbook" />
</svelte:head>

<div id="master" class="d-sm-none">
	<Header />
	<main class="py-3 px-3">
		<slot />
	</main>
</div>

<style>
	#master {
		overflow-x: hidden;
	}
</style>