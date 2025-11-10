let arr = [1,2,3,[3,5],6,7,[8,9,[10,11,12,[13,14]]]]

function flatArray(arr , arr2 = []){
    for(let num of arr){
        if(Array.isArray(num)){
            flatArray(num,arr2)
        }else{
            arr2.push(num)
        }
    }
    return arr2
}
console.log(flatArray(arr))