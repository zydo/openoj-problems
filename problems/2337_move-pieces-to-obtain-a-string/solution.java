import java.util.ArrayList;

class Solution {

    public boolean canChange(String start, String target) {
        int n = start.length();
        ArrayList<int[]> s = new ArrayList<>();
        ArrayList<int[]> t = new ArrayList<>();
        for (int i = 0; i < n; i++) {
            if (start.charAt(i) != '_') s.add(new int[] { i, start.charAt(i) });
            if (target.charAt(i) != '_') t.add(new int[] {
                i,
                target.charAt(i),
            });
        }
        if (s.size() != t.size()) return false;
        for (int p = 0; p < s.size(); p++) {
            int i = s.get(p)[0];
            char ci = (char) s.get(p)[1];
            int j = t.get(p)[0];
            char cj = (char) t.get(p)[1];
            if (ci != cj) return false;
            if (ci == 'L' && i < j) return false;
            if (ci == 'R' && i > j) return false;
        }
        return true;
    }
}
