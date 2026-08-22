class Solution {
  public:
    int largestMinGap(vector<int> &slots, int m) {
        sort(slots.begin(), slots.end());

        // Feasibility is monotone in the spacing, so binary search the
        // largest feasible d over [1, span]; the upper-mid form keeps the
        // search moving when lo and hi become adjacent.
        int lo = 1;
        int hi = slots.back() - slots.front();
        while (lo < hi) {
            int mid = lo + (hi - lo + 1) / 2;
            if (feasible(slots, m, mid)) {
                lo = mid;
            } else {
                hi = mid - 1;
            }
        }
        return lo;
    }

  private:
    bool feasible(vector<int> &slots, int m, int distance) {
        // Greedy: the first marker sits at the leftmost slot (count = 1),
        // then each marker takes the first slot at least `distance` beyond
        // the last placed one. Earliest-possible placement is never worse,
        // so failure here means no placement works.
        int count = 1;
        int last = slots[0];
        for (int i = 1; i < (int)slots.size(); i++) {
            if (slots[i] - last >= distance) {
                count++;
                last = slots[i];
                if (count >= m) {
                    // All markers placed — exit early.
                    return true;
                }
            }
        }
        return count >= m;
    }
};
