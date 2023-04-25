const { promise } = require('./promise');

// passing onFulfilled and onRejected handle functions to .then()
promise().then((success) => console.log(success), (failure) => console.log(failure));

// short console log syntax
promise().then(console.log, console.log);

// *** Separating concerns ***
// option 1 .then(onFulfilled).then(null, onRejected)
promise()
    .then(console.log)
    .then(null, console.log);

// option 2 .then(onFulfilled).catch(onRejected)
promise()
    .then(console.log)
    .catch(console.log);

// ***************************

// *** Chaining promises (promise composition) ***
promise()
    .then((resolvedValue) => {
        // pass the value to the next .then()
        return `Promise returned: ${resolvedValue}`
    })
    //then() returns a promise
    .then((passedValue) => {
        console.log(passedValue);
    })
    .catch((rejectedValue) => {
        console.log(`Promise returned: ${rejectedValue}`);
    });

// NOTE: .then() will return the value of the initial promise,
// except if we explicitly define another "return" value

// ***************************

// *** Promise.all([]) 
// NOTE: Returns a single promise, if all promises are resolved - returns their values
// If even one promise is rejected - it will return the reject reason of the first rejected
const promise1 = promise();
const promise2 = promise();

Promise.all([promise1, promise2])
    .then((onFulfilled) => console.log(`Resolved: ${onFulfilled}`))
    .catch((onRejected) => console.log(`Rejected: ${onRejected}`));

// ***************************