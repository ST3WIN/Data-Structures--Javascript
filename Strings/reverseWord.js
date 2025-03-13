function rev(str){
    return str.split(" ").map(word => word.split("").reverse().join("")).join(" ")
}
console.log(rev("Hello World Javascript"))