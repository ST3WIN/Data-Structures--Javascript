class Node{
    constructor(data){
        this.data = data
        this.next = null
    }
}

class LinkedList{
    constructor(){
        this.head = null //initially the head points to null,as there is no nodes
    }
    addFirst(data){
        const newNode = new Node(data)
        newNode.next = this.head //we should assign the next in new node before assigning the the head(if there is no head, null will the next of newNode)
        this.head = newNode //assign the head with newNode making it the new head.
    }
    addLast(data){
        const newNode = new Node(data)
        if(!this.head){
            this.head = newNode
            return
        }
        let current = this.head
        while(current.next){
            current = current.next
        }
        current.next = newNode 
    }
    size(){
        let size = 0
        let current = this.head
        while(current){
            size++
            current = current.next
        }
        return size
    }
    palindrome(){
        let value = []
        let current = this.head
        while(current){
            value.push(current.data)
            current = current.next
        }
        let start = 0
        let end = value.length-1
        while(start<end && value[start]===value[end]){
            start++
            end--
        }
        return start>=end
    }
    print(){
        let current = this.head
        while(current){
            console.log(current.data)
            current = current.next
        }
    }
}

const linkedList = new LinkedList()
linkedList.addFirst(1)
linkedList.addFirst(2)
linkedList.addFirst(2)
linkedList.addFirst(1)
console.log(linkedList.palindrome())
linkedList.print()

