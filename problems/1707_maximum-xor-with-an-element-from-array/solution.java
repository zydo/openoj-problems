import java.util.Arrays;

class Solution {

    public int[] maximizeXor(int[] nums, int[][] queries) {
        int[] sortedNums = nums.clone();
        Arrays.sort(sortedNums);
        int nq = queries.length;
        Integer[] order = new Integer[nq];
        for (int i = 0; i < nq; i++) order[i] = i;
        Arrays.sort(order, (a, b) -> {
            int ma = queries[a][1],
                mb = queries[b][1];
            if (ma != mb) return Integer.compare(ma, mb);
            int xa = queries[a][0],
                xb = queries[b][0];
            if (xa != xb) return Integer.compare(xa, xb);
            return Integer.compare(a, b);
        });
        int[] answers = new int[nq];
        // flat trie: child[2*node] and child[2*node+1], -1 = missing
        int[] child = new int[2 * (sortedNums.length * 31 + 2)];
        java.util.Arrays.fill(child, -1);
        int nodeCount = 1;
        int ptr = 0;
        int n = sortedNums.length;
        for (int oi = 0; oi < nq; oi++) {
            int idx = order[oi];
            int mi = queries[idx][1];
            int xi = queries[idx][0];
            while (ptr < n && sortedNums[ptr] <= mi) {
                int node = 0;
                int v = sortedNums[ptr];
                for (int bit = 29; bit >= 0; bit--) {
                    int b = (v >> bit) & 1;
                    if (child[2 * node + b] == -1) {
                        child[2 * node + b] = nodeCount;
                        nodeCount++;
                    }
                    node = child[2 * node + b];
                }
                ptr++;
            }
            if (ptr == 0) {
                answers[idx] = -1;
                continue;
            }
            int node = 0;
            int best = 0;
            for (int bit = 29; bit >= 0; bit--) {
                int xb = (xi >> bit) & 1;
                int want = 1 - xb;
                if (child[2 * node + want] != -1) {
                    best |= 1 << bit;
                    node = child[2 * node + want];
                } else {
                    node = child[2 * node + xb];
                }
            }
            answers[idx] = best;
        }
        return answers;
    }
}
