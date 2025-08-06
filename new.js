console.log("task 1");
setTimeout(()=>{
    console.log("task 2");
}, 5000)
console.log("task 2");
console.log("task 3");
let promise = new Promise((resolve, reject) => {
    let success = true;


    setTimeout(() => {
        if (success) {
            resolve("Data fetched successfully")
        } else {
            reject("Error fetching the data")
        }
    }, 2000);
})
promise
    .then((result) => {
        console.log(result);
        return new Promise((resolve, reject) => {
            let success = true;


            setTimeout(() => {
                if (success) {
                    resolve("Data processed successfully")
                } else {
                    reject("Error processing the data")
                }
            }, 2000);
        }).then((secondResult) => {
            console.log(secondResult);
            return new Promise((resolve, reject) => {
                let success = false;


                setTimeout(() => {
                    if (success) {
                        resolve("Data displayed successfully")
                    } else {
                        reject("Error displaying the data")
                    }
                }, 2000);
            }).then((thirdResult) => {
                console.log(thirdResult);
            }).catch((thirdError) => {
                console.log(thirdError);
            })


        }).catch((secondError) => {
            console.log(secondError);
        })
    })
    .catch((error) => {
        console.log(error)
    })
