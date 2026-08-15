import java.util.HashMap;
import java.util.Map;

class Solution {

    public int leastInterval(String[] tasks, int n) {
        Map<String, Integer> counts = new HashMap<>();
        for (String t : tasks) {
            counts.merge(t, 1, Integer::sum);
        }
        int maxFreq = 0;
        int numMax = 0;
        for (int v : counts.values()) {
            if (v > maxFreq) {
                maxFreq = v;
                numMax = 1;
            } else if (v == maxFreq) {
                numMax++;
            }
        }
        return Math.max(tasks.length, (maxFreq - 1) * (n + 1) + numMax);
    }
}
