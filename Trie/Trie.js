class Node{
    constructor(){
        this.children  = {}
        this.wordEnd = false
    }
}
class Trie{
    constructor(){
        this.root = new Node()
    }
    insert(word){
        let node = this.root
        for(let char of word){
            if(!node.children[char]){
                node.children[char] = new Node()
            }
            node = node.children[char]
        }
        node.wordEnd = true
    }
    search(word){
        let node = this.root
        for(let char of word){
            if(!node.children [char]) return false
            node = node.children[char]
        }
        return node.wordEnd
    }
}
const trie = new Trie()
trie.insert("Cat")
trie.insert("Car")
trie.insert("Cash")
console.log(trie.search("Cashe"))
console.log(trie.search("Cash"))