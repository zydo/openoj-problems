class Solution {

    private int[] masks;
    private int n;
    private int best;

    public int maxLength(String[] arr) {
        n = arr.length;
        masks = new int[n];
        for (int i = 0; i < n; i++) {
            int mask = 0;
            boolean bad = false;
            for (char ch : arr[i].toCharArray()) {
                int bit = 1 << (ch - 'a');
                if ((mask & bit) != 0) {
                    bad = true;
                    break;
                }
                mask |= bit;
            }
            masks[i] = bad ? -1 : mask;
        }
        best = 0;
        dfs(0, 0);
        return best;
    }

    private void dfs(int index, int used) {
        int total = Integer.bitCount(used);
        if (total > best) best = total;
        for (int j = index; j < n; j++) {
            if (masks[j] != -1 && (used & masks[j]) == 0) {
                dfs(j + 1, used | masks[j]);
            }
        }
    }
}
