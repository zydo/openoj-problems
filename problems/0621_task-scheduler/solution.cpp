class Solution {
  public:
    int leastInterval(vector<string> &tasks, int n) {
        unordered_map<string, int> counts;
        for (const string &t : tasks) {
            counts[t]++;
        }
        int maxFreq = 0;
        int numMax = 0;
        for (const auto &kv : counts) {
            if (kv.second > maxFreq) {
                maxFreq = kv.second;
                numMax = 1;
            } else if (kv.second == maxFreq) {
                numMax++;
            }
        }
        return max((int)tasks.size(), (maxFreq - 1) * (n + 1) + numMax);
    }
};
