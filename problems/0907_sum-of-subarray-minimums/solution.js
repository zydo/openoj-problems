/**
 * @param {number[]} arr
 * @return {number}
 */
var sumSubarrayMins = function (arr) {
    const MOD = 1000000007;
    const n = arr.length;
    const left = new Array(n);
    const right = new Array(n);
    let stack = [];
    for (let i = 0; i < n; i++) {
        while (stack.length && arr[stack[stack.length - 1]] >= arr[i]) {
            stack.pop();
        }
        left[i] = stack.length ? stack[stack.length - 1] : -1;
        stack.push(i);
    }
    stack = [];
    for (let i = n - 1; i >= 0; i--) {
        while (stack.length && arr[stack[stack.length - 1]] > arr[i]) {
            stack.pop();
        }
        right[i] = stack.length ? stack[stack.length - 1] : n;
        stack.push(i);
    }
    let total = 0;
    for (let i = 0; i < n; i++) {
        total += arr[i] * (i - left[i]) * (right[i] - i);
        total %= MOD;
    }
    return total;
};
