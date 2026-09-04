class Solution {

    public int read(CharSource charSource, int n, char[] buf) {
        int total = 0;
        char[] buf4 = new char[4];
        while (total < n) {
            int count = charSource.read4(buf4);
            if (count == 0) {
                break;
            }
            int take = Math.min(count, n - total);
            for (int index = 0; index < take; ++index) {
                buf[total + index] = buf4[index];
            }
            total += take;
        }
        return total;
    }
}
