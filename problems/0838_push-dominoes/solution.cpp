class Solution {
  public:
    string pushDominoes(string dominoes) {
        int n = dominoes.size();
        vector<long long> forces(n, 0);
        long long f = 0;
        for (int i = 0; i < n; i++) {
            if (dominoes[i] == 'R') {
                f = n;
            } else if (dominoes[i] == 'L') {
                f = 0;
            } else {
                f = max(f - 1, 0LL);
            }
            forces[i] += f;
        }
        f = 0;
        for (int i = n - 1; i >= 0; i--) {
            if (dominoes[i] == 'L') {
                f = n;
            } else if (dominoes[i] == 'R') {
                f = 0;
            } else {
                f = max(f - 1, 0LL);
            }
            forces[i] -= f;
        }
        string res(n, '.');
        for (int i = 0; i < n; i++) {
            if (forces[i] > 0)
                res[i] = 'R';
            else if (forces[i] < 0)
                res[i] = 'L';
        }
        return res;
    }
};
