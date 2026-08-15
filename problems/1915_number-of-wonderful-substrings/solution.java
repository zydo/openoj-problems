class Solution {

    public long wonderfulSubstrings(String word) {
        long[] count = new long[1024];
        count[0] = 1;
        int mask = 0;
        long total = 0;
        for (int i = 0; i < word.length(); i++) {
            mask ^= 1 << (word.charAt(i) - 'a');
            total += count[mask];
            for (int b = 0; b < 10; b++) {
                total += count[mask ^ (1 << b)];
            }
            count[mask] += 1;
        }
        return total;
    }
}
