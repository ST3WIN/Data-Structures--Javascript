//1. Splice
//In JavaScript, the splice() method is used to add, remove, 
// or replace elements in an array. 
// It modifies the original array and returns an array of removed elements.
//array.splice(start, deleteCount, item1, item2, ...);

// Remove an element from an array from a specified Position

let arr = [1,2,3,4,5,6,7,8,9,10]

function removeElement(array,index){
    array.splice(index-1,1)
    return array
}
console.log(removeElement(arr,5))

//2. Slice
//In JavaScript, the slice() method is used to extract a portion of an array without modifying the original array.
//It returns a shallow copy of the selected elements.
// array.slice(start, end);
//start – (Optional) The index where extraction begins. If omitted, it starts from index 0.
//end – (Optional) The index where extraction stops (not included in the result). If omitted, it extracts until the end of the array.

let arr2 = [1,2,3,4,5,6,7,8,9,10]
function extract(array,start,end){
    let sliced = array.slice(start,end)
    return sliced
}
console.log(extract(arr2,1,6))