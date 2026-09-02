class Solution {
    read(charSource, n, buf) {
        let total = 0;
        const buf4 = new Array(4).fill("");
        while (total < n) {
            const count = charSource.read4(buf4);
            if (count === 0) break;
            const take = Math.min(count, n - total);
            for (let index = 0; index < take; index++) {
                buf[total + index] = buf4[index];
            }
            total += take;
        }
        return total;
    }
}
