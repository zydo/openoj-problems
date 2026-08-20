import java.util.Arrays;

class Solution {

    public int minimumTwoItemContainers(int[] weights, int capacity) {
        int[] sorted = weights.clone();
        Arrays.sort(sorted);
        int i = 0;
        int j = sorted.length - 1;
        int boats = 0;
        while (i <= j) {
            // The heaviest boards either way; the lightest is their best
            // partner, since a heavier one only risks exceeding the capacity.
            // The i < j guard keeps the last person from pairing with themself.
            if (i < j && sorted[i] + sorted[j] <= capacity) {
                i++;
            }
            j--;
            boats++;
        }
        return boats;
    }
}
