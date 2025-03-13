function pali(str){
    return str === str.split("").reverse().join("")
}
console.log(pali("racecar"))