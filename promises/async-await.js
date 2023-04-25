const { promise } = require('./promise');

(async () => {
    // try / catch to handle both resolve and reject scenarios
    try {
        console.log(await promise());
    } catch (error) {
        // print reject reason
        console.log(error);
    }
})();
