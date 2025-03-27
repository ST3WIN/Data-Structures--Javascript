function selectionSort(nums){
    for(let i=0 ;i<nums.length-1;i++){
        let min = i
        for(let j=i+1;j<nums.length;j++){
            if(nums[j]<nums[min]) min = j
        }
        if(min !== i) [nums[i] , nums[min]] = [nums[min] , nums[i]]
    }
    return nums
}
let nums =  [21,3,3,123,4,12,4,2,11]
console.log(selectionSort(nums))