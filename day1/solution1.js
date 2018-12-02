const fs = require('fs');

fs.readFile('day1input.txt', (error, result) => {
    const array = result.toString().split('\n');

    let sum = 0;
    for (i = 0; i < array.length - 1; i++) {
        const current = array[i];
        const val = parseInt(current.slice(1));
        if (current[0] === '+') {
            sum += val;
        } else {
            sum -= val;
        }
    }

    console.log('sum is', sum);
});
