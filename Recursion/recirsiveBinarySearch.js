function binarySearch(nums,start,end,target){
    if(start>end){
        return -1
    }
    let mid = Math.floor((start+end)/2)
    if(nums[mid] == target){
        return mid
    }
    if(nums[mid]>target){
        return binarySearch(nums,start,mid-1,target)
    }else{
        return binarySearch(nums,mid+1,end,target)
    }
}
let nums = [1,2,3,4,5,6,7,8,9]
console.log(binarySearch(nums,0,nums.length-1,5))