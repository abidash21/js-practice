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