class Solution {
  public:
    int earliestFullBloom(vector<int> &plantTime, vector<int> &growTime) {
        int n = plantTime.size();
        vector<int> idx(n);
        iota(idx.begin(), idx.end(), 0);
        stable_sort(idx.begin(), idx.end(),
                    [&](int a, int b) { return growTime[a] > growTime[b]; });
        int best = 0;
        int prefix = 0;
        for (int i : idx) {
            prefix += plantTime[i];
            best = max(best, prefix + growTime[i]);
        }
        return best;
    }
};
