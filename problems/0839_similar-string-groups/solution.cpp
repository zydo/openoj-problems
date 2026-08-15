class Solution {
  public:
    int numSimilarGroups(vector<string> &strs) {
        int n = strs.size();
        vector<int> parent(n);
        iota(parent.begin(), parent.end(), 0);

        auto find = [&](int x) {
            while (parent[x] != x) {
                parent[x] = parent[parent[x]];
                x = parent[x];
            }
            return x;
        };

        auto similar = [&](const string &a, const string &b) {
            int mismatches = 0;
            for (size_t i = 0; i < a.size(); i++) {
                if (a[i] != b[i]) {
                    mismatches++;
                    if (mismatches > 2) {
                        return false;
                    }
                }
            }
            return mismatches == 0 || mismatches == 2;
        };

        for (int i = 0; i < n; i++) {
            for (int j = i + 1; j < n; j++) {
                if (similar(strs[i], strs[j])) {
                    int ri = find(i);
                    int rj = find(j);
                    if (ri != rj) {
                        parent[ri] = rj;
                    }
                }
            }
        }

        unordered_set<int> roots;
        for (int i = 0; i < n; i++) {
            roots.insert(find(i));
        }
        return roots.size();
    }
};
