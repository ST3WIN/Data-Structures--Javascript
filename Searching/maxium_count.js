//Maximum count of negative and positive integer.
let nums = [-2,-1,-1,-2,1,2,3]
function max(nums){
    return Math.max(negative(nums),positive(nums))
}
function negative(nums){
    let start = 0
    let end = nums.length-1
    while(start<end){
        let mid = Math.ceil((start+end)/2)
        if(nums[mid]<0) start = mid
        else end = mid -1
    }
    return nums[0] >= 0 ? 0:start+1
}
function positive(nums){
    let start = 0
    let end = nums.length-1
    while(start<end){
        let mid = Math.floor((start+end)/2)
        if(nums[mid]>0) end = mid
        else start = mid + 1
    }
    return nums[nums.length-1] <= 0 ? 0:nums.length-start
}
console.log(max(nums))