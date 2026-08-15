class Solution {
  public:
    int maxPerformance(int n, vector<int> &speed, vector<int> &efficiency, int k) {
        const long long MOD = 1000000007LL;
        vector<pair<int, int>> engineers(n);
        for (int i = 0; i < n; i++) {
            engineers[i] = {efficiency[i], speed[i]};
        }
        sort(engineers.begin(), engineers.end(), greater<pair<int, int>>());
        priority_queue<int, vector<int>, greater<int>> pq;
        long long speedSum = 0;
        long long best = 0;
        for (auto &[eff, spd] : engineers) {
            pq.push(spd);
            speedSum += spd;
            if ((int)pq.size() > k) {
                speedSum -= pq.top();
                pq.pop();
            }
            long long perf = speedSum * eff;
            best = max(best, perf);
        }
        return (int)(best % MOD);
    }
};
