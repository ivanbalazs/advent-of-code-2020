//import input from './input_test';
import input from './input';

/* PART 1 */
const input1 = input.map(i => i.replaceAll('\n', '').split(''));
const part1 = input1.reduce((count, i) => count + new Set(i).size, 0);

/* PART 2 */
const intersectArrays = (arr1, arr2) => {
    if (arr2.length > arr1.length) {
        const t = arr2,
            arr2 = arr1,
            arr1 = t;
    }

    return arr1.filter(val => arr2.indexOf(val) > -1);
};

const input2 = input.map(i => i.split('\n').map(ii => ii.split('')));
const part2 = input2.reduce((count, block) => {
    return count + (block.length === 1
        ? block[0].length
        : block.reduce((commonArr, row) => intersectArrays(commonArr, row), block[0]).length
    );
}, 0);

export { part1, part2 };
