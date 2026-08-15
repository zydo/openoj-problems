class Solution {
  public:
    long long maximumCoins(vector<vector<int>> &coins, int k) {
        vector<vector<int>> segments(coins);
        stable_sort(segments.begin(), segments.end(),
                    [](const vector<int> &a, const vector<int> &b) { return a[0] < b[0]; });
        int n = (int)segments.size();
        vector<long long> lefts(n), rights(n), cs(n), area(n), prefix(n + 1, 0);
        for (int i = 0; i < n; i++) {
            lefts[i] = segments[i][0];
            rights[i] = segments[i][1];
            cs[i] = segments[i][2];
            area[i] = cs[i] * (rights[i] - lefts[i] + 1);
            prefix[i + 1] = prefix[i] + area[i];
        }

        long long best = 0;
        for (int i = 0; i < n; i++) {
            for (long long candidate : {lefts[i], rights[i] - (long long)k + 1}) {
                long long value = window(lefts, rights, cs, area, prefix, (long long)k, candidate);
                if (value > best)
                    best = value;
            }
        }
        return best;
    }

  private:
    long long window(const vector<long long> &lefts, const vector<long long> &rights,
                     const vector<long long> &cs, const vector<long long> &area,
                     const vector<long long> &prefix, long long k, long long start) {
        long long end = start + k - 1;
        // bisect_left(rights, start)
        int a = (int)(lower_bound(rights.begin(), rights.end(), start) - rights.begin());
        // bisect_right(lefts, end) - 1
        int b = (int)(upper_bound(lefts.begin(), lefts.end(), end) - lefts.begin()) - 1;
        if (a > b)
            return 0;
        long long loA = max(lefts[a], start);
        long long hiA = min(rights[a], end);
        if (a == b) {
            return loA <= hiA ? cs[a] * (hiA - loA + 1) : 0;
        }
        long long loB = max(lefts[b], start);
        long long hiB = min(rights[b], end);
        long long total = prefix[b + 1] - prefix[a];
        total += cs[a] * (hiA - loA + 1) - area[a];
        total += cs[b] * (hiB - loB + 1) - area[b];
        return total;
    }
};
