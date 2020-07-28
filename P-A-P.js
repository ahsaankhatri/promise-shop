
var firstPromise = first();

var secondPromise = firstPromise.then(function(value){
    return second(value);
});

//secondPromise.then(console.log);
first().then(second).then(console.log);