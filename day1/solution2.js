const fs = require('fs');

fs.readFile('day1input2.txt', (error, result) => {
    const array = result.toString().split('\n');
    const length = array.length - 1;

    let sum = 0;
    let seen = new Set();

    for (i = 0; i < length; i = (i + 1)%length) {
        const current = array[i];
        const val = parseInt(current.slice(1));
        if (current[0] === '+') {
            sum += val;
        } else {
            sum -= val;
        }

        if (seen.has(sum)) {
            console.log('sum', sum);
            break;
        } else {
            seen.add(sum);
        }
    }
});
