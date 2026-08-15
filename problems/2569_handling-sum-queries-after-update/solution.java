import java.util.ArrayList;
import java.util.List;

class Solution {

    private long[] tree;
    private boolean[] lazy;
    private int n;

    public long[] handleQuery(int[] nums1, int[] nums2, int[][] queries) {
        n = nums1.length;
        tree = new long[4 * Math.max(1, n)];
        lazy = new boolean[4 * Math.max(1, n)];
        build(1, 0, n - 1, nums1);
        long total = 0;
        for (int x : nums2) {
            total += x;
        }
        List<Long> answers = new ArrayList<>();
        for (int[] q : queries) {
            int kind = q[0];
            if (kind == 1) {
                flip(1, 0, n - 1, q[1], q[2]);
            } else if (kind == 2) {
                total += (long) q[1] * tree[1];
            } else {
                answers.add(total);
            }
        }
        long[] res = new long[answers.size()];
        for (int i = 0; i < res.length; i++) {
            res[i] = answers.get(i);
        }
        return res;
    }

    private void build(int node, int lo, int hi, int[] arr) {
        if (lo == hi) {
            tree[node] = arr[lo];
            return;
        }
        int mid = (lo + hi) >>> 1;
        build(node * 2, lo, mid, arr);
        build(node * 2 + 1, mid + 1, hi, arr);
        tree[node] = tree[node * 2] + tree[node * 2 + 1];
    }

    private void apply(int node, int lo, int hi) {
        tree[node] = (long) (hi - lo + 1) - tree[node];
        lazy[node] = !lazy[node];
    }

    private void push(int node, int lo, int hi) {
        if (lazy[node]) {
            int mid = (lo + hi) >>> 1;
            apply(node * 2, lo, mid);
            apply(node * 2 + 1, mid + 1, hi);
            lazy[node] = false;
        }
    }

    private void flip(int node, int lo, int hi, int ql, int qr) {
        if (ql > hi || qr < lo) {
            return;
        }
        if (ql <= lo && hi <= qr) {
            apply(node, lo, hi);
            return;
        }
        push(node, lo, hi);
        int mid = (lo + hi) >>> 1;
        flip(node * 2, lo, mid, ql, qr);
        flip(node * 2 + 1, mid + 1, hi, ql, qr);
        tree[node] = tree[node * 2] + tree[node * 2 + 1];
    }
}
