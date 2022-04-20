function isSum() {
	let resault = 0;
	return function(num) {
		return resault += num;
	}
}

const sum = isSum();

console.log(sum(3), sum(5), sum(20));