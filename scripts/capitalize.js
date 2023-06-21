const capitalize = (string) => {
	let capitalizeString = string.slice(0, 1).toUpperCase() + string.substr(1);
	return capitalizeString;
};

export default capitalize;
