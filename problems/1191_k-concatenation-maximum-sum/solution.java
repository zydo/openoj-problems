class Solution {

    private static final long MOD = 1000000007L;

    public int kConcatenationMaxSum(int[] arr, int k) {
        long total = 0;
        for (int value : arr) total += value;

        if (k == 1) {
            return (int) (kadane(arr, arr.length, 1) % MOD);
        }
        long best = kadane(arr, arr.length, 2);
        if (k > 2 && total > 0) {
            best = Math.max(
                best,
                maxSuffix(arr) + maxPrefix(arr) + (k - 2) * total
            );
        }
        return (int) (best % MOD);
    }

    private long kadane(int[] arr, int n, int copies) {
        long best = 0;
        long current = 0;
        for (int c = 0; c < copies; c++) {
            for (int i = 0; i < n; i++) {
                current = Math.max(current + arr[i], 0);
                best = Math.max(best, current);
            }
        }
        return best;
    }

    private long maxPrefix(int[] arr) {
        long best = 0;
        long current = 0;
        for (int value : arr) {
            current += value;
            best = Math.max(best, current);
        }
        return best;
    }

    private long maxSuffix(int[] arr) {
        long best = 0;
        long current = 0;
        for (int i = arr.length - 1; i >= 0; i--) {
            current += arr[i];
            best = Math.max(best, current);
        }
        return best;
    }
}
