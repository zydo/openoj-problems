import java.util.*;

class Solution {

    public int numSimilarGroups(String[] strs) {
        int n = strs.length;
        int[] parent = new int[n];
        for (int i = 0; i < n; i++) {
            parent[i] = i;
        }
        for (int i = 0; i < n; i++) {
            for (int j = i + 1; j < n; j++) {
                if (similar(strs[i], strs[j])) {
                    int ri = find(parent, i);
                    int rj = find(parent, j);
                    if (ri != rj) {
                        parent[ri] = rj;
                    }
                }
            }
        }
        Set<Integer> roots = new HashSet<>();
        for (int i = 0; i < n; i++) {
            roots.add(find(parent, i));
        }
        return roots.size();
    }

    private boolean similar(String a, String b) {
        int mismatches = 0;
        for (int i = 0; i < a.length(); i++) {
            if (a.charAt(i) != b.charAt(i)) {
                mismatches++;
                if (mismatches > 2) {
                    return false;
                }
            }
        }
        return mismatches == 0 || mismatches == 2;
    }

    private int find(int[] parent, int x) {
        while (parent[x] != x) {
            parent[x] = parent[parent[x]];
            x = parent[x];
        }
        return x;
    }
}
