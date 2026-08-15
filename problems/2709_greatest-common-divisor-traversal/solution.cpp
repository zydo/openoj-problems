class Solution {
  public:
    bool canTraverseAllPairs(vector<int> &nums) {
        int n = nums.size();
        if (n == 1)
            return true;
        for (int x : nums) {
            if (x == 1)
                return false;
        }

        int maxv = 0;
        for (int x : nums)
            maxv = max(maxv, x);
        vector<int> spf(maxv + 1);
        for (int i = 0; i <= maxv; i++)
            spf[i] = i;
        for (int i = 2; (long long)i * i <= maxv; i++) {
            if (spf[i] == i) {
                for (int j = i * i; j <= maxv; j += i) {
                    if (spf[j] == j)
                        spf[j] = i;
                }
            }
        }

        vector<int> parent(n);
        for (int i = 0; i < n; i++)
            parent[i] = i;

        auto find = [&](int x) {
            while (parent[x] != x) {
                parent[x] = parent[parent[x]];
                x = parent[x];
            }
            return x;
        };
        auto unite = [&](int a, int b) {
            int ra = find(a), rb = find(b);
            if (ra != rb)
                parent[ra] = rb;
        };

        unordered_map<int, int> last;
        for (int i = 0; i < n; i++) {
            int v = nums[i];
            while (v > 1) {
                int p = spf[v];
                auto it = last.find(p);
                if (it != last.end())
                    unite(i, it->second);
                last[p] = i;
                while (v % p == 0)
                    v /= p;
            }
        }

        int root = find(0);
        for (int i = 1; i < n; i++) {
            if (find(i) != root)
                return false;
        }
        return true;
    }
};
