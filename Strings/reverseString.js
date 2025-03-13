function rev(str){
    if(str == "") return ""
    return rev(str.substr(1))+str.charAt(0)
}
console.log(rev("Stewin"))