setTimeout(()=>{console.log("start")},1000)

const promiesOne=new Promise(function(resolve,reject){
    // do an async task 
    // Db calls  cryptography network calls

    setTimeout(function () {
        console.log("async task done")
        resolve()
    },1000)
})

console.log(promiesOne)
promiesOne.then((user)=>{
    console.log("promise one is consumed")
})
//async task done
//promise one is consumed

//promise two

new Promise(function(resolve,reject){
    // do an async task 
    // Db calls  cryptography network calls

    setTimeout(function () {
        console.log("async task done")
        resolve()
    },1000)
}).then(()=>{
    console.log("promise two is consumed")
})
//async task done
//promise two is consumed

//promise three
const promiseThree=new Promise(function(resolve,reject){

    setTimeout(function () {
        console.log("async task done")
        const user={username:"john"}
        resolve(user)
    },1000)
})

promiseThree.then((user)=>{
    console.log(user)
})
//{ username: 'john' }


//promise four

const promiseFour=new Promise(function(resolve,reject){
    setTimeout(()=>{
        const error=false
        if(!error){
          const  user={username:"john",password:"1234"}
            resolve(user)
        }
        else{
            reject("Error something went wrong")
        }
    },1000)
})
promiseFour
.then((user)=>{
    console.log(user)
    return user.username
})
.then((username)=>{
    console.log(username)
}).catch((error)=>{
    console.log(error)
})
.finally(()=>{
    console.log("promises is either resolve or rejected")
})
//Error something went wrong id error is true  or error is false { username: 'john', password: '1234' } john
//promises is either resolve or rejected


const promiseFive=new Promise(function(resolve,reject){
    setTimeout(()=>{
        const error=true
        if(!error){
          const  user={username:"john",password:"1234"}
            resolve(user)
        }
        else{
            reject("Error something went wrong")
        }
    },1000)


})

async function consumePromiseFive(){
try {
    const res=await promiseFive
    console.log(res)
    
} catch (error) {
    console.log(error)
}
   
}

//Error something went wrong

consumePromiseFive()




fetch("https://api.github.com/users/arpitbhatia23").then((res)=>res.json()).then(data=>console.log(data)).catch(error=>console.log("error while fetching data",error))
