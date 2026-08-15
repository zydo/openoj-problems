class Solution {
  public:
    string smallestEquivalentString(string s1, string s2, string baseStr) {
        array<int, 26> parent;
        for (int i = 0; i < 26; i++) {
            parent[i] = i;
        }
        auto find = [&](int a) {
            while (parent[a] != a) {
                parent[a] = parent[parent[a]];
                a = parent[a];
            }
            return a;
        };
        for (size_t i = 0; i < s1.size(); i++) {
            int ra = find(s1[i] - 'a');
            int rb = find(s2[i] - 'a');
            if (ra != rb) {
                if (rb < ra) {
                    swap(ra, rb);
                }
                parent[rb] = ra;
            }
        }
        string out;
        out.reserve(baseStr.size());
        for (char c : baseStr) {
            out.push_back((char)('a' + find(c - 'a')));
        }
        return out;
    }
};
