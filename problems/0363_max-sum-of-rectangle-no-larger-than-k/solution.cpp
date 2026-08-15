class Solution {
  public:
    int maxSumSubmatrix(vector<vector<int>> &matrix, int k) {
        int m = matrix.size();
        int n = matrix[0].size();
        long long best = LLONG_MIN;
        bool found = false;
        for (int top = 0; top < m; top++) {
            vector<long long> colSum(n, 0);
            for (int bottom = top; bottom < m; bottom++) {
                for (int c = 0; c < n; c++) {
                    colSum[c] += matrix[bottom][c];
                }
                long long prefix = 0;
                vector<long long> prefixes;
                prefixes.push_back(0);
                for (int c = 0; c < n; c++) {
                    prefix += colSum[c];
                    long long target = prefix - (long long)k;
                    auto it = lower_bound(prefixes.begin(), prefixes.end(), target);
                    if (it != prefixes.end()) {
                        long long candidate = prefix - *it;
                        if (!found || candidate > best) {
                            best = candidate;
                            found = true;
                        }
                    }
                    prefixes.insert(lower_bound(prefixes.begin(), prefixes.end(), prefix), prefix);
                }
            }
        }
        return (int)best;
    }
};
