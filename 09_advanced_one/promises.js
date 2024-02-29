const promiseOne = new Promise(function(resolve, reject){
    //Do an async task
    // DB calls, cryptography, network
    setTimeout(function(){
        resolve()
        console.log('Async task is compelete');
    }, 1000)
})

promiseOne.then(function(){
    console.log("Promise consumed");
})


new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log("Async task 2");
        resolve()
    }, 1000)

}).then(function(){
    console.log("Async 2 resolved");
})

const promiseThree = new Promise((resolve,reject) => {
    setTimeout(()=> {
        resolve({username:'Abinash',email:'dashabinash2002@gmail.com'})
    },1000)
}).then( (user) => {
        console.log(user)
})


const promiseFour = new Promise( (resolve,reject) => {
    setInterval(() => {
        let error=false;
        if (!error){
            resolve({name:'Abinash',password:'1234'})
        } else {
            reject('ERROR: Something went wrong')
        }
    },1000)
})

promiseFour.then((user)=>{
    console.log(user)
    return user.name
}).then((username)=>{
    console.log(username)
}).catch((err)=>{
    console.log(err);
}).finally(()=>{
    console.log('The promise is either resolved or rejected')
})


const promiseFive = new Promise( (resolve,reject) => {
    setInterval(() => {
        let error=true;
        if (!error){
            resolve({name:'Javascript',password:'1234'})
        } else {
            reject('ERROR: Js went wrong')
        }
    },1000)
})

async function consumePromiseFive(){
    try {
        const response = await promiseFive
        console.log(response)
    } catch (error){
        console.log(error)
    }
}

consumePromiseFive()


// async function getAllUsers(){
//     try{
//         const response = await fetch('https://jsonplaceholder.typicode.com/users')
//         const data=await response.json()
//         console.log(data)
//     } catch (err) {
//         console.log('Error',err)
//     }
// }

// getAllUsers()

fetch('https://jsonplaceholder.typicode.com/users')
.then((response)=>  {return response.json()})
.then((data) => {console.log(data)}).catch((error) => console.log(error))



