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
	let elementAmount = 0;

	const hash = (key) => {
		elementAmount += 1;
		if (elementAmount >= size) {
			size = size * 2;
		}

		return hashFunction(key);
	};

	const set = (key, value) => {
		let index = Math.floor(hash(key) % size);

		// Check if index is in range of buckets
		if (index < 0 || index >= size) {
			throw new Error("Trying to access index out of bound");
		}

		if (buckets[index] == undefined) {
			buckets[index] = new HashObj(key, value);
		} else {
			let current = buckets[index];

			while (current != null) {
				if (current.key == key) {
					current.value = value;
					break;
				}
				current = current.next;
			}

			current = new HashObj(key, value);
		}
	};

	const get = (key) => {
		let index = hash(key) % size;
		let currentObj = buckets[index];

		while (currentObj != null) {
			if (key == currentObj.key) {
				return currentObj.value;
			}
			currentObj = currentObj.next;
		}

		return null;
	};

	const has = (key) => {
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

		if (has(key)) {
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
		}

		return false;
	};

	const length = () => {
		let currentSize = 0;
		let currentElement;
		console.log(buckets);

		for (let i = 0; i < size; i++) {
			if (buckets[i] != null) {
				currentSize++;
				currentElement = buckets[i].next;
				while (currentElement != null) {
					currentSize++;
					currentElement = currentElement.next;
				}
			}
		}
		return currentSize;
	};

	const clear = () => {
		buckets = Array(16);
		size = 16;
		elementAmount = 0;
	};

	const keys = () => {
		let allKeys = [];

		buckets.forEach((bucket) => {
			let current = bucket;
			while (current != null) {
				allKeys.push(current.key);
				current = current.next;
			}
		});

		return allKeys;
	};

	const values = () => {
		let values = [];

		buckets.forEach((bucket) => {
			let current = bucket;
			while (current != null) {
				values.push(current.value);
				current = current.next;
			}
		});

		return values;
	};

	const entries = () => {
		let entriesArray = [];
		buckets.forEach((bucket) => {
			while (bucket != null) {
				entriesArray.push([bucket.key, bucket.value]);
				bucket = bucket.next;
			}
		});
		return entriesArray;
	};

	return {
		hash,
		set,
		get,
		has,
		remove,
		length,
		clear,
		keys,
		values,
		entries,
	};
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
myHashMap.set("Lili", "Amtor");
myHashMap.set("Frieda", "Pablos");
myHashMap.set("Erwin", "Müller");
myHashMap.set("Dora", "McBeth");
myHashMap.set("Siziliano", "Zubemendi");
myHashMap.set("Xavier", "Bobles");
myHashMap.set("Cloey", "Humphrey");
myHashMap.set("Millisaint", "Virginia");
myHashMap.set("Florence", "Georgia");
myHashMap.set("Bellatrix", "Grey");
myHashMap.set("James", "Maximov");
myHashMap.set("Konstanze", "Lombok");

myHashMap.set("Leon", "Leonson");
myHashMap.set("Isabel", "Hut");
