class Solution {

    public int[] findClosestElements(int[] arr, int k, int x) {
        int lo = 0;
        int hi = arr.length - k;
        while (lo < hi) {
            int mid = lo + (hi - lo) / 2;
            if (x - arr[mid] > arr[mid + k] - x) {
                lo = mid + 1;
            } else {
                hi = mid;
            }
        }
        int[] result = new int[k];
        System.arraycopy(arr, lo, result, 0, k);
        return result;
    }
}
