//Remove duplicates from an array.Time complexity O(n) , space complexity O(n)

let arr = [1,4,2,3,4,5,1,1,8,6,8,4]

function removeDuplicates(arr){
    let map = {}
    let index = 0
    for (let num of arr){
        map[num] = (map[num]||0)+1
    }
    for(let num in map){
        arr[index++] = Number(num)
    }
    arr.length = index
    return arr
}

console.log(removeDuplicates(arr))