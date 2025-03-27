let nums = [21,3,3,123,4,12,4,2,11]
function insertionSort(nums){
    for(let i = 1 ; i<nums.length;i++){
        let insert = nums[i]
        let j = i-1
        while(j >= 0 && nums[j] > insert){
            nums[j+1] = nums[j]
            j--
        }
        nums[j+1] = insert
    }
    return nums
}
console.log(insertionSort(nums))