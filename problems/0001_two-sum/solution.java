import java.util.HashMap;
import java.util.Map;

class Solution {

    public int[] twoSum(int[] nums, int target) {
        Map<Integer, Integer> seen = new HashMap<>();
        for (int index = 0; index < nums.length; ++index) {
            Integer earlier = seen.get(target - nums[index]);
            if (earlier != null) return new int[] { earlier, index };
            seen.put(nums[index], index);
        }
        return new int[] {};
    }
}
