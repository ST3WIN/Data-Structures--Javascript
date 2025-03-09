// Find the second smallest element from an array
//The time complexity for this algorithm is O(n) and the space complexity is O(1)
let arr = [12,43,65,12,87,45,33]

function secondSmallest(arr){
    let smallest = Infinity
    let secondSmallest = Infinity
    for(let i=0;i<arr.length;i++){
        if(arr[i]<smallest){
            secondSmallest = smallest
            smallest = arr[i]
        }else if(arr[i]>smallest && arr[i]<secondSmallest){
            secondSmallest = arr[i]
        }
    }
    return secondSmallest
}
console.log(secondSmallest(arr))