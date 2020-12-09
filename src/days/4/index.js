import tester from './tester';
//import _input from './input_test';
import _input from './input';

console.clear();

const input = _input
    .replaceAll(' ', '\n')
    .split('\n\n')
    .map(i => i.split('\n').reduce((aggr, row) => {
        const [key, val] = row.split(':');
        return { ...aggr, [key]: val };
    }, {}));

const part1 = input.reduce((count, i) => {
    const keys = Object.keys(i);
    return count + +(keys.length === 8 || (keys.length === 7 && !keys.includes('cid')));
}, 0);

const part2 = input.reduce((count, i) => {
    const keys = Object.keys(i);
    let valid;
    if (keys.length === 8 || (keys.length === 7 && !keys.includes('cid'))) {
        valid = keys.reduce((state, key) => {
            return state && tester[key](i[key]);
        }, true);
        return count + +valid;
    } else {
        return count;
    }
}, 0);

export { part1, part2 };
