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
    print(){
        let current = this.head
        while(current){
            console.log(current.data)
            current = current.next
        }
    }
    removeFirst(){
        if(!this.head){
            return
        }
        this.head = this.head.next
    }
    removeLast(){
        if(!this.head){
            return
        }
        let current = this.head
        while(current.next.next){
            current= current.next
        }
        current.next = null
    }
    removeAt(index){
        if(index<0 || index>this.size()){
            console.log("Invalid Index")
            return
        }
        if(index == 1){
            this.head = this.head.next
            return
        }
        let current = this.head 
        for(let i=1;i<index-1;i++){
            current = current.next
        }
        if(current.next){
            current.next = current.next.next
        }
        
    }
    removeMiddle(){
        if(!this.head){
            return console("The list is empty")
        }
        if(!this.head.next){
            this.head = null
            return
        }
        let fast = this.head
        let slow = this.head
        let prev = null
        while(fast!==null && fast.next!==null){
            prev = slow
            slow = slow.next
            fast = fast.next.next
        }
        prev.next = prev.next.next
        return
    }
    removeElement(element){
        if(!this.head){
            return console.log("List is empty")
        }
        if(this.head.data == element){
            this.head = this.head.next
            return
        }
        let current = this.head
        let prev = null
        while(current){
            if(current.data == element){
                prev.next = current.next
                return
            }
            prev = current
            current = current.next
        }
        return console.log("Elemnt not found")
    }
}

const linkedList = new LinkedList()
linkedList.addFirst(1)
linkedList.addFirst(2)
linkedList.addFirst(3)
linkedList.addFirst(4)
linkedList.addFirst(5)
// linkedList.addAt(3,5)
// linkedList.removeMiddle()
// linkedList.removeElement(5)
linkedList.removeAt(1)
linkedList.print() 
