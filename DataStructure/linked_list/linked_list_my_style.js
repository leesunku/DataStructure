/**
prototype 스타일 싫다.
 */

let linked_list = function (e) {
	let that = this
	let first
	let last
	
	that.add = function (val) {
		let node = new Node(val);
		if (first == null)
			first = last = node;
		else {
			last.next = node;
			last = node;
		}
	}
	
	that.show = function () {
		let val = first
		first = first.next
		console.log(val);
	}
	
	that.remove = function (idx) {
		let i = 0;
		let cur = first
		let previous;
		if (idx == 0)
			first = cur.next;
		else {
			while (i++ < idx) {
				previous = cur
				cur = cur.next
			}
			previous.next = cur.next
		}
		return cur.val;
	}
	
	let Node = function (val) {
		this.val = val;
		let next = {}
	}
	return that
}

let linkedList = new linked_list();
linkedList.add(1);
linkedList.add(2);
linkedList.add(3);
linkedList.add(4);
linkedList.add(5);
linkedList.remove(3);
console.log(linkedList.show());
console.log(linkedList.show());
console.log(linkedList.show());
console.log(linkedList.show());


