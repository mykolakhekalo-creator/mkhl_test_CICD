const { sum } = require('./app');

if (sum(4, 3) !== 7) {
    console.error('Test failed: 4 + 3 should equal 7');
    process.exit(1);
}

if (sum(-1, 1) !== 0) {
    console.error('Test failed: -1 + 1 should equal 0');
    process.exit(1);
}

console.log('All tests passed!');
