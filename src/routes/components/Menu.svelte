<script>
	import Pengeluaran from './Pengeluaran.svelte';
	import Penarikan from './Penarikan.svelte';
</script>

<div
	class="modal fade"
	id="menu"
	tabindex="-1"
	aria-labelledby="exampleModalLabel"
	aria-hidden="true"
>
	<div class="modal-dialog modal-dialog-centered">
		<div class="modal-content bg-transparent border border-0">
			<div class="modal-body d-flex justify-content-center">
				<div class="d-flex justify-content-between">
					<button type="button" class="btn" data-bs-toggle="offcanvas" data-bs-target="#penarikan"
						><div class="d-flex flex-column justify-content-center align-items-center">
							<i class="bi-plus-lg" /><span>Penarikan</span>
						</div></button
					>
					<Penarikan title="Data Pemasukan" />
					<button type="button" class="btn" data-bs-toggle="offcanvas" data-bs-target="#pengeluaran"
						><div class="d-flex flex-column justify-content-center align-items-center">
							<i class="bi-dash-lg" /><span>Pengeluaran</span>
						</div></button
					>
					<Pengeluaran title="Data Pengeluaran" />
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
	i {
		font-size: 30px;
	}
	span {
		font-size: 10px;
	}
	button {
		width: 45%;
		border-radius: 15px;
	}
</style>
