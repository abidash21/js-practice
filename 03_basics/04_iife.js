// Imediately Invoked Functions Expression(IIFE)

// function chai(){
//     console.log("DB connected")
// }
// chai()

(function chai(){
    //named IIFE
    console.log("DB connected")
})();
//sometimes functions get polluted by global scope,iife used for guarranty function execution
//first iife is not where to end the execution, hence we have to give semicolon, then only next line will be executed
((name) => {
    //unnamed IIFE
    console.log(`DB connected two ${name}`)
})("Abinash")
