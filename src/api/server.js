const url = "https://5f1ec7a557e3290016863b20.mockapi.io/api/v1/rn-learn";

const fetchApi = async () => {
	try {
		const res = await fetch(url);
		const data = await res.json();
		return data;
	} catch (error) {
		console.log(error);
	}
};

const postApi = async () => {
	try {
		const res = await fetch(api, {
			method: "POST",
			headers: {
				"Accept": "application/json",
				"Content-Type": "application/json",
			},
			body: JSON.stringify(params)
		});
		let data = await res.json();
		return data
	} catch (err) {
		console.log(err)
	}
}

export { fetchApi };
