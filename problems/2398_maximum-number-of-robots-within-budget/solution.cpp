class Solution {
  public:
    int maximumRobots(vector<int> &chargeTimes, vector<int> &runningCosts, long long budget) {
        int n = (int)chargeTimes.size();
        deque<int> dq; // indices with decreasing chargeTimes
        long long run = 0;
        int left = 0;
        int best = 0;
        for (int right = 0; right < n; right++) {
            while (!dq.empty() && chargeTimes[dq.back()] <= chargeTimes[right]) {
                dq.pop_back();
            }
            dq.push_back(right);
            run += runningCosts[right];
            while (!dq.empty() &&
                   chargeTimes[dq.front()] + (long long)(right - left + 1) * run > budget) {
                if (dq.front() == left) {
                    dq.pop_front();
                }
                run -= runningCosts[left];
                left++;
            }
            best = max(best, right - left + 1);
        }
        return best;
    }
};
