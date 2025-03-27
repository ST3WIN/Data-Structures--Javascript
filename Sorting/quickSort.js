let nums = [21,3,3,123,4,12,4,2,11]
function quickSort(nums){
    if(nums.length < 2){
        return nums
    }
    let pivot = nums[nums.length-1]
    let left = []
    let right = []
    for(let i=0 ;i<nums.length-1; i++){
        if(nums[i] < pivot) left.push(nums[i])
            else right.push(nums[i])
    }
    return [...quickSort(left) , pivot , ...quickSort(right)]
}
console.log(quickSort(nums))