class Solution {
  public:
    int maxProduct(vector<string> &words) {
        int n = words.size();
        vector<int> masks(n, 0);
        vector<int> lens(n, 0);
        for (int i = 0; i < n; i++) {
            int mask = 0;
            for (char ch : words[i]) {
                mask |= 1 << (ch - 'a');
            }
            masks[i] = mask;
            lens[i] = (int)words[i].size();
        }
        int best = 0;
        for (int i = 0; i < n; i++) {
            for (int j = i + 1; j < n; j++) {
                if ((masks[i] & masks[j]) == 0 && lens[i] * lens[j] > best) {
                    best = lens[i] * lens[j];
                }
            }
        }
        return best;
    }
};
