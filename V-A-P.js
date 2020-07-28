
function attechTitle(title){
    return  'DR. ' + title;
}

let promiseF = new Promise((resolve, reject) => {
    resolve('MANHATTAN');
})
.then(attechTitle)
.then(console.log);

