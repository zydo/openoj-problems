class Solution {
  public:
    int maxNumOfMarkedIndices(vector<int> &nums) {
        vector<int> a(nums);
        sort(a.begin(), a.end());
        int n = a.size();
        int i = 0;
        for (int j = (n + 1) / 2; j < n; j++) {
            if (2LL * a[i] <= (long long)a[j]) {
                i++;
            }
        }
        return 2 * i;
    }
};
