/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow = function (x, n) {
    const power = (base, exp) => {
        let result = 1.0;
        while (exp !== 0) {
            if (exp & 1) result *= base;
            base *= base;
            exp >>>= 1;
        }
        return result;
    };
    if (n < 0) return 1.0 / power(x, -n);
    return power(x, n);
};
