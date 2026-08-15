class Solution {
  public:
    int videoStitching(vector<vector<int>> &clips, int time) {
        vector<vector<int>> ordered(clips);
        sort(ordered.begin(), ordered.end());
        int count = 0;
        int covered = 0;
        int farthest = 0;
        int i = 0;
        int n = (int)ordered.size();
        while (covered < time) {
            while (i < n && ordered[i][0] <= covered) {
                if (ordered[i][1] > farthest) {
                    farthest = ordered[i][1];
                }
                i++;
            }
            if (farthest == covered) {
                return -1;
            }
            covered = farthest;
            count++;
        }
        return count;
    }
};
