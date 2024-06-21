// // Question # 2 
// // Write a function simulateTask that simulates a task by logging "Task started", waits for 1 second, 
// and then logs "Task completed". Use setTimeout for the delay. 
async function simulateTask(){
    console.log( "Task startted");
    return new Promise ((resolve)=>{
        setTimeout(()=>{
            resolve("Task completd")
        },1000)
    })
}

simulateTask().then((data)=>{console.log(data)})