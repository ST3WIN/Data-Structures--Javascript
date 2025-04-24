class HashTable {
  constructor(size) {
    this.table = new Array(size);
    this.size = size;
  }
  hash(key) {
    let total = 0;
    for (let i = 0; i < key.length; i++) {
      total += key.charCodeAt(i);
    }
    return total % this.size;
  }
  set(key, value) {
    let index = this.hash(key);
    let bucket = this.table[index];

    if (!bucket) {
      this.table[index] = [[key, value]];
      return;
    } else {
      let same = bucket.find((item) => item[0] === key);
      if (same) {
        same[1] = value;
      } else {
        bucket.push([key, value]);
      }
    }
  }
  get(key) {
    let index = this.hash(key);
    let bucket = this.table[index];
    if (bucket) {
      let same = bucket.find((item) => item[0] === key);
      if (same) {
        return same[1];
      }
    }
    return undefined;
  }
  remove(key) {
    let index = this.hash(key);
    let bucket = this.table[index];
    let same = bucket.find((item) => item[0] === key);
    if (same) {
      bucket.splice(bucket.indexOf(same), 1);
    }
  }
  display() {
    for (let i = 0; i < this.table.length; i++) {
      if (this.table[i]) console.log(i, this.table[i]);
    }
  }
}
let table = new HashTable(50);
table.set("name", "stewin");
table.set("age", 23);
// console.log(table.get("name"))
// table.remove("name")
table.display();
