


promiseA = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('FULFILLED!');
    }, 300)
})

promiseA.then(console.log);
