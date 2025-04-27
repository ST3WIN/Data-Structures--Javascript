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
    getNode(prefix){
        let node = this.root
        for(let char of prefix){
            if(!node.children[char]) return null
            node = node.children[char]
        }
        return node
    }
    findAllWord(node , prefix , suggestion){
        if(node.wordEnd){
            suggestion.push(prefix)
        }
        for(let char in node.children){
            this.findAllWord(node.children[char] , prefix+char , suggestion)
        }
    }
    autoComplete(prefix){
        let node = this.getNode(prefix)
        if(!node) return []
        let suggestion = []
        this.findAllWord(node , prefix , suggestion)
        return suggestion
    }
}
const trie = new Trie()
trie.insert("Cat")
trie.insert("Car")
trie.insert("Cash")
console.log(trie.search("Cashe"))
console.log(trie.search("Cash"))
console.log(trie.autoComplete("Ca"))