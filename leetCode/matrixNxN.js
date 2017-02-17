/** 
* @param {number,number} nXn Matrix
* @return {string} output nXn string
*/


function numArr(n){
	let arr = [];
	for(let i=1; i < n+1; i++){
		arr.push(i);
	}
	return arr;
}
function metrics(l,w){
	let arr = [];
	let firstArr = numArr(w);
	for(let i = 1; i<l+1; i++ ){
		arr.push(firstArr.map((x) => x*i));
		arr.push('\n');
	}
	console.log(arr);	
	return [].concat.apply([], arr).join(' ');
}