function bubbleSort(nums){
    for(let i=0;i<nums.length;i++){
        for(let j=0;j<nums.length-i-1;j++){
            if(nums[j]>nums[j+1]) [nums[j] , nums[j+1]] = [nums[j+1] , nums[j]]
        }
    }
    return nums
}
let nums = [444,123,99,18,1234,9]
console.log(bubbleSort(nums))