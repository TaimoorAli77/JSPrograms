
const obj = {
    name: "Taimoor",
    rol:89,
    add:function(){
        console.log("G kia hal ha ", this.name)
    },
    addT(){
        console.log("G kia hal ha ", this.name)
    }
}
obj.addT()
