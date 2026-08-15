class Solution {
  public:
    string robotWithString(string s) {
        int n = s.size();
        vector<char> suffixMin(n + 1, 127);
        for (int i = n - 1; i >= 0; i--) {
            suffixMin[i] = min(s[i], suffixMin[i + 1]);
        }
        string st;
        string out;
        out.reserve(n);
        for (int i = 0; i < n; i++) {
            while (!st.empty() && st.back() <= suffixMin[i]) {
                out.push_back(st.back());
                st.pop_back();
            }
            st.push_back(s[i]);
        }
        while (!st.empty()) {
            out.push_back(st.back());
            st.pop_back();
        }
        return out;
    }
};
