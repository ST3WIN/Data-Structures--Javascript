function range(start,end){
    if(end<start){
        return []
    }else{
        let nums = range(start,end-1)
        nums.push(end)
        return nums
    }
}
console.log(range(1,5))