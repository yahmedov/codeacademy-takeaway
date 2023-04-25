const { promise } = require('../promise');

(async () => {
    let results = new Array;
    const iterations = 10;
    for (let i = 0; i < iterations; i++) {
        try {
            results.push(await promise());
        } catch (error) {
            results.push(error);
        }
        console.clear();
        console.log(`${(i/iterations)*100}% complete ...`)
    }

    console.clear();
    console.log(results);

    let resolved = 0, rejected = 0;
    results.forEach(result => {
        if (result == 'Resolved') resolved++;
        if (result == 'Rejected') rejected++;
    });

    console.log(`Resolved: ${(resolved / iterations) * 100}%\nRejected: ${(rejected / iterations) * 100}%`);

})();
