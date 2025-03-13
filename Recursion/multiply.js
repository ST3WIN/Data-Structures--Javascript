//Multiply the elements in an array using recursion

function multiply(nums){
    if(nums.length<=0) return 1
    else return nums[nums.length-1]*multiply(nums.slice(0,nums.length-1))
}
console.log(multiply([1,2,3,4]))
