class Solution {
  public:
    int minimumCost(int m, int n, vector<int> &horizontalCut, vector<int> &verticalCut) {
        vector<int> hcuts(horizontalCut), vcuts(verticalCut);
        sort(hcuts.rbegin(), hcuts.rend());
        sort(vcuts.rbegin(), vcuts.rend());
        size_t i = 0, j = 0;
        long long hMade = 0, vMade = 0;
        long long total = 0;
        while (i < hcuts.size() && j < vcuts.size()) {
            if (hcuts[i] >= vcuts[j]) {
                total += (long long)hcuts[i] * (vMade + 1);
                i++;
                hMade++;
            } else {
                total += (long long)vcuts[j] * (hMade + 1);
                j++;
                vMade++;
            }
        }
        while (i < hcuts.size()) {
            total += (long long)hcuts[i] * (vMade + 1);
            i++;
        }
        while (j < vcuts.size()) {
            total += (long long)vcuts[j] * (hMade + 1);
            j++;
        }
        return (int)total;
    }
};
