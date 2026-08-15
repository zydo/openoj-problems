class Solution {
  public:
    int maximumSum(vector<int> &arr) {
        int n = arr.size();
        if (n == 1) {
            return arr[0];
        }
        // noDel: max subarray sum ending at i with no deletion
        // oneDel: max subarray sum ending at i with exactly one deletion
        long long noDel = arr[0];
        long long oneDel = LLONG_MIN / 2;
        long long best = arr[0];
        for (int i = 1; i < n; i++) {
            oneDel = max(oneDel + arr[i], noDel);
            noDel = max(noDel + arr[i], (long long)arr[i]);
            best = max({best, noDel, oneDel});
        }
        return (int)best;
    }
};
