class Solution {
  public:
    int jobScheduling(vector<int> &startTime, vector<int> &endTime, vector<int> &profit) {
        int n = (int)startTime.size();
        vector<array<int, 3>> jobs(n);
        for (int i = 0; i < n; i++) {
            jobs[i] = {endTime[i], startTime[i], profit[i]};
        }
        sort(jobs.begin(), jobs.end());
        vector<int> ends(n);
        for (int i = 0; i < n; i++)
            ends[i] = jobs[i][0];

        vector<long long> best(n + 1, 0);
        for (int i = 1; i <= n; i++) {
            int start = jobs[i - 1][1];
            int p = jobs[i - 1][2];
            int j = (int)(upper_bound(ends.begin(), ends.begin() + (i - 1), start) - ends.begin());
            best[i] = max(best[i - 1], best[j] + p);
        }
        return (int)best[n];
    }
};
