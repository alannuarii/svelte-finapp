<script>
	import Pengeluaran from './Pengeluaran.svelte';
	import Penarikan from './Penarikan.svelte';
	import Tambahan from './Tambahan.svelte';
</script>

<div
	class="modal fade"
	id="menu"
	tabindex="-1"
	aria-labelledby="exampleModalLabel"
	aria-hidden="true"
>
	<div class="modal-dialog modal-dialog-centered">
		<div class="modal-content py-4">
			<div class="modal-body d-flex justify-content-center">
				<div>
					<button type="button" class="btn" data-bs-toggle="offcanvas" data-bs-target="#penarikan"
						>Penarikan</button
					>
					<Penarikan title="Data Penarikan" />
					<button type="button" class="btn" data-bs-toggle="offcanvas" data-bs-target="#pengeluaran"
						>Pengeluaran</button
					>
					<Pengeluaran title="Data Pengeluaran" />
					<button type="button" class="btn" data-bs-toggle="offcanvas" data-bs-target="#tambahan"
						>Tambahan</button
					>
					<Tambahan title="Data Dana Tambahan" />
				</div>
			</div>
		</div>
	</div>
</div>

<style>
	button:nth-child(1) {
		background-color: #06d6a0;
		border-color: #06d6a0;
		color: #ffffff;
	}
	button:nth-child(3) {
		background-color: #ef476f;
		border-color: #ef476f;
		color: #ffffff;
	}
	button:nth-child(5) {
		background-color: #118ab2;
		border-color: #118ab2;
		color: #ffffff;
	}
</style>
