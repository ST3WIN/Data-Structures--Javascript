class Queue{
  constructor(){
  this.queue = []
  }
  enqueue(element){
    this.queue.push(element)
  }
  dequeue(){
    if(this.isEmpty()){
      return "The queue is empty"
    }
    return this.queue.shift()
  }
  front(){
    if(this.isEmpty()){
      return "The queue is empty"
    }
    return this.queue[0]
  }
  isEmpty(){
    return this.queue.length === 0
  }
  display(){
    return console.log(this.queue)
  }
}
let queue = new Queue()
queue.enqueue(10)
queue.enqueue(20)
queue.enqueue(30)
queue.enqueue(40)
queue.dequeue()
queue.front()
queue.display()