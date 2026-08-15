import java.util.HashSet;
import java.util.Set;

class Solution {

    public int shortestSequence(int[] rolls, int k) {
        Set<Integer> seen = new HashSet<>();
        int answer = 1;
        for (int r : rolls) {
            seen.add(r);
            if (seen.size() == k) {
                answer += 1;
                seen.clear();
            }
        }
        return answer;
    }
}
