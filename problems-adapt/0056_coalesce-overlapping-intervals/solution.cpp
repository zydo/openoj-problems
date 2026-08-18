class Solution {
  public:
    vector<vector<int>> coalesce(vector<vector<int>> &intervals) {
        // Copy, then sort by start (end as tiebreaker): any interval
        // overlapping an earlier one must overlap or touch the most recent
        // coalesced interval, so a sweep tracking only the last coalesced
        // interval suffices. Sorting the copy leaves the input untouched.
        vector<vector<int>> ordered(intervals);
        sort(ordered.begin(), ordered.end());
        vector<vector<int>> coalesced;
        for (auto &interval : ordered) {
            int start = interval[0];
            int end = interval[1];
            // `<=` counts touching intervals as overlapping, as required.
            // The start is already covered, so only the right edge matters.
            if (!coalesced.empty() && start <= coalesced.back()[1]) {
                // Raise the right edge when larger; an interval fully
                // swallowed by the coalesce leaves it untouched.
                if (end > coalesced.back()[1]) {
                    coalesced.back()[1] = end;
                }
            } else {
                // No overlap with the last coalesced interval: new group.
                coalesced.push_back({start, end});
            }
        }
        return coalesced;
    }
};
