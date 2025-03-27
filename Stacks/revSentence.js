function rev(str){
    let arr = str.split(" ")
    let stack = []
    for(let word of arr){
        stack.push(word)
    }
    let reverse = ""
    while(stack.length){
        let currentWord = stack.pop()
        if(currentWord){
            reverse+= " "+currentWord
        }
    }
    return reverse.trim()
}
console.log(rev("Hello world javascript"))