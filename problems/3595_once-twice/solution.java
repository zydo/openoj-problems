import java.util.HashMap;
import java.util.Map;

class Solution {

    public int[] onceTwice(int[] nums) {
        Map<Integer, Integer> counts = new HashMap<>();
        for (int x : nums) counts.merge(x, 1, Integer::sum);
        int once = 0,
            twice = 0;
        for (Map.Entry<Integer, Integer> e : counts.entrySet()) {
            if (e.getValue() == 1) once = e.getKey();
            else if (e.getValue() == 2) twice = e.getKey();
        }
        return new int[] { once, twice };
    }
}
