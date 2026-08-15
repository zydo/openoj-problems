import java.util.Arrays;

class Solution {

    public int twoCitySchedCost(int[][] costs) {
        int[][] ordered = costs.clone();
        Arrays.sort(ordered, (a, b) ->
            Integer.compare(a[0] - a[1], b[0] - b[1])
        );
        int n = ordered.length / 2;
        int total = 0;
        for (int i = 0; i < ordered.length; i++) {
            total += i < n ? ordered[i][0] : ordered[i][1];
        }
        return total;
    }
}
