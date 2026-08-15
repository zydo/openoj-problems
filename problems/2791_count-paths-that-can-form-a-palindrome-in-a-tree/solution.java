import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

class Solution {

    public long countPalindromePaths(int[] parent, String s) {
        int n = parent.length;
        List<List<Integer>> children = new ArrayList<>();
        for (int i = 0; i < n; i++) children.add(new ArrayList<>());
        for (int i = 1; i < n; i++) children.get(parent[i]).add(i);

        int[] masks = new int[n];
        int[] order = new int[n];
        int cnt = 0;
        order[cnt++] = 0;
        for (int qi = 0; qi < cnt; qi++) {
            int v = order[qi];
            for (int c : children.get(v)) {
                masks[c] = masks[v] ^ (1 << (s.charAt(c) - 'a'));
                order[cnt++] = c;
            }
        }

        Map<Integer, Integer> freq = new HashMap<>();
        long ans = 0;
        for (int m : masks) {
            Integer c0 = freq.get(m);
            if (c0 != null) ans += c0;
            for (int b = 0; b < 26; b++) {
                Integer c1 = freq.get(m ^ (1 << b));
                if (c1 != null) ans += c1;
            }
            freq.merge(m, 1, Integer::sum);
        }
        return ans;
    }
}
