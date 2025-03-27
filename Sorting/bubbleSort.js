function bubbleSort(nums){
    for(let i=0;i<nums.length;i++){
        for(let j=0;j<nums.length-i-1;j++){
            if(nums[j]>nums[j+1]) [nums[j] , nums[j+1]] = [nums[j+1] , nums[j]]
        }
    }
    return nums
}
let nums = [21,3,3,123,4,12,4,2,11]
console.log(bubbleSort(nums))