class Solution {
  public:
    int shortestCooldownSchedule(vector<string> &jobs, int n) {
        unordered_map<string, int> counts;
        for (const string &t : jobs) {
            counts[t]++;
        }
        int maxFreq = 0;
        int numMax = 0;
        for (const auto &kv : counts) {
            if (kv.second > maxFreq) {
                maxFreq = kv.second;
                numMax = 1;
            } else if (kv.second == maxFreq) {
                // Labels tying the max each occupy one slot of the final partial run.
                numMax++;
            }
        }
        // The bottleneck letter frames (maxFreq - 1) cycles of n + 1 plus the
        // final run; enough distinct jobs fill every gap, so never answer
        // less than the plain job count.
        return max((int)jobs.size(), (maxFreq - 1) * (n + 1) + numMax);
    }
};
