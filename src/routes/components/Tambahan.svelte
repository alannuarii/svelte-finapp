<script>
	export let title;
</script>

<div
	class="offcanvas offcanvas-bottom"
	tabindex="-1"
	id="tambahan"
	aria-labelledby="offcanvasBottomLabel"
>
	<div class="offcanvas-header">
		<h5 class="offcanvas-title" id="offcanvasBottomLabel">{title}</h5>
		<button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close" />
	</div>
	<div class="offcanvas-body small">
		<form method="POST">
			<div class="mb-3">
				<label for="exampleFormControlInput1" class="form-label">Tanggal</label>
				<input type="date" class="form-control" name="tanggal" />
			</div>
			<div class="mb-4">
				<label for="exampleFormControlInput1" class="form-label">Nilai (Rp)</label>
				<input type="text" class="form-control" name="nilai" />
			</div>
			<div>
				<input type="hidden" class="form-control" name="item" value="Dana Tambahan" />
				<input type="hidden" class="form-control" name="tarik" value="0" />
				<input type="hidden" class="form-control" name="extra" value="1" />
				<input type="hidden" class="form-control" name="keluar" value="0" />
				<button class="btn btn-primary w-25" type="submit">Submit</button>
			</div>
		</form>
	</div>
</div>

<style>
	.offcanvas {
		height: 400px;
	}
	.btn {
		background-color: #38a3a5;
		color: #ffffff;
	}
	h5 {
		color: #38a3a5;
		font-weight: 700;
	}
</style>
