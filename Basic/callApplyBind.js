const obj = {
    name:"Stewin",
    greet:function(age){
        console.log(`age -` + this.name + age)
    }
}
const obj2 = {
    name:"abc"
}
obj.greet.call(obj2,24)
obj.greet.apply(obj2,[24,32,27])
const app = obj.greet.bind(obj2,24)
app()