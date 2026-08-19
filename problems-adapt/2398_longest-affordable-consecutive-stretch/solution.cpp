class Solution {
  public:
    int longestAffordableStretch(vector<int> &startCosts, vector<int> &usageCosts, long long budget) {
        int n = (int)startCosts.size();
        deque<int> dq; // indices with decreasing startCosts
        long long run = 0;
        int left = 0;
        int best = 0;
        // cost max(charge) + k*sum(run) is monotone in the window, so a
        // two-pointer sweep maximizes length under the budget
        for (int right = 0; right < n; right++) {
            // back indices with charge <= the new one can never be the max
            while (!dq.empty() && startCosts[dq.back()] <= startCosts[right]) {
                dq.pop_back();
            }
            dq.push_back(right);
            run += usageCosts[right];
            // over budget: shrink from the left, dropping the front (the
            // argmax) once left passes it; the window may empty to length 0
            while (!dq.empty() && startCosts[dq.front()] + (long long)(right - left + 1) * run > budget) {
                if (dq.front() == left) {
                    dq.pop_front();
                }
                run -= usageCosts[left];
                left++;
            }
            best = max(best, right - left + 1);
        }
        return best;
    }
};
