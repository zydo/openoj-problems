class Solution {
    int N;
    vector<int> pref, suf, best, segLen;
    string leftChar, rightChar, chars;

    void pull(int node) {
        int l = 2 * node, r = 2 * node + 1;
        segLen[node] = segLen[l] + segLen[r];
        leftChar[node] = leftChar[l];
        rightChar[node] = rightChar[r];
        if (pref[l] == segLen[l] && leftChar[l] == leftChar[r]) {
            pref[node] = pref[l] + pref[r];
        } else {
            pref[node] = pref[l];
        }
        if (suf[r] == segLen[r] && rightChar[r] == rightChar[l]) {
            suf[node] = suf[r] + suf[l];
        } else {
            suf[node] = suf[r];
        }
        int joined = rightChar[l] == leftChar[r] ? suf[l] + pref[r] : 0;
        best[node] = max({best[l], best[r], joined});
    }

    void build(int node, int lo, int hi) {
        if (lo == hi) {
            pref[node] = suf[node] = best[node] = 1;
            segLen[node] = 1;
            leftChar[node] = rightChar[node] = chars[lo];
            return;
        }
        int mid = (lo + hi) / 2;
        build(2 * node, lo, mid);
        build(2 * node + 1, mid + 1, hi);
        pull(node);
    }

    void update(int node, int lo, int hi, int pos, char ch) {
        if (lo == hi) {
            chars[pos] = ch;
            leftChar[node] = rightChar[node] = ch;
            return;
        }
        int mid = (lo + hi) / 2;
        if (pos <= mid) {
            update(2 * node, lo, mid, pos, ch);
        } else {
            update(2 * node + 1, mid + 1, hi, pos, ch);
        }
        pull(node);
    }

  public:
    vector<int> longestRepeating(string s, string queryCharacters, vector<int> &queryIndices) {
        int n = (int)s.size();
        if (n == 0)
            return {};
        N = 4 * n;
        pref.assign(N, 0);
        suf.assign(N, 0);
        best.assign(N, 0);
        segLen.assign(N, 0);
        leftChar.assign(N, ' ');
        rightChar.assign(N, ' ');
        chars = s;

        build(1, 0, n - 1);
        vector<int> result;
        result.reserve(queryIndices.size());
        for (size_t i = 0; i < queryIndices.size(); i++) {
            update(1, 0, n - 1, queryIndices[i], queryCharacters[i]);
            result.push_back(best[1]);
        }
        return result;
    }
};
