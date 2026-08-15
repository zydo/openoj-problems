class Solution {
  public:
    int getLastMoment(int n, vector<int> &left, vector<int> &right) {
        int best = 0;
        for (int position : left) {
            best = max(best, position);
        }
        for (int position : right) {
            best = max(best, n - position);
        }
        return best;
    }
};
