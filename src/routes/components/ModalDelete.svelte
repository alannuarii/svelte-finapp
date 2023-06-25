<script>
	export let id;
	export let item;
</script>

<div
	class="modal fade"
	id="del{id}"
	tabindex="-1"
	aria-labelledby="exampleModalLabel"
	aria-hidden="true"
>
	<div class="modal-dialog modal-dialog-centered">
		<div class="modal-content">
			<div class="modal-body text-center py-3">
				<div>
					<h6>Anda yakin ingin hapus data</h6>
					<h6 class="text-danger fw-bold">{item}?</h6>
				</div>
			</div>
			<div class="modal-footer d-flex justify-content-center">
				<button type="button" class="btn tutup" data-bs-dismiss="modal">Tutup</button>
				<form method="POST">
					<input type="hidden" name="id" value={id} />
					<button type="submit" class="btn ya">Ya!</button>
				</form>
			</div>
		</div>
	</div>
</div>

<style>
	.ya {
		background-color: #57cc99;
		border-color: #57cc99;
		color: #ffffff;
	}
	.tutup {
		color: #57cc99;
	}
	button:active {
		color: #57cc99 !important;
	}
	.modal-content {
		border-radius: 20px;
	}
	h6:nth-child(1) {
		font-weight: 400;
	}
</style>
