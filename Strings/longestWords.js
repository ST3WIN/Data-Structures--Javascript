function long(str){
    return str.split(" ").reduce((longest,word)=> word.length>longest.length?word:longest,"")
}
console.log(long("Hello world javascript vs"))