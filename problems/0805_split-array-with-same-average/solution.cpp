class Solution {
  public:
    bool splitArraySameAverage(vector<int> &nums) {
        int n = nums.size();
        long long total = 0;
        for (int v : nums)
            total += v;

        // Map from subset size -> set of achievable sums with that size.
        auto subsetSums = [](const vector<int> &arr) {
            unordered_map<int, unordered_set<long long>> d;
            int m = arr.size();
            for (int mask = 0; mask < (1 << m); mask++) {
                long long s = 0;
                int sz = 0;
                for (int i = 0; i < m; i++) {
                    if (mask >> i & 1) {
                        s += arr[i];
                        sz += 1;
                    }
                }
                d[sz].insert(s);
            }
            return d;
        };

        int mid = n / 2;
        vector<int> leftArr(nums.begin(), nums.begin() + mid);
        vector<int> rightArr(nums.begin() + mid, nums.end());

        auto left = subsetSums(leftArr);
        auto right = subsetSums(rightArr);
        int nr = n - mid;

        for (int s = 1; s < n; s++) {
            if ((total * s) % n != 0)
                continue;
            long long target = total * s / n;
            int lo = max(0, s - nr);
            int hi = min(mid, s);
            for (int s1 = lo; s1 <= hi; s1++) {
                int s2 = s - s1;
                if (!left.count(s1) || !right.count(s2))
                    continue;
                for (long long v : left[s1]) {
                    if (right[s2].count(target - v))
                        return true;
                }
            }
        }
        return false;
    }
};
