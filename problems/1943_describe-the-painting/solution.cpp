class Solution {
  public:
    vector<vector<long long>> splitPainting(vector<vector<int>> &segments) {
        map<long long, long long> diff;
        for (auto &seg : segments) {
            diff[(long long)seg[0]] += seg[2];
            diff[(long long)seg[1]] -= seg[2];
        }
        vector<vector<long long>> result;
        long long running = 0;
        bool first = true;
        long long prevKey = 0;
        for (auto &e : diff) {
            if (!first && running > 0) {
                result.push_back({prevKey, e.first, running});
            }
            running += e.second;
            prevKey = e.first;
            first = false;
        }
        return result;
    }
};
