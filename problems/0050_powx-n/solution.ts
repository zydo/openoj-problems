function myPow(x: number, n: number): number {
    const power = (base: number, exp: number): number => {
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
}
