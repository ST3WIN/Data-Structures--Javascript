class QueueNode{
    constructor(data){
        this.data = data
        this.next = null
    }
}
class Queue{
    constructor(){
        this.front = null
        this.rear = null
    }
    isEmpty() {
        return this.front === null;
    }
    enqueue(data){
        let newNode = new QueueNode(data)
        if(this.isEmpty()){
            return this.front = this.rear = newNode
        }else{
            this.rear.next = newNode
            this.rear = newNode
        }
    }
    dequeue(){
        if (this.isEmpty()) {
            return "Queue is empty";
        }
        let temp = this.front;
        this.front = this.front.next;

        if (!this.front) {
            this.rear = null;
        }
        return temp.data;
    }
    peek() {
        return this.isEmpty() ? "Queue is empty" : this.front.data;
    }
}
const queue = new Queue();
queue.enqueue(10);
queue.enqueue(20);
queue.enqueue(30);
queue.enqueue(40);
console.log(queue.dequeue()); // 10
console.log(queue.peek());