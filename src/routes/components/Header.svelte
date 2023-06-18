<script>
	import Menu from './Menu.svelte';
</script>

<nav class="navbar shadow">
	<div class="container-fluid">
		<span class="navbar-brand h1 text-light ms-3">Monitoring Anggaran</span>
		<button class="btn btn-sm">Riwayat</button>
		<button class="btn btn-sm" data-bs-toggle="modal" data-bs-target="#menu">Input</button>
		<Menu />
	</div>
</nav>

<style>
	nav {
		height: 70px;
		border-radius: 0 0 0 30px;
		background-color: #38a3a5;
	}
	button:nth-child(2) {
		/* border-color: #57cc99; */
		color: #ffffff;
		margin-right: -10px;
	}
	button:nth-child(3) {
		background-color: #57cc99;
		border-color: #57cc99;
		color: #ffffff;
	}
	button:active {
		/* border-color: #57cc99 !important; */
		color: #57cc99 !important;
	}
</style>
