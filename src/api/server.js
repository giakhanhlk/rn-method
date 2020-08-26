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

export { fetchApi };
