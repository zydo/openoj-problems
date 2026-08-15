class Solution {
  public:
    string shiftingLetters(string s, vector<vector<int>> &shifts) {
        int n = s.size();
        vector<long long> diff(n + 1, 0);
        for (auto &sh : shifts) {
            int delta = sh[2] == 1 ? 1 : -1;
            diff[sh[0]] += delta;
            diff[sh[1] + 1] -= delta;
        }
        string res(n, ' ');
        long long shift = 0;
        for (int i = 0; i < n; i++) {
            shift += diff[i];
            int c = (int)(((s[i] - 'a' + shift) % 26 + 26) % 26);
            res[i] = char('a' + c);
        }
        return res;
    }
};
