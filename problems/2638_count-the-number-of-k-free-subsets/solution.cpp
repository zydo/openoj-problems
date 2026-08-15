class Solution {
  public:
    long long countTheNumOfKFreeSubsets(vector<int> &nums, int k) {
        vector<int> sorted(nums);
        sort(sorted.begin(), sorted.end());
        unordered_map<int, int> groupOf;
        vector<long long> lengths;
        for (int x : sorted) {
            auto it = groupOf.find(x - k);
            if (it != groupOf.end()) {
                groupOf[x] = it->second;
                lengths[it->second] += 1;
            } else {
                groupOf[x] = (int)lengths.size();
                lengths.push_back(1);
            }
        }
        long long ans = 1;
        for (long long length : lengths) {
            long long a = 1, b = 1;
            for (long long t = 0; t < length; t++) {
                long long nb = a + b;
                a = b;
                b = nb;
            }
            ans *= b;
        }
        return ans;
    }
};
