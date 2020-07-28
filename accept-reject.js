

let promiseB = new Promise(function(resolve, reject) {
    resolve('I FIRED');

    reject(new Error('I DID NOT FIRE!'));
})

function onReject(error){
    console.log(error.message);
}

promiseB.then(console.log, onReject);