/**
 * @param {number[]} nums
 * @return {number}
 */
var sortArray = function (nums) {
    const n = nums.length;
    const opsFor = (target) => {
        const sigma = new Array(n);
        for (let i = 0; i < n; i++) sigma[i] = target[nums[i]];
        let blank = -1;
        for (let i = 0; i < n; i++) {
            if (nums[i] === 0) {
                blank = i;
                break;
            }
        }
        const visited = new Array(n).fill(false);
        let total = 0;
        for (let i = 0; i < n; i++) {
            if (visited[i]) continue;
            let length = 0;
            let hasBlank = false;
            let j = i;
            while (!visited[j]) {
                visited[j] = true;
                if (j === blank) hasBlank = true;
                length++;
                j = sigma[j];
            }
            if (hasBlank) total += length - 1;
            else if (length >= 2) total += length + 1;
        }
        return total;
    };
    const targetA = new Array(n);
    const targetB = new Array(n);
    for (let v = 0; v < n; v++) {
        targetA[v] = v === 0 ? n - 1 : v - 1;
        targetB[v] = v;
    }
    return Math.min(opsFor(targetA), opsFor(targetB));
};
