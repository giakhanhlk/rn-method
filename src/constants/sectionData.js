import faker from "faker";

const randomId = faker.random.uuid;
const randomProduct = faker.commerce.productMaterial;
const randomDescription = faker.lorem.lines;
const randomImage = faker.image.food;

const sectionListData = [
	{
		data: [
			{
				name: randomProduct(),
				description: randomDescription(),
			},
			{
				name: randomProduct(),
				description: randomDescription(),
			},
			{
				name: randomProduct(),
				description: randomDescription(),
			},
		],
		title: "Server Side",
	},
	{
		data: [
			{
				name: randomProduct(),
				description: randomDescription(),
			},
			{
				name: randomProduct(),
				description: randomDescription(),
			},
			{
				name: randomProduct(),
				description: randomDescription(),
			},
		],
		title: "Client Side",
	},
	{
		data: [
			{
				name: randomProduct(),
				description: randomDescription(),
			},
			{
				name: randomProduct(),
				description: randomDescription(),
			},
			{
				name: randomProduct(),
				description: randomDescription(),
			},
		],
		title: "Artificial",
	},
];

export { sectionListData };
