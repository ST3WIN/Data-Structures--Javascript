class Node{
    constructor(data){
        this.data = data
        this.next = null
    }
}
class LinkedList{
    constructor(){
        this.head = null
    }
    addFirst(data){
        const newNode = new Node(data)
        newNode.next = this.head
        this.head = newNode
    }
    addLast(data){
        const newNode = new Node(data)
        if(!this.head){
            this.head = newNode
        }
        let current = this.head
        while(current.next){
            current = current.next
        }
        current.next = newNode
    }
    addAt(data,position){
        if(position<0 || position>this.size()){
            return console.log("Invalid position")
        }
        const newNode = new Node(data)
        if(position == 1){
            newNode.next = this.head
            this.head = newNode
        }
        let current = this.head
        for(let i= 1;i<position-1;i++){
            current = current.next
        }
        newNode.next = current.next
        current.next = newNode
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
            current = next
        }
        this.head = prev
    }
    middle(){
        if(!this.head){
            return
        }
        let slow = this.head
        let fast = this.head
        while(fast!==null && fast.next !==null){
            slow = slow .next
            fast = fast.next.next
        }
        return console.log("Middle Element = ",slow.data)
    }
    removeMiddle(){
        if(!this.head){
            return
        }
        if(!this.head.next){
            this.head = null
            return
        }
        let prev = null 
        let slow = this.head
        let fast = this.head
        while(fast!==null && fast.next!==null){
            prev = slow
            slow = slow.next
            fast = fast.next.next
        }
        prev.next = prev.next.next
        return
    }
    removeFirst(){
        if(!this.head){
            return
        }
        this.head = this.head.next
    }
    removeLst(){
        if(!this.head){
            return
        }
        let current = this.head
        while(current.next.next){
            current = current.next
        }
        current.next = null
    }
    removeAt(index){
        if(index< 0 || index>this.size()){
            return console.log("Invalid index")
        }
        if(index == 0){
            this.head = this.head.next
            return
        }
        let current = this.head
        for(let i=0;i<index-1;i++){
            current = current.next
        }
        if(current.next){
            current.next = current.next.next
        }
    }
    removeElement(element){
        if(!this.head){
            return
        }
        let current = this.head
        let prev = null
        while(current){
            if(current.data === element){
                prev.next = current.next
                return
            }
            prev = current
            current = current.next
        }
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
    print(){
        let current = this.head
        while(current){
            console.log(current.data)
            current = current.next
        }
    }
}
let linkedList = new LinkedList()
linkedList.addFirst(3)
linkedList.addFirst(2)
linkedList.addFirst(1)
linkedList.addLast(4)
linkedList.addAt(5,4)
linkedList.middle()
linkedList.removeElement(3)
// linkedList.removeMiddle()
// linkedList.removeFirst()
// linkedList.removeLst()
// linkedList.removeAt(1)
// linkedList.reverse()
linkedList.print()