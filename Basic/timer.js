function* generate(){
    for(let i=10;i>=1;i--){
        if(i%2==0){
            yield i
        }
    }
}

function print(g){
    const interval = setInterval(()=>{
        const result = g.next()
        if(result.done){
            clearInterval(interval)
        }else{
            console.log(result.value)
        }
    },1000)
}

const gen = generate()
print(gen)


let num = 1
const interval = setInterval(()=>{
    console.log(num)
    if(num === 10){
        clearInterval(interval)
    } 
    num++
},1000)