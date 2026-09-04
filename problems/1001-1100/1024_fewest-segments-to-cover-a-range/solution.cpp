class Solution {
  public:
    int fewestSegments(vector<vector<int>> &segments, int span) {
        // Jump-game greedy over segments sorted by start.
        vector<vector<int>> ordered(segments);
        sort(ordered.begin(), ordered.end());
        int count = 0;
        int covered = 0;
        int farthest = 0;
        int i = 0;
        int n = (int)ordered.size();
        while (covered < span) {
            // Cursor i never resets: every segment starting at or before `covered`
            // is examined once, tracking the farthest reach it enables.
            while (i < n && ordered[i][0] <= covered) {
                if (ordered[i][1] > farthest) {
                    farthest = ordered[i][1];
                }
                i++;
            }
            // No usable segment reaches past the current coverage: an unbridgeable gap.
            if (farthest == covered) {
                return -1;
            }
            // Take one segment — the farthest-reaching — and jump the frontier.
            covered = farthest;
            count++;
        }
        return count;
    }
};
