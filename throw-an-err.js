function parsePromised(json){
    return new Promise(function(resolve, reject) {
        try {
            resolve(JSON.parse(json));
        }
        catch (err) {
            reject(err);
        }
    });
}

function onReject(error){
    console.log(error.message);
}

parsePromised(process.argv[2])
.then(null, onReject);