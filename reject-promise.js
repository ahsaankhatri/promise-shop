
let promiseR = new Promise(function(resolve, reject) {
    setTimeout(() => {
            reject(new Error('REJECTED!'));
    }, 300);
})

function onReject(error){
    console.log(error.message);
}

promiseR.then(null, onReject);