//Given an array arr of positive integers sorted in a strictly increasing order, and an integer k.
//Return the kth positive integer that is missing from this array.

let nums = [2,3,4,7,11]
function missing(nums,k){
    let count = 0
    for(let i = 0; i < nums.length; i++){
        if(nums[i] <= k+count) count++
    }
    return k+count
}
console.log(missing(nums,5))

// count  nums[i]  k+count
// count = 0 , 2 <= 5+0 
// count = 1 , 3 <= 5+1
// count = 2 , 4 <= 5+2
// count = 3 , 7 <= 5+3
// count = 4 , 11 <= 5+4 false. Hence missing number is k+count = 9
//Time complexity O(n),space complexity O(1).