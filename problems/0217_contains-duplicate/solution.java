import java.util.HashSet;
import java.util.Set;

class Solution {

    public boolean containsDuplicate(int[] nums) {
        Set<Integer> seen = new HashSet<>();
        for (int value : nums) {
            if (!seen.add(value)) {
                return true;
            }
        }
        return false;
    }
}
