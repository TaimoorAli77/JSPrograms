
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