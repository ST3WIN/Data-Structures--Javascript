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
    addAt(index,data){
        if(index<0 || index>this.size()){
            console.log("invlid index")
            return
        }
        const newNode = new Node(data)
        if(index == 0){
            newNode.next = this.head
            this.head = newNode
            return
        }
        let current = this.head
        for(let i=0;i<index-1;i++){
            current = current.next
        }
        newNode.next = current.next
        current.next = newNode
    }
    middle(){
        if(!this.head){
            return
        }
        let fast = this.head
        let slow = this.head
        while(fast !== null && fast.next!==null){
            slow = slow.next
            fast = fast.next.next
        }
        return console.log("Data =",slow.data)
    }
    reverse(){
        if(!this.head){
            return
        }
        let prev = null
        let current = this.head
        while(current){
            const next = current.next
            current.next = prev
            prev = current
            current=next
        }
        this.head = prev
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
linkedList.addFirst(3)
linkedList.addFirst(4)
linkedList.addAt(3,5)
linkedList.reverse()
linkedList.print()
linkedList.middle() 
