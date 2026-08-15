class Solution {
  public:
    vector<int> longestObstacleCourseAtEachPosition(vector<int> &obstacles) {
        int n = obstacles.size();
        vector<int> tails;
        tails.reserve(n);
        vector<int> ans;
        ans.reserve(n);
        for (int x : obstacles) {
            int i = upper_bound(tails.begin(), tails.end(), x) - tails.begin();
            if (i == (int)tails.size())
                tails.push_back(x);
            else
                tails[i] = x;
            ans.push_back(i + 1);
        }
        return ans;
    }
};
