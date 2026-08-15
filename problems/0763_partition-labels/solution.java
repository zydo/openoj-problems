class Solution {

    public int[] partitionLabels(String s) {
        int n = s.length();
        int[] last = new int[26];
        for (int i = 0; i < n; i++) {
            last[s.charAt(i) - 'a'] = i;
        }
        java.util.List<Integer> parts = new java.util.ArrayList<>();
        int start = 0,
            end = 0;
        for (int i = 0; i < n; i++) {
            end = Math.max(end, last[s.charAt(i) - 'a']);
            if (i == end) {
                parts.add(end - start + 1);
                start = i + 1;
            }
        }
        int[] res = new int[parts.size()];
        for (int i = 0; i < parts.size(); i++) {
            res[i] = parts.get(i);
        }
        return res;
    }
}
