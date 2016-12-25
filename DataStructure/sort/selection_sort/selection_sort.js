let ex = [30,24,6,23,15,67,85,3,2,67,0];

for (let i = 0; i < ex.length; i++) {
	for (let j = i+1; j < ex.length; j++) {
		if ( ex[i] > ex[j]){
			let tmp = ex[i]
			ex[i] = ex[j];
			ex[j] = tmp;
			console.log(ex.toString() + ' i = ' + i + ', j = ' + j);			
		}
	}
}
console.log(ex.toString());