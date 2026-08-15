class NumArray {

    private final int n;
    private final int[] nums;
    private final long[] tree;

    public NumArray(int[] nums) {
        this.n = nums.length;
        this.nums = nums.clone();
        this.tree = new long[n + 1];
        for (int index = 1; index <= n; index++) {
            tree[index] += this.nums[index - 1];
            int parent = index + (index & -index);
            if (parent <= n) {
                tree[parent] += tree[index];
            }
        }
    }

    public void update(int index, int val) {
        int delta = val - nums[index];
        nums[index] = val;
        for (
            int position = index + 1;
            position <= n;
            position += position & -position
        ) {
            tree[position] += delta;
        }
    }

    public long sumRange(int left, int right) {
        return prefix(right + 1) - prefix(left);
    }

    private long prefix(int count) {
        long total = 0;
        while (count > 0) {
            total += tree[count];
            count -= count & -count;
        }
        return total;
    }
}
