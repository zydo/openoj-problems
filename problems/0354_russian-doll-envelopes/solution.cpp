class Solution {
  public:
    int maxEnvelopes(vector<vector<int>> &envelopes) {
        sort(envelopes.begin(), envelopes.end(), [](const vector<int> &a, const vector<int> &b) {
            if (a[0] != b[0])
                return a[0] < b[0];
            return a[1] > b[1];
        });
        vector<int> tails;
        for (auto &e : envelopes) {
            int x = e[1];
            auto it = lower_bound(tails.begin(), tails.end(), x);
            if (it == tails.end())
                tails.push_back(x);
            else
                *it = x;
        }
        return (int)tails.size();
    }
};
