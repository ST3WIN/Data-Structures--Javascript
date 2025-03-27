class Stack{
    constructor(){
        this.stack = []
    }
    isEmpty(){
        return this.stack.length === 0
    }
    push(element){
        this.stack.push(element)
    }
    size(){
        return this.stack.length
    }
    pop(){
        if(this.isEmpty()){
            return "The stack is empty"
        }
        return this.stack.pop()
    }
    peek(){
        if(this.isEmpty()){
            return "The stack is empty"
        }
        return console.log(this.stack[this.size()-1])
    }
    display(){
        return console.log(this.stack)
    }
}
let stack = new Stack()
stack.push(10)
stack.push(20)
stack.push(30)
stack.push(40)
stack.display()
stack.pop()
stack.display()
stack.peek()