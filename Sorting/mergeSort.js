let nums = [21,3,3,123,4,12,4,2,11]
function mergeSort(nums){
    if(nums.length < 2) return nums
    let mid = Math.floor(nums.length/2)
    let left = nums.slice(0,mid)
    let right = nums.slice(mid)
    return merge(mergeSort(left) , mergeSort(right))
}
function merge(left , right){
    let sorted = []
    while(left.length && right.length){
        if(left[0] <= right[0]) sorted.push(left.shift())
            else sorted.push(right.shift())
    }
    return [...sorted ,...left,...right]
}
console.log(mergeSort(nums))