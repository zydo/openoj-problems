function rangeBitwiseAnd(left: number, right: number): number {
    let shift = 0;
    while (left < right) {
        left = Math.floor(left / 2);
        right = Math.floor(right / 2);
        shift++;
    }
    return left * Math.pow(2, shift);
}
