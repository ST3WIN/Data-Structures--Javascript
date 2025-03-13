function remove(str){
    return str.replace(/[aeiouAEIOU]/g,"")
}
console.log(remove("Stewin"))