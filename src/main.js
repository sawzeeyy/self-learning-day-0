export default function AritGeo (numbers) {
	if (!Array.isArray(numbers)) {
		return 'undefined';
	} else {
		const sizeOfNumbers = numbers.length;
		let ap = [];
		let gp = [];
		if (sizeOfNumbers === 0) {
		    return 0;
		} else if (sizeOfNumbers === 1 || sizeOfNumbers === 2){
		    return -1;
		} else {
		    for (let i = 0; i < sizeOfNumbers - 1; i++) {
		      const checkAp = numbers[i+1] - numbers[i];
		      ap.push(checkAp);
		      const checkGp = numbers[i+1] / numbers[i];
		      gp.push(checkGp);
		    }
		    
		    if (ap.every( (val, i, arr) => val == arr[0] )) {
		      return 'Arithmetic';
		    } else if(gp.every( (val, i, arr) => val == arr[0] )) {
		      return 'Geometric';
		    } else {
		      return -1;
		    }
		}

	}
}