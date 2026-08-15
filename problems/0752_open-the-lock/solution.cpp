class Solution {
  public:
    int openLock(vector<string> &deadends, string target) {
        unordered_set<string> dead(deadends.begin(), deadends.end());
        string start = "0000";
        if (dead.count(start))
            return -1;
        unordered_set<string> seen;
        seen.insert(start);
        queue<pair<string, int>> q;
        q.push({start, 0});
        while (!q.empty()) {
            auto [state, steps] = q.front();
            q.pop();
            if (state == target)
                return steps;
            for (int i = 0; i < 4; i++) {
                for (int delta : {1, -1}) {
                    int digit = ((state[i] - '0') + delta + 10) % 10;
                    string nxt = state;
                    nxt[i] = (char)('0' + digit);
                    if (!seen.count(nxt) && !dead.count(nxt)) {
                        seen.insert(nxt);
                        q.push({nxt, steps + 1});
                    }
                }
            }
        }
        return -1;
    }
};
