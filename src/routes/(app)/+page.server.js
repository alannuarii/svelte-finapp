export const actions = {
	default: async ({ request }) => {
		const data = await request.formData();

		const formData = new FormData();
		formData.append('tanggal', data.get('tanggal'));
		formData.append('tarik', data.get('tarik'));
		formData.append('extra', data.get('extra'));
		formData.append('keluar', data.get('keluar'));
		formData.append('item', data.get('item'));
		formData.append('nilai', data.get('nilai'));

		const parsedData = {};
		for await (const [name, value] of formData.entries()) {
			parsedData[name] = value;
		}

		const res = await fetch('http://127.0.0.1:3333/insert', {
			method: 'POST',
			body: JSON.stringify(parsedData),
			headers: {
				'Content-Type': 'application/json'
			}
		});

		return res.json();
	}
};

export const load = async () => {
	const [res1, res2] = await Promise.all([
		fetch('http://127.0.0.1:3333/getthismonth').then((res) => res.json()),
		fetch('http://127.0.0.1:3333/getbeforemonth').then((res) => res.json())
	]);

	return {
		data1: res1,
		data2: res2
	};
};
