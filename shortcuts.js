
let promiseF = Promise.resolve('SECRET VALUE');

let promiseR = Promise.reject(new Error('ERROR CAUGHT!'));

let promiseE = new Promise((resolve, reject) => {
})

promiseE.catch(function (error){
    console.error('THERE IS AN ERROR');
    console.error(error.message);
})