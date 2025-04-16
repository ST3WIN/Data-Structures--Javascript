class HashTable{
    constructor(size){
        this.table = new Array(50)
        this.size = size
    }
    hash(key){
        let total = 0
        for(let i=0;i<key.length;i++){
            total+= charCodeAt(key[i])
        }
        return total % this.size
    }
    set(key,value){
        let index = this.hash(key)
        let bucket = this.table[index]
        if(!bucket){
            this.table[index] = [{key,value}]
            let same = bucket.find(item => item[0] === key)
            if(same){
                same[1] = [{key,value}]
            }else{
                this.table.push({key,value})
            }
        }
    }
    get(key){
        let index = this.hash(key)
        let bucket = this.table[index]
        if(bucket){
            let sameKey = bucket.find(item => item[0] === key)
            if(sameKey){
                return this.table[index]
            }
        }
        return undefined
    }
    display(){
        for(let i=0;i<this.table.length;i++){
            console.log(this.table[i])
        }
    }
}
let hash = new HashTable()
hash.set("name","Bob")
