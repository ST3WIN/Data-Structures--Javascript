function nextGreaterElement(nums){
    let stack = []
    let result = new Array(nums.length).fill(-1)
    for(let i=nums.length-1;i>=0;i--){
        while(stack.length>0 && stack[stack.length-1] >= nums[i]){
            stack.pop()
        }
        if(stack.length>0){
            result[i] = stack[stack.length-1]
        }
        stack.push(nums[i])
    }
    return result
}
let nums = [4, 5, 2, 10, 8]
console.log(nextGreaterElement(nums))