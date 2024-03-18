function hashMap() {
	let buckets = Array(16);
	let size = 16;

	const hash = (key) => hashFunction(key);

	const set = (key, value) => {
		let index = Math.floor(hashFunction(key) % size);
		console.log(index);

		// Check if index is in range of buckets
		if (index < 0 || index >= buckets.length) {
			throw new Error("Trying to access index out of bound");
		}

		buckets[index] = [key, value];
		console.log(buckets[index]);
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

console.log(myHashMap.hash("Simon"));
console.log(myHashMap.set("Micheal", "Millers"));
