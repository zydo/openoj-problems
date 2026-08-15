class Solution {
  public:
    long long makeSubKSumEqual(vector<int> &arr, int k) {
        int n = (int)arr.size();
        int a = n, b = k;
        while (b != 0) {
            int t = a % b;
            a = b;
            b = t;
        }
        int g = a;
        long long total = 0;
        for (int r = 0; r < g; r++) {
            vector<int> group;
            for (int i = r; i < n; i += g)
                group.push_back(arr[i]);
            sort(group.begin(), group.end());
            int median = group[group.size() / 2];
            for (int v : group)
                total += llabs((long long)v - median);
        }
        return total;
    }
};
