class Solution {

    public long[] maximumSegmentSum(int[] nums, int[] removeQueries) {
        int n = nums.length;
        int[] parent = new int[n];
        for (int i = 0; i < n; i++) parent[i] = i;
        long[] ssum = new long[n];
        boolean[] active = new boolean[n];

        long[] answer = new long[n];
        int out = 0;
        answer[out++] = 0;
        long best = 0;
        for (int qi = removeQueries.length - 1; qi >= 1; qi--) {
            int i = removeQueries[qi];
            active[i] = true;
            ssum[i] = nums[i];
            for (int j : new int[] { i - 1, i + 1 }) {
                if (j >= 0 && j < n && active[j]) {
                    int a = find(parent, i),
                        b = find(parent, j);
                    if (a != b) {
                        parent[a] = b;
                        ssum[b] += ssum[a];
                    }
                }
            }
            long cur = ssum[find(parent, i)];
            if (cur > best) best = cur;
            answer[out++] = best;
        }
        for (int l = 0, r = out - 1; l < r; l++, r--) {
            long tmp = answer[l];
            answer[l] = answer[r];
            answer[r] = tmp;
        }
        return answer;
    }

    private int find(int[] parent, int x) {
        while (parent[x] != x) {
            parent[x] = parent[parent[x]];
            x = parent[x];
        }
        return x;
    }
}
