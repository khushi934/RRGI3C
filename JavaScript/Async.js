// console.log(1)
// setTimeout(()=>{
// console.log(2)
// },0)
// console.log(3)

// Callbacks Example


// function getData(dataId , getNextData){
//      setTimeout(() => {
//         console.log("DataId : " + dataId)
//         if(getNextData){
//             getNextData()
//         }
//      }, 2000);
// }

// getData(1 ,()=>{
//     getData(2,()=>{
//         getData(3,()=>{
//             getData(4,()=>{
//                 getData(5)
//             })
//         })
//     })
// })


let promise = new Promise((resolve, reject) => {
    let sucess= true

    if(sucess){
        resolve("Resolved")
    }else{
        reject("Rejected")
    }
})

function getData(dataId){
  return new Promise((resolve, reject) => {
        setTimeout(()=>{
            console.log("Data is :" + dataId)
            reject("its not fullfilled")
        },30000)
    })
}

// getData(1).then(()=>getData(2)).then(()=>getData(3)).catch((err)=>console.log(err))

async function fetchData() {
    await getData(1)
    await getData(2)
    await getData(3)
}

fetchData()