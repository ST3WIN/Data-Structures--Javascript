class QueueUsingStack{
    constructor(){
        this.stack1 = []
        this.stack2 = []
    }
    enqueue(element){
        this.stack1.push(element)
    }
    dequeue(){
        while(this.stack1.length){
            this.stack2.push(this.stack1.pop())
        }
        this.stack2.pop()
        while(this.stack2.length){
            this.stack1.push(this.stack2.pop())
        }
    }
    display(){
        return console.log(this.stack1)
    }
}
let queue = new QueueUsingStack()
queue.enqueue(10)
queue.enqueue(20)
queue.enqueue(30)
queue.display()
queue.dequeue()
queue.display()