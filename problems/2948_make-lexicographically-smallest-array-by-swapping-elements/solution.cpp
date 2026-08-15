class Solution {
  public:
    vector<int> lexicographicallySmallestArray(vector<int> &nums, int limit) {
        int n = nums.size();
        vector<pair<int, int>> pairs;
        pairs.reserve(n);
        for (int i = 0; i < n; i++)
            pairs.push_back({nums[i], i});
        sort(pairs.begin(), pairs.end()); // lexicographic: value, then index
        vector<int> result(n, 0);
        int i = 0;
        while (i < n) {
            int j = i;
            while (j + 1 < n && pairs[j + 1].first - pairs[j].first <= limit)
                j++;
            vector<int> indices;
            indices.reserve(j - i + 1);
            for (int pos = i; pos <= j; pos++)
                indices.push_back(pairs[pos].second);
            sort(indices.begin(), indices.end());
            for (int p = i; p <= j; p++) {
                result[indices[p - i]] = pairs[p].first;
            }
            i = j + 1;
        }
        return result;
    }
};
