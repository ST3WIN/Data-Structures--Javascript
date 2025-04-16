function palindrome(str){
    let stack = []
    for(let i=0 ;i<str.length ;i++){
        stack.push(str[i])
    }
    for(let i of stack){
        if(i !== stack.pop()){
            return false
        }
    }
    return true
}
console.log(palindrome("racecaar"))