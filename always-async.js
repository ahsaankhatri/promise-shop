
let promiseS = new Promise((resolve, reject) => {

    resolve('PROMISE VALUE');
})

promiseS.then(console.log);

console.log('MAIN PROGRAM');