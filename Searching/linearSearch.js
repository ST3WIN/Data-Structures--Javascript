// Linear search , time comsplexity O(n) , space complexity O(1) --> does the same as find()
let nums = [3,5,12,8,6,45]
function linearSearch(nums,target){
    for(let i=0;i<nums.length;i++){
        if(nums[i] === target) return i
    }
    return -1
}

console.log(linearSearch(nums,45))