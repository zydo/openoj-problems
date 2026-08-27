#include <algorithm>
#include <vector>

class Solution {
  public:
    // The single negative person is the only sink; each positive person
    // is a source whose units cost their circular distance to the sink,
    // so the cheapest sources are drained first.
    long long minMoves(vector<int> &balance) {
        int neg = -1;
        for (int i = 0; i < (int)balance.size(); i++) {
            if (balance[i] < 0) {
                neg = i;
                break;
            }
        }
        if (neg == -1) {
            return 0;
        }
        long long total = 0;
        for (int v : balance) {
            total += v;
        }
        if (total < 0) {
            return -1;
        }
        int n = balance.size();
        long long need = -(long long)balance[neg];
        vector<pair<int, int>> sources;
        for (int i = 0; i < n; i++) {
            if (i != neg && balance[i] > 0) {
                int diff = abs(i - neg);
                sources.push_back({min(diff, n - diff), balance[i]});
            }
        }
        sort(sources.begin(), sources.end());
        long long moves = 0;
        for (auto [d, v] : sources) {
            if (need == 0) {
                break;
            }
            long long take = min((long long)v, need);
            moves += take * d;
            need -= take;
        }
        return moves;
    }
};
