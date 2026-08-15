import java.util.Arrays;

class Solution {

    public int getMaximumConsecutive(int[] coins) {
        int[] sorted = coins.clone();
        Arrays.sort(sorted);
        int reachable = 0;
        for (int coin : sorted) {
            if (coin > reachable + 1) {
                break;
            }
            reachable += coin;
        }
        return reachable + 1;
    }
}
