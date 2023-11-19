const fs = require('fs')
fs.writeFileSync('new.txt','Hello world')

let name = "Tai"
const age = 30
let hobby = true
console.log(name)
const summerize =  (n,a,h)=>{
    return( 'My name is '+ n + ' and age : '+age+ ' and hobby is '+hobby)
}
console.log(summerize(name,age,hobby))

const add = (a,b)=>a+b
console.log(add(3,3))
const as= a=>a+2
console.log(as(3))

const g = ()=>4
console.log(g())