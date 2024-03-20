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
			buckets[index] = new HashObj(key, value);
		} else {
			let current = buckets[index];

			while (current.next != null) {
				if (current.key == key) {
					current.value = value;
					break;
				}
				current = current.next;
			}

			current.next = new HashObj(key, value);
		}
	};

	const get = (key) => {
		let index = hash(key) % size;
		let currentObj = buckets[index];

		while (currentObj != null) {
			console.log(currentObj);
			if (key == currentObj.key) {
				return currentObj.value;
			}
			currentObj = currentObj.next;
		}

		return null;
	};

	const has = (key) => {
		console.log(buckets);
		let index = hash(key) % size;
		let currentObj = buckets[index];

		while (currentObj != null) {
			if (key == currentObj.key) return true;
			currentObj = currentObj.next;
		}
		return false;
	};

	const remove = (key) => {
		let index = hash(key) % size;
		let currentObj = buckets[index];
		let previousObj;

		if (currentObj.key == key) {
			buckets[index] = null;
			return true;
		}

		while (currentObj != null) {
			if (currentObj.key == key) {
				previousObj.next = currentObj.next;
				return true;
			}

			previousObj = currentObj;
			currentObj = currentObj.next;
		}

		return false;
	};

	return { hash, set, get, has, remove };
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

myHashMap.set("Leon", "Leonson");
myHashMap.set("Isabel", "Hut");
myHashMap.set("Karin", "Stiefel");
myHashMap.set("Lera", "Stempel");
myHashMap.set("Mark", "Frerichs");
myHashMap.set("Joshua", "Norden");
myHashMap.set("Frank", "Walter");
myHashMap.set("Angelo", "Stiller");
myHashMap.set("Michaela", "Michaelis");
myHashMap.set("Patrick", "Seedorf");
myHashMap.set("Marianne", "Sürbrock");

console.log(myHashMap.remove("Lera"));
console.log(myHashMap.has("Lera"));
