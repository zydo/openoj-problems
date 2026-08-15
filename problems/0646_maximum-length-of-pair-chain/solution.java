import java.util.Arrays;

class Solution {

    public int findLongestChain(int[][] pairs) {
        Arrays.sort(pairs, (a, b) -> Integer.compare(a[1], b[1]));
        int length = 0;
        long currentEnd = Long.MIN_VALUE;
        for (int[] pair : pairs) {
            if (pair[0] > currentEnd) {
                length++;
                currentEnd = pair[1];
            }
        }
        return length;
    }
}
