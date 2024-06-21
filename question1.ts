// Question # 1 
// // Write a simple asynchronous TypeScript function fetchGreeting that returns a greeting message
//  after a 2-second delay using setTimeout.
async function fetchGreeting(){
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve("Hello world")
        },2000)
    })
}
    
 fetchGreeting().then((data)=>{console.log(data)})