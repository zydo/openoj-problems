class Solution {

    public int maximumSum(int[] arr) {
        int n = arr.length;
        if (n == 1) {
            return arr[0];
        }
        // noDel: max subarray sum ending at i with no deletion
        // oneDel: max subarray sum ending at i with exactly one deletion
        long noDel = arr[0];
        long oneDel = Long.MIN_VALUE / 2;
        long best = arr[0];
        for (int i = 1; i < n; i++) {
            oneDel = Math.max(oneDel + arr[i], noDel);
            noDel = Math.max(noDel + arr[i], arr[i]);
            best = Math.max(best, Math.max(noDel, oneDel));
        }
        return (int) best;
    }
}
