const async = require('async');

function asyncMatches(arr, key, callback) {
    setTimeout(() => {
        let m = 0;
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] === key) m++;
        }
        callback(m);
    }, 1000);
}




