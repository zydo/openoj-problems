class Solution {
  public:
    int minimumTimeRequired(vector<int> &jobs, int k) {
        vector<int> sortedJobs = jobs;
        sort(sortedJobs.rbegin(), sortedJobs.rend());
        int n = sortedJobs.size();
        long long best = 0;
        for (int j : sortedJobs)
            best += j;
        vector<long long> loads(k, 0);
        dfs(0, n, k, sortedJobs, loads, best);
        return (int)best;
    }

  private:
    static void dfs(int i, int n, int k, const vector<int> &jobs, vector<long long> &loads,
                    long long &best) {
        if (i == n) {
            long long current = 0;
            for (long long l : loads) {
                if (l > current)
                    current = l;
            }
            if (current < best)
                best = current;
            return;
        }
        unordered_set<long long> seen;
        for (int w = 0; w < k; w++) {
            if (seen.count(loads[w]))
                continue;
            seen.insert(loads[w]);
            if (loads[w] + jobs[i] >= best)
                continue;
            loads[w] += jobs[i];
            dfs(i + 1, n, k, jobs, loads, best);
            loads[w] -= jobs[i];
            if (loads[w] == 0)
                break;
        }
    }
};
