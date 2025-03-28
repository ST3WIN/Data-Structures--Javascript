class StackUsingQueue{
    constructor(){
        this.q1 = []
        this.q2 = []
    }
    push(element){
        this.q1.push(element)
    }
    pop(){
        if(!this.q1.length){
            return "The stack is empty"
        }
        while(this.q1.length>1){
            this.q2.push(this.q1.shift())
        }
        let poped = this.q1.shift()
        while(this.q2.length){
            this.q1.push(this.q2.shift())
        }
        return poped
    }
    display(){
        return console.log(this.q1)
    }
}
let stack = new StackUsingQueue()
stack.push(10)
stack.push(20)
stack.push(30)
stack.display()
stack.pop()
stack.display()