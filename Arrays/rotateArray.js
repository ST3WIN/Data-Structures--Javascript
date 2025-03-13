//Rotate array by k positions.
let nums = [1,2,3,4,5,6,7,8,9,10]

function rotateArray(nums,k){
    if(k>nums.length){
        k = k%nums.length
    }
    reverseArray(nums,0,nums.length-1)
    reverseArray(nums,0,k-1)
    reverseArray(nums,k,nums.length-1)
    return nums
}

function reverseArray(nums,start,end){
    while(start<end){
        let temp = nums[start]
        nums[start++] = nums[end]
        nums[end--] = temp
    }
}
console.log(rotateArray(nums,5))