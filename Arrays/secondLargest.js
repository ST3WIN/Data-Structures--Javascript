// Find the second largest element from an array
//The time complexity for this algorithm is O(n) and the space complexity is O(1)
let arr = [12,43,65,12,87,45,33]

function secondLargest(array){
    let largest = -Infinity 
    let secondLargest = -Infinity
    for(let i=0;i<array.length;i++){
        if(array[i]>largest){
            secondLargest = largest
            largest = array[i]
        }else if(array[i]<largest && array[i]>secondLargest){
            secondLargest = array[i]
        }
    }
    return secondLargest
}
console.log(secondLargest(arr))