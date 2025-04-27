class MaxHeap{
    constructor(){
        this.heap = []
    }
    parent(index){
        return Math.floor((index-1)/2)
    }
    rightChild(index){
        return 2 * index +2
    }
    leftChild(index){
        return 2 * index+1
    }
    insert(value){
        this.heap.push(value)
        this.heapifyUp(this.heap.length-1)
    }
    swap(index1 , index2){
        [this.heap[index1] , this.heap[index2]] = [this.heap[index2] , this.heap[index1]]
    }
    heapifyUp(index){
        while(index > 0 && this.heap[index] < this.heap[this.parent(index)]){
            this.swap(index, this.parent(index))
            index = this.parent
        }
    }
    extractMax(){
        if(this.heap.length === 0 )return null
        if(this.heap.length === 1){
            return this.heap.pop()
        }
        let max = this.heap[0]
        this.heap[0] = this.heap.pop();
        this.heapifyDown(0);
        return max;
    }
    heapifyDown(index){
        let largest = index
        let left = this.leftChild(index);
        let right = this.rightChild(index);
        if(left < this.heap.length && this.heap[left] < this.heap[largest]){
            largest = left
        }
        if(right < this.heap.length && this.heap[right] < this.heap[largest]){
            largest = right
        }
        if(largest!==index){
            this.swap(index , largest)
            this.heapifyDown(largest)
        }
    }
    sort() {
        let result = []
        let length = this.heap.length
        for(let i=0 ; i <length ; i++){
            result.push(this.extractMax())
        }
        return result;
    }
}
const maxHeap = new MaxHeap()
maxHeap.insert(9)
maxHeap.insert(91)
maxHeap.insert(92)
maxHeap.insert(29)
console.log(maxHeap.heap)
console.log(maxHeap.sort())