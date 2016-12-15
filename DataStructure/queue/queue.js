/**
queue : 선입선출 스택과 반대인 자료구조
 */

const QUEUE = new Array();

let front = 0;
let back = 0;

const put = (data) => {
	QUEUE[front++] = data;	
}

const get = () => {
	if (front <= back)
		return 'empty';
	return QUEUE[back++];
}
 
console.log(get());
console.log(get());
console.log(get());
put('aaa');
console.log(get());
put('1234');
put('bbb');
put('dev');
console.log(get());
put('777');
console.log(get());
console.log(get());
console.log(get());

