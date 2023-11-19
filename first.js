
let arr = ["Taimoor", false, 90,"Google"]
for (let one of arr) {
    console.log(one)
}
console.log(arr.map(s=>"S : "  + s))
console.log(arr)
arr.push("Programming")
console.log(arr)
arr.unshift('100')
console.log(arr)
arr.shift("Programming")
console.log(arr)
arr.pop('100')
console.log(arr)

let copiedArr = arr.slice()  // slice makes copies (immutability)
console.log("copiedArr : ",copiedArr)

let secondACopied = [...arr]  // copies (immutability) spread operator
console.log(secondACopied)

let person = {
    name:"Taimoor",
    rollno:34,
    play:true,
    add(){
        console.log("ok",this.name)
    }
}
person.add()
let copyObj = {...person}   // spread op
console.log("copyObj",copyObj)


// Rest operator

const toArr = (...newArr)=>{
    return newArr
}
console.log(toArr(2,3,5,4))

//Destructuring

const {name , play} = person;
console.log(name,play)
// const search = (person)=>{
//     console.log(person.name)
// }
// search(person)

//changing data of obj
person.name = "Malik Taimoor Ali Awan"
person["play"] = false

const search = ({name,play})=>{
    console.log(name , play)
}
search(person)

// Arr
let hobbies = ['football','cricket']

const [hobby1,hobby2]=hobbies
console.log(hobby1,hobby2)


console.log("G")
setTimeout(()=>{
    console.log("ds")
},3000)