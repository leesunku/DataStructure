/**
<<<<<<< HEAD
stack : 후입선출 자료구조
 */

let STACK = new Array();
let idx = 0


const push = (data)=>{
	STACK[idx++] = data;
};
const pop = ()=> {
	if (idx === 0)
		return 'empty';
	return STACK[--idx];
}
const print = (data)=> {
	console.log(data);
}
push('a');
push('b');
print(pop());
push('c');
print(pop());
print(pop());
print(pop());