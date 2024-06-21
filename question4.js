// // Question # 4 
// // Write a function fetchWithError that returns a Promise. It should randomly either 
// resolve with "Data fetched successfully!" or reject with "Data fetch failed!" after a delay of 1 second.
//  Handle the rejection using .catch 
function fetchWithError() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const randomNum = Math.random();
            if (randomNum > 0.5) {
                resolve("Data fetch succesfully");
            }
            else {
                reject("Data fetch failed");
            }
        }, 1000);
    });
}
fetchWithError().then((data) => { console.log(data); }).catch((error) => { console.log(error); });
export {};
