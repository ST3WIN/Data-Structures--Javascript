//Splice
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