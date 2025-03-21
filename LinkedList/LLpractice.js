class Node{
    constructor(value){
        this.value = value
        this.next = null
    }
}
class LinkedList{
    constructor(){
        this.head = null
        this.size = 0
    }
    isEmpty(){
        return this.size === 0
    }
    getSize(){
        return console.log("Size = ",this.size)
    }
    addFirst(value){
        const newNode = new Node(value)
        if(this.isEmpty()){
            this.head = newNode
        }else{
            newNode.next = this.head
            this.head = newNode
        }
        this.size++
    }
    middle(){
        let slow = this.head
        let fast = this.head
        while(fast!==null && fast.next!==null){
            slow = slow.next
            fast = fast.next.next
        }
        return console.log("Middle Element = ",slow.value)
    }
    removeMiddle(){
        if(this.isEmpty()){
            return console.log("The list is empty")
        }
        if(!this.head.next){
            this.head = null
            return
        }
        let slow = this.head
        let fast = this.head
        let prev = null
        while(fast!==null && fast.next!==null){
            prev = slow
            slow = slow.next
            fast = fast.next.next
        }
        prev.next = prev.next.next
        this.size--
        return
    }
    addLast(value){
        const newNode = new Node(value)
        if(this.isEmpty()){
            this.head = newNode
            this.size++
            return
        }
        let current = this.head
        while(current.next){
            current = current.next
        }
        current.next = newNode
        this.size++
    }
    addAt(index , value){
        if(index<0 || index>this.size){
            return console.log("Invalid Size")
        }
        if(index === 0){
            this.addFirst(value)
        }else{
            const newNode = new Node(value)
            let current = this.head
            for(let i=0;i<index-1;i++){
                current = current.next
            }
            newNode.next = current.next
            current.next = newNode
            this.size++
        }
    }
    removeFirst(){
        if(this.isEmpty()){
            return console.log("The list is empty")
        }
        this.head = this.head.next
        this.size--
    }
    removeLast(){
        if(this.isEmpty()){
            return console.log("The list is empty")
        }
        let current = this.head
        while(current.next.next){
            current = current.next
        }
        current.next = null
        this.size--
    }
    removeAt(index){
        if(this.isEmpty()){
            return console.log("The list is empty")
        }
        if(index <0 || index>this.size){
            return console.log("Invalid Size")
        }
        if(index === 0){
            this.removeFirst()
        }
        let current = this.head
        for(let i=0;i<index-1;i++){
            current = current.next
        }
        if(current.next){
            current.next = current.next.next
            this.size--
        }
    }
    removeElement(element){
        if(this.isEmpty()){
            return consoel.log("The list is empty")
        }
        if(this.head.value === element){
            this.head = this.head.next
            return
        }
        let current = this.head
        let prev = null
        while(current){
            if(current.value == element){
                prev.next = current.next
                this.size--
                return
            }
            prev = current
            current = current.next
        }
        return console.log("Element not in the list")
    }
    reverse(){
        if(this.isEmpty()){
            return console.log("The list is empty")
        }
        let prev = null 
        let current = this.head
        while(current){
            let next = current.next
            current.next = prev
            prev = current
            current = next
        }
        this.head = prev
    }
    print(){
        if(this.isEmpty()){
            return console.log("The List is empty")
        }
        let current = this.head 
        let list = ""
        while(current){
            list+= current.value+" --> "
            current = current.next
        }
        console.log(list+" Null")
    }
}
function arrayToLinkedList(arr) {
    let linkedList = new LinkedList();
    for (let value of arr) {
        linkedList.addLast(value);
    }
    return linkedList;
}
let arr = [10, 20, 30, 40, 50];
let arrarlinkedList = arrayToLinkedList(arr);
arrarlinkedList.print();
let linkedList = new LinkedList()
linkedList.addFirst(10)
linkedList.addFirst(20)
linkedList.addFirst(30)
linkedList.addFirst(40)
linkedList.addFirst(50)
linkedList.addLast(5)
linkedList.removeMiddle()
linkedList.middle()
linkedList.addAt(0,60)
linkedList.removeFirst()
linkedList.removeLast()
// linkedList.removeElement(10)
linkedList.removeAt(1)
linkedList.reverse()
linkedList.print()
linkedList.getSize()