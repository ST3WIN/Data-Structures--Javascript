const obj = {
    name:"Stewin",
    age:24
}
const proxy = new Proxy(obj,{
    get(target,prop){
        // console.log(`${target[prop]}`)
        return target[prop]
    },
    set(target,prop,value){
        if(prop === "age" && value <24){
            throw new Error("No")
        }
        return target[prop] = value
    }
})

console.log(proxy.name)
proxy.age = 25
console.log(proxy.age)
