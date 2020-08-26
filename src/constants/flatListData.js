import faker from "faker";

const randomId = faker.random.uuid;
const randomProduct = faker.commerce.productMaterial;
const randomDescription = faker.commerce.product;
const randomImage = faker.image.food;

export default [
	{
		id: randomId(),
		name: randomProduct(),
		image: randomImage(),
		description: randomDescription(),
	},
	{
		id: randomId(),
		name: randomProduct(),
		image: randomImage(),
		description: randomDescription(),
	},
	{
		id: randomId(),
		name: randomProduct(),
		image: randomImage(),
		description: randomDescription(),
	},
	{
		id: randomId(),
		name: randomProduct(),
		image: randomImage(),
		description: randomDescription(),
	},
	{
		id: randomId(),
		name: randomProduct(),
		image: randomImage(),
		description: randomDescription(),
	},
	{
		id: randomId(),
		name: randomProduct(),
		image: randomImage(),
		description: randomDescription(),
	},
	{
		id: randomId(),
		name: randomProduct(),
		image: randomImage(),
		description: randomDescription(),
	},
	{
		id: randomId(),
		name: randomProduct(),
		image: randomImage(),
		description: randomDescription(),
	},
	{
		id: randomId(),
		name: randomProduct(),
		image: randomImage(),
		description: randomDescription(),
	},
];
