//import input from './input_test';
import input from './input';

let part2;

console.clear();

const seatIds = input
    .map(i => {
        const row = parseInt(i.substring(0, 7).replaceAll('F', '0').replaceAll('B', '1'), 2);
        const seat = parseInt(i.substring(7).replaceAll('L', '0').replaceAll('R', '1'), 2);
        return row * 8 + seat;
    })
    .sort()

const part1 = seatIds[seatIds.length - 1];

for (let i = seatIds[0]; i <= part1; i++) {
    if (!seatIds.includes(i)) {
        part2 = i;
        break;
    }
}
console.log(part1, part2);

export { part1, part2 };
