/**
 * @param {number[]} rand7_outputs
 * @return {number}
 */
var rand10 = function (rand7_outputs) {
    let index = 0;
    while (true) {
        const a = rand7_outputs[index];
        const b = rand7_outputs[index + 1];
        index += 2;
        const idx = (a - 1) * 7 + b;
        if (idx <= 40) {
            return ((idx - 1) % 10) + 1;
        }
    }
};
