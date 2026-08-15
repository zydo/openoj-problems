class Solution {
  public:
    int findTheWinner(int n, int k) {
        vector<int> friends(n);
        for (int i = 0; i < n; i++)
            friends[i] = i + 1;
        int idx = 0;
        while (friends.size() > 1) {
            idx = (idx + k - 1) % friends.size();
            friends.erase(friends.begin() + idx);
        }
        return friends[0];
    }
};
