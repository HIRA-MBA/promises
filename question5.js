// Thursday Morning 9 to 12 Assignment Topic : Asynchronous 
// // Question # 5 
// // Write a function executeSequentially that executes two functions fetchData and
//  processData sequentially using Promises, and logs the results in the order they are called.
async function processData() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Data Processed");
        }, 1000);
    });
}
async function fetchDataNew() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("fetched Data");
        }, 1000);
    });
}
function executeSequentially() {
    return fetchDataNew()
        .then((data) => {
        console.log('fetchData result:', data);
        return processData();
    })
        .then((processedData) => {
        console.log('processData result:', processedData);
    });
}
executeSequentially();
export {};
