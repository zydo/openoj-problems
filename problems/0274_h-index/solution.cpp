class Solution {
  public:
    int hIndex(vector<int> &citations) {
        int n = citations.size();
        vector<int> count(n + 1, 0);
        for (int c : citations) {
            count[min(c, n)]++;
        }
        int total = 0;
        for (int h = n; h >= 0; h--) {
            total += count[h];
            if (total >= h) {
                return h;
            }
        }
        return 0;
    }
};
