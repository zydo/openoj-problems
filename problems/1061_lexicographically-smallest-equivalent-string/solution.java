class Solution {

    public String smallestEquivalentString(
        String s1,
        String s2,
        String baseStr
    ) {
        int[] parent = new int[26];
        for (int i = 0; i < 26; i++) {
            parent[i] = i;
        }
        int[] root = parent;
        for (int i = 0; i < s1.length(); i++) {
            int ra = find(root, s1.charAt(i) - 'a');
            int rb = find(root, s2.charAt(i) - 'a');
            if (ra != rb) {
                if (rb < ra) {
                    int t = ra;
                    ra = rb;
                    rb = t;
                }
                root[rb] = ra;
            }
        }
        StringBuilder sb = new StringBuilder(baseStr.length());
        for (char c : baseStr.toCharArray()) {
            sb.append((char) ('a' + find(root, c - 'a')));
        }
        return sb.toString();
    }

    private int find(int[] parent, int a) {
        while (parent[a] != a) {
            parent[a] = parent[parent[a]];
            a = parent[a];
        }
        return a;
    }
}
