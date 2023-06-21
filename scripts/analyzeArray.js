const analyzeArray = (array) => {
	let length = array.length;
	let sum = array.reduce((sum, current) => sum + current, 0);
	let average = sum / length;
	let min = findMin(array);
	let max = findMax(array);
	return { average, min, max, length };
};

function findMin(array) {
	let min = array[0];
	min = array.reduce((min, current) => (current < min ? current : min));
	return min;
}

function findMax(array) {
	let max = array[0];
	max = array.reduce((max, current) => (current > max ? current : max));
	return max;
}

export default analyzeArray;
