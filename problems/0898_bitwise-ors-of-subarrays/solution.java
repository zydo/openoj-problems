import java.util.HashSet;
import java.util.Set;

class Solution {

    public int subarrayBitwiseORs(int[] arr) {
        Set<Integer> seen = new HashSet<>();
        Set<Integer> current = new HashSet<>();
        for (int x : arr) {
            Set<Integer> nxt = new HashSet<>();
            for (int y : current) {
                nxt.add(x | y);
            }
            nxt.add(x);
            current = nxt;
            seen.addAll(current);
        }
        return seen.size();
    }
}
