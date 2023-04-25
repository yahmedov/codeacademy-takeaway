/** Randomly returns either true or false */
function randomBool() {
    return Math.floor(Math.random() * 100) % 2 == 0;
}

// function that takes time to resolve / reject
function execFunc(resolve, reject) {
    setTimeout(() => {
        if (randomBool()) {
            return resolve('Resolved');
        } else {
            return reject('Rejected');
        }
    }, 2500);
}

module.exports.promise = function () {
    return new Promise(execFunc);
}