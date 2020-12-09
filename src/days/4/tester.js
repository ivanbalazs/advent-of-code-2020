const between = (val, min, max) => parseInt(val) >= min && parseInt(val) <= max;

export default {
    byr(val) {
        return between(val, 1920, 2002);
    },
    iyr(val) {
        return between(val, 2010, 2020);
    },
    eyr(val) {
        return between(val, 2020, 2030);
    },
    hgt(val) {
        if (!(/^[0-9]+(cm|in)$/.test(val))) { return false; }
        if (val.includes('cm')) {
            return between(val, 150, 193);
        }
        if (val.includes('in')) {
            return between(val, 59, 76);
        }
        return false;
    },
    hcl(val) {
        return /^#[0-9a-f]{6}$/.test(val);
    },
    ecl(val) {
        return ['amb', 'blu', 'brn', 'gry', 'grn', 'hzl', 'oth'].includes(val);
    },
    pid(val) {
        return val.length === 9;
    },
    cid() {
        return true;
    },
}
