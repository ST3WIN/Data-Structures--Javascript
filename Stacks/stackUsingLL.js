class Node{
    constructor(data){
        this.data = data 
        this.next = null
    }
}
class Stack{
    constructor(){
        this.head = null
    }
    push(data){
        const newNode=new Node(data)
        newNode.next=this.head;
        this.head=newNode;
    }
    isEmpty(){
        return this.head === null
    }
    pop(){
        if(this.isEmpty()){
            return "The stack is empty"
        }
        this.head = this.head.next
    }
    peek(){
        if(this.isEmpty()){
            return "Stack is empty"
        }
        return this.head.data
    }
}
let stack = new Stack ()
stack.push(10)
stack.push(20)
stack.push(30)
stack.peek()
stack.pop()
stack.pop()
console.log(stack.peek())