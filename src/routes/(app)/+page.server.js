export const actions = {
	default: async ({ request }) => {
		const data = await request.formData();

		const formData = new FormData();
		formData.append('tanggal', data.get('tanggal'));
		formData.append('tarik', data.get('tarik'));
		formData.append('keluar', data.get('keluar'));
		formData.append('item', data.get('item'));
		formData.append('online', data.get('online'));
		formData.append('nilai', data.get('nilai'));
		formData.append('id', data.get('id'));
		const parsedData = {};
		for await (const [name, value] of formData.entries()) {
			parsedData[name] = value;
		}

		if (parsedData.id !== 'null') {
			const res = await fetch('https://finapp.anpy.my.id/delete', {
				method: 'DELETE',
				body: JSON.stringify(parsedData),
				headers: {
					'Content-Type': 'application/json'
				}
			});

			return res.json();
		} else if (parsedData.id === 'null') {
			const res = await fetch('https://finapp.anpy.my.id/insert', {
				method: 'POST',
				body: JSON.stringify(parsedData),
				headers: {
					'Content-Type': 'application/json'
				}
			});

			return res.json();
		}
	}
};

export const load = async () => {
	const [res1, res2] = await Promise.all([
		fetch('https://finapp.anpy.my.id/getthismonth').then((res) => res.json()),
		fetch('https://finapp.anpy.my.id/getbeforemonth').then((res) => res.json())
	]);

	return {
		data1: res1,
		data2: res2
	};
};
