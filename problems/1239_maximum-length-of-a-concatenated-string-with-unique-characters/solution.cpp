class Solution {
  public:
    int maxLength(vector<string> &arr) {
        int n = arr.size();
        vector<int> masks(n);
        for (int i = 0; i < n; i++) {
            int mask = 0;
            bool bad = false;
            for (char ch : arr[i]) {
                int bit = 1 << (ch - 'a');
                if (mask & bit) {
                    bad = true;
                    break;
                }
                mask |= bit;
            }
            masks[i] = bad ? -1 : mask;
        }
        int best = 0;
        function<void(int, int)> dfs = [&](int index, int used) {
            best = max(best, __builtin_popcount((unsigned)used));
            for (int j = index; j < n; j++) {
                if (masks[j] != -1 && (used & masks[j]) == 0) {
                    dfs(j + 1, used | masks[j]);
                }
            }
        };
        dfs(0, 0);
        return best;
    }
};
