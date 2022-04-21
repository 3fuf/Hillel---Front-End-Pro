function generateList(arr) {
	const ul = document.createElement("ul");

	arr.forEach(function(element){
		const li = document.createElement("li");

		if(Array.isArray(element)) {
			childElement = generateList(element);
		} else {
			childElement = document.createTextNode(element)
		}
		li.appendChild(childElement);
		ul.appendChild(li);
	});
	return ul;
}

document.body.appendChild(generateList([1, 2, 3]));
document.body.appendChild(generateList([1, 2, [1.1, 1.2, 1.3], 3]));