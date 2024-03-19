class HashObj {
	constructor(key, value) {
		this.key = key;
		this.value = value;
	}
	next = null;
}

function hashMap() {
	let buckets = Array(16);
	let size = 16;

	const hash = (key) => hashFunction(key);

	const set = (key, value) => {
		let index = Math.floor(hashFunction(key) % size);

		// Check if index is in range of buckets
		if (index < 0 || index >= buckets.length) {
			throw new Error("Trying to access index out of bound");
		}

		if (buckets[index] == undefined) {
			buckets[index] = [key, value];
			console.log(buckets[index]);
		}
	};

	return { hash, set };
}

// Hash Function
function hashFunction(key) {
	let hashCode = 0;

	const primeNumber = 31;
	for (let i = 0; i < key.length; i++) {
		hashCode = primeNumber * hashCode + key.charCodeAt(i);
	}

	return hashCode;
}

let myHashMap = hashMap();

myHashMap.set("Micheal", "Mills");

let myNode = new HashObj("Jürgen", "Jürgenson");
console.log(myNode.key, myNode.value, myNode.next);
myNode.next = "Hello";
console.log(myNode.next);
