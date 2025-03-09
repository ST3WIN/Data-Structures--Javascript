//Binary search , time complexity O(log n) , space complexity O(1)
let nums = [-1,0,3,5,9,12]
function binarySearch(nums,target){
    let start = 0
    let end = nums.length-1
    while(start <= end){
        let middle = Math.floor((start+end)/2)
        if(nums[middle]>target) end = middle-1
        else if(nums[middle]<target) start = middle + 1
        else return middle
    }
    return -1
}
console.log(binarySearch(nums,12))