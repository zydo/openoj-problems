import java.util.Arrays;

class Solution {

    public long minDamage(int power, int[] damage, int[] health) {
        int n = damage.length;
        Integer[] order = new Integer[n];
        final double[] ratio = new double[n];
        final int[] times = new int[n];
        long remaining = 0;
        for (int i = 0; i < n; i++) {
            order[i] = i;
            times[i] = (health[i] + power - 1) / power;
            ratio[i] = (double) damage[i] / times[i];
            remaining += damage[i];
        }
        Arrays.sort(order, (a, b) -> Double.compare(ratio[b], ratio[a]));
        long answer = 0;
        for (int i : order) {
            answer += remaining * times[i];
            remaining -= damage[i];
        }
        return answer;
    }
}
