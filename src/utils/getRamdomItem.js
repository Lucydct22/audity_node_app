function getRandomItem(arr) {
	const randomIndex = Math.floor(Math.random() * arr.length);
	const item = arr[randomIndex];
	return item;
}

module.exports = {
	getRandomItem
}