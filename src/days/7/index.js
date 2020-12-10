//import input from './input_test';
import input from './input';

console.clear();

/* PART 1 */
const list = new Set();
const input1 = input.reduce((map, row) => {
    const x = row.split(' bags contain ');
    return x[1] !== 'no other bags.'
        ? map.set(x[0], x[1].split(', ').map(i => i.replace(/^[0-9]+ ([a-z ]+) bags?.?$/, '$1')))
        : map
}, new Map());

function getParents(item) {
    const parents = [];
    input1.forEach((value, key) => {
        if (value.includes(item)) {
            parents.push(key);
            list.add(key);
        }
    });
    parents.forEach(getParents);
}

getParents('shiny gold');

const part1 = list.size;

/* PART 2 */

const part2 = 0

export { part1, part2 };
