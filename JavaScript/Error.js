// let a
// console.log(a)
// console.log(1/0)
// a = 10
// if(a>10){
// console.log("true")
// }else{
// console.log("false")
// }
 const isLoading = true

 console.log("...Loading")

try {
    console.log(1)
} catch (error) {
    console.log(error)
}
console.log(2)

try {
    throw new Error("here lag is not defined");
    console.lag(3)
} catch (err){
    console.log(err)
}
try {
    console.mag(4)
} catch (error) {
    console.log(error)
}
try {
    console.log(5)
} catch (error) {
    console.log(error)
}
finally{
   const isLoading = false
}
