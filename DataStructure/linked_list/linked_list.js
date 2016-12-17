/**
	linked list : 연결리스트
	특징 노드로 구성 되어있다.
	노드에는 값과 다음 값을 가르키는 주소를 가지고 있다.
	
	장점
	크기 제한이 없다?
	중간 삽입, 삭제가 array에 비할때 쉽다.
	삽입, 삭제 비용 O(1)
	
	단점
	탐색 단방향
	탐색 비용 O(n)
	
 */

let linked_list = function() {
	this.length = 0;
	this.headNode = new node(null);
}

let node = function(element) {
	this.data = element
	this.next = null;
}

linked_list.prototype.add = function (ele, pos) {
	let position = pos==undefined?this.length+1:pos
	let newNode = new node(ele);
	let preNode = this.headNode;
	
	for(let i = 1; i < position; i++)
		preNode = preNode.next;
	
	newNode.next = preNode==null?null:preNode.next;
	preNode.next = newNode;
	
	this.length++;
	
	console.log("-------------------------------------------");
	console.log("add", ele);
	console.log("position", pos);
	console.log("-------------------------------------------");
	this.print();
}

linked_list.prototype.remove = function (pos) {
	let ret = null;
	let position = pos==undefined?0:pos;
	if (this.isEmpty()) 
		console.log('list is Empty');
	else if (position < this.length) {
		let preNode = this.headNode
		for (let i = 0; i < position; i++)
			preNode = preNode.next;
		net = preNode.next.data;
		preNode.next = preNode.next.next;
		
		this.length--;
	} else
		console.log('index err');
	return ret;
	console.log("-------------------------------------------");
	console.log("position", pos);
	console.log("remove", ret);
	console.log("-------------------------------------------");
	this.print();
}

linked_list.prototype.peek = function (pos) {
	let ret = null;
	let position = pos==undefined?0:pos;
	if (this.isEmpty())
		console.log('list is Empty')
	else if (position <this.length) {
		var preNode = this.headNode
		for (let i = 0; i < position; i++)
			preNode = preNode.next
		ret = preNode.next.data
	} else
		console.log('index error');
}
linked_list.prototype.print = function (pos) {
	let str = 'linked_list : ';
	let node = this.headNode.next;
	while (node != null){
		str += node.data;
		str += ' => ';
		node = node.next;
	}
	console.log(str);
}

linked_list.prototype.isEmpty = function () {
	let ret = false;
	if (!this.length) 
		ret = true;
	return ret;
}

let list = new linked_list();
list.add(1);
list.add(2);
list.add(3);
list.add(3,1);
list.add(1);
list.remove();
list.remove(3);


