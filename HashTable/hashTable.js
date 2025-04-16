class HashTable{
    constructor(size){
        this.table = new Array(size)
        this.size = size
    }
    hash(key){
        let total = 0
        for(let i=0;i<key.length;i++){
            total+= key.charCodeAt(i)
        }
        return total % this.size
    }
    set(key , value){
        let index = this.hash(key)
        // this.table[index] = value
        const bucket = this.table[index]
        if(!bucket){
            this.table[index] = [{key,value}]
        }else{
            const same = bucket.find(item => item[0] === key)
            if(same){
                same[1] = value
            }else{
                bucket.push({key,value})
            }
        }
    }
    get(key){
        let index = this.hash(key)
        // return this.table[index]
        const bucket = this.table[index]
        if(bucket){
            const same = bucket.find(item => item[0] === key)
            if(same){
                return same[1]
            }
        }
        return undefined
    }
    remove(key){
        let index = this.hash(key)
        // this.table[index] = undefined
        const bucket = this.table[index]
        if(bucket){
            const same = bucket.find(item => item[0] === key)
            if(same){
                bucket.splice(bucket.indexOf(same),1)
            }
        }
    }
    display(){
        for(let i=0;i<this.table.length;i++){
            if(this.table[i]){
                console.log(i,this.table[i])
            }
        }
    }
}
const table = new HashTable(50)
table.set("Stewin","Stewin")
table.set("age",23)
table.display()
console.log(table.get("name"))