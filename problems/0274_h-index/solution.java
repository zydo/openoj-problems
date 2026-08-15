class Solution {

    public int hIndex(int[] citations) {
        int n = citations.length;
        int[] count = new int[n + 1];
        for (int c : citations) {
            count[Math.min(c, n)]++;
        }
        int total = 0;
        for (int h = n; h >= 0; h--) {
            total += count[h];
            if (total >= h) {
                return h;
            }
        }
        return 0;
    }
}
