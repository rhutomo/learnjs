class HashTable {
    constructor(size){
        this.data = new Array(size);
    }

    _hash(key) {
        let hash = 0;
        for (let i =0; i < key.length; i++){
            hash = (hash + key.charCodeAt(i) * i) % this.data.length
        }
        return hash;
    }

    set(key, value) {
        if (!this.data[this._hash(key)]) {
            return this.data[this._hash(key)] = [key, value]
        }
        return `${key} can't be inserted, address has been filled.`
    }

    get(key) {
        if (this.data[this._hash(key)][0] !== key) {
            return `There is no data with key ${key}`
        }
        return this.data[this._hash(key)]
    }

    keys() {
        let keys = []
        for (let i=0; i<this.data.length; i++) {
            if (this.data[i]) {
                keys.push(this.data[i][0])
            }
        }
        if (keys.length === 0) {
            return `There is no data in your bucket`
        }
        return keys
    }
}
  
const myHashTable = new HashTable(50);
myHashTable.set('grapes', 10000)
myHashTable.set('apples', 11000)
myHashTable.set('dragonfruit', 9000)
myHashTable.set('mangos', 7000)
console.log(myHashTable.keys())