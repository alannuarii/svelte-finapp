<script>
	import { convertDate } from '../../lib/js/date';
	import ModalDelete from '../components/ModalDelete.svelte';

	export let data;
	let dataBulanIni = data.data1.data;
	let dataBulanLalu = data.data2.data;
	let arrPengeluaran = [];
	let arrPenarikan = [];
	let arrDanaTambahan = [];
	let arrPrevSaldo = [];
	let prevSaldo = 0;
	let totPenarikan = 0;
	let totPengeluaran = 0;
	let danaTambahan = 0;

	if (dataBulanIni.length > 0) {
		for (let i = 0; i < dataBulanIni.length; i++) {
			if (dataBulanIni[i].keluar === 1) {
				arrPengeluaran.push(-dataBulanIni[i].nilai);
			}
			if (dataBulanIni[i].tarik === 1) {
				arrPenarikan.push(dataBulanIni[i].nilai);
			}
			if (dataBulanIni[i].extra === 1) {
				arrDanaTambahan.push(dataBulanIni[i].nilai);
			}
		}

		arrPengeluaran.forEach((num) => (totPengeluaran += num));
		arrPenarikan.forEach((num) => (totPenarikan += num));
		arrDanaTambahan.forEach((num) => (danaTambahan += num));
	}

	if (dataBulanLalu.length > 0) {
		for (let i = 0; i < dataBulanLalu.length; i++) {
			if (dataBulanLalu[i].keluar === 1) {
				arrPrevSaldo.push(-dataBulanLalu[i].nilai);
			}
			if (dataBulanLalu[i].tarik === 1) {
				arrPrevSaldo.push(dataBulanLalu[i].nilai);
			}
			if (dataBulanLalu[i].extra === 1) {
				arrPrevSaldo.push(dataBulanLalu[i].nilai);
			}
		}
	}

	prevSaldo = arrPrevSaldo.reduce((acc, cur) => acc + cur, 0);

	const saldo = totPenarikan + danaTambahan + prevSaldo + totPengeluaran;
</script>

<section>
	{#if dataBulanIni.length === 0}
		<p>Data kosong</p>
	{:else}
		<div class="mb-3">
			<div class="row mb-1">
				<!-- svelte-ignore a11y-label-has-associated-control -->
				<label class="col-6">Sisa Saldo Bulan Lalu</label>
				<div class="col-6">
					<input
						type="text"
						class="form-control form-control-sm"
						value="Rp {prevSaldo.toLocaleString()}"
						disabled
					/>
				</div>
			</div>
			<div class="row mb-1">
				<!-- svelte-ignore a11y-label-has-associated-control -->
				<label class="col-6">Total Penarikan</label>
				<div class="col-6">
					<input
						type="text"
						class="form-control form-control-sm"
						value="Rp {totPenarikan.toLocaleString()}"
						disabled
					/>
				</div>
			</div>
			<div class="row mb-1">
				<!-- svelte-ignore a11y-label-has-associated-control -->
				<label class="col-6">Total Pengeluaran</label>
				<div class="col-6">
					<input
						type="text"
						class="form-control form-control-sm"
						value="Rp {Math.abs(totPengeluaran).toLocaleString()}"
						disabled
					/>
				</div>
			</div>
			<div class="row mb-1">
				<!-- svelte-ignore a11y-label-has-associated-control -->
				<label class="col-6">Dana Tambahan</label>
				<div class="col-6">
					<input
						type="text"
						class="form-control form-control-sm"
						value="Rp {danaTambahan.toLocaleString()}"
						disabled
					/>
				</div>
			</div>
			<div class="row">
				<!-- svelte-ignore a11y-label-has-associated-control -->
				<label class="col-6">Saldo</label>
				<div class="col-6">
					<input
						type="text"
						class="form-control form-control-sm"
						value="Rp {saldo.toLocaleString()}"
						disabled
					/>
				</div>
			</div>
		</div>
		<table class="table table-bordered text-center">
			<thead>
				<tr class="align-middle">
					<th scope="col"> Transaksi</th>
					<th scope="col">Nilai (Rp)</th>
				</tr>
			</thead>
			<tbody>
				{#each dataBulanIni as data}
					{#if data.tarik === 1}
						<tr class="align-middle">
							<td class="item text-start">
								<div class="d-flex justify-content-between align-items-center">
									<div class="d-flex flex-column align-items-start">
										<span class="badge bg-success-subtle">{convertDate(data.tanggal)}</span>
										<h6>{data.item_keluar}</h6>
									</div>
									<div>
										<i
											class="bi-x text-danger btn"
											data-bs-toggle="modal"
											data-bs-target="#del{data.id}"
										/><ModalDelete id={data.id} />
									</div>
								</div>
							</td>
							<td class="value text-end text-success">{data.nilai.toLocaleString()}</td>
						</tr>
					{:else if data.keluar === 1}
						<tr class="align-middle">
							<td class="item text-start">
								<div class="d-flex justify-content-between align-items-center">
									<div class="d-flex flex-column align-items-start">
										<span class="badge bg-danger-subtle">{convertDate(data.tanggal)}</span>
										<h6>{data.item_keluar}</h6>
									</div>
									<div>
										<i
											class="bi-x text-danger btn"
											data-bs-toggle="modal"
											data-bs-target="#del{data.id}"
										/><ModalDelete id={data.id} />
									</div>
								</div>
							</td>
							<td class="value text-end text-danger">{data.nilai.toLocaleString()}</td>
						</tr>
					{:else}
						<tr class="align-middle">
							<td class="item text-start">
								<div class="d-flex justify-content-between align-items-center">
									<div class="d-flex flex-column align-items-start">
										<span class="badge bg-primary-subtle">{convertDate(data.tanggal)}</span>
										<h6>{data.item_keluar}</h6>
									</div>
									<div>
										<i
											class="bi-x text-danger btn"
											data-bs-toggle="modal"
											data-bs-target="#del{data.id}"
										/><ModalDelete id={data.id} />
									</div>
								</div>
							</td>
							<td class="value text-end text-success">{data.nilai.toLocaleString()}</td>
						</tr>
					{/if}
				{/each}
			</tbody>
		</table>
	{/if}
</section>

<style>
	.item {
		width: 80%;
	}
	.value {
		width: 20%;
		font-size: 15px;
		font-weight: 500;
	}
	span {
		font-size: 10px;
	}
	h6 {
		margin: 0px;
		font-size: 15px;
		font-weight: 400;
	}
	th {
		font-weight: 400;
	}
	label {
		font-size: 15px;
	}
	thead th {
		font-weight: 700;
		color: #ffffff;
		background-color: #38a3a5;
	}
	.bg-primary-subtle {
		background-color: #118ab2 !important;
		opacity: 0.9;
		font-weight: 300;
	}
	.bg-success-subtle {
		background-color: #06d6a0 !important;
		opacity: 0.9;
		font-weight: 300;
	}
	.bg-danger-subtle {
		background-color: #ef476f !important;
		opacity: 0.9;
		font-weight: 300;
	}
	label {
		color: #22577a;
		font-weight: 600;
	}
	input {
		color: #22577a;
		border-color: #80ed99;
		background-color: #ffffff;
	}
	.btn {
		border: 0;
	}
</style>
