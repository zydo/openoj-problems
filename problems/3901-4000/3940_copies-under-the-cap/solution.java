import java.util.ArrayList;
import java.util.List;

class Solution {

    public int[] capCopies(int[] nums, int k) {
        List<Integer> answer = new ArrayList<>();
        int seen = 0;
        Integer previous = null;
        for (int value : nums) {
            if (previous == null || value != previous) {
                previous = value;
                seen = 0;
            }
            if (seen < k) {
                answer.add(value);
                seen++;
            }
        }
        return answer.stream().mapToInt(Integer::intValue).toArray();
    }
}
