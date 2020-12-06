<template>
    <div>
        <h1>Day 3</h1>
        <div>Part one: {{ part1 }}</div>
        <div>Part two: {{ part2 }}</div>
    </div>
</template>

<script>
//import _input from './input_test';
import _input from './input';

const input = _input.split("\n");
const rowLen = input[0].length;

const compute = ({ right, down }) => {
    let hits = 0;
    let pos = 0;
    for (let row = down; row < input.length; row += down) {
        pos = (pos + right) % rowLen;
        hits += +(input[row][pos] === '#');
    }
    return hits;
}

const part1 = compute.bind(null, { right: 3, down: 1 });
const part2 = () => {
    return [
        { right: 1, down: 1 },
        { right: 3, down: 1 },
        { right: 5, down: 1 },
        { right: 7, down: 1 },
        { right: 1, down: 2 },
    ].reduce((aggr, slope) => {
        const x = compute(slope);
        console.log(slope, x, aggr * x);
        return aggr * x;
    }, 1);
};

export default {
    computed: {
        part1,
        part2,
    },
    created() {
        console.clear();
    },
};
</script>
