class Solution {
  public:
    int longestCommonPrefix(vector<int> &arr1, vector<int> &arr2) {
        unordered_set<int> prefixes;
        char buf[16];
        for (int x : arr1) {
            snprintf(buf, sizeof(buf), "%d", x);
            int v = 0;
            for (char *p = buf; *p; ++p) {
                v = v * 10 + (*p - '0');
                prefixes.insert(v);
            }
        }
        int best = 0;
        for (int y : arr2) {
            snprintf(buf, sizeof(buf), "%d", y);
            int v = 0;
            int len = 0;
            for (char *p = buf; *p; ++p) {
                v = v * 10 + (*p - '0');
                len++;
                if (prefixes.count(v)) {
                    if (len > best)
                        best = len;
                } else {
                    break;
                }
            }
        }
        return best;
    }
};
