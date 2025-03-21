let str = "Hello world javascript"
let currentWord = ""
let longestWord = ""
for(let i=0;i<=str.length;i++){
    if(i<str.length && str[i]!==" "){
        currentWord+=str[i]
    }else{
        if(currentWord.length > longestWord.length){
            longestWord = currentWord
        }
        currentWord = ""
    }
}
console.log(longestWord)