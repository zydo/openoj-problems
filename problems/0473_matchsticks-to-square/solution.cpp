class Solution {
  public:
    bool makesquare(vector<int> &matchsticks) {
        long long total = 0;
        for (int v : matchsticks)
            total += v;
        if (total % 4 != 0)
            return false;
        long long side = total / 4;
        vector<long long> sticks(matchsticks.begin(), matchsticks.end());
        sort(sticks.rbegin(), sticks.rend());
        if (sticks.empty() || sticks[0] > side)
            return false;
        vector<long long> sides(4, 0);
        return dfs(sticks, sides, side, 0);
    }

  private:
    bool dfs(vector<long long> &sticks, vector<long long> &sides, long long side, int i) {
        if (i == (int)sticks.size()) {
            return sides[0] == side && sides[1] == side && sides[2] == side && sides[3] == side;
        }
        long long value = sticks[i];
        long long tried[4];
        int triedCount = 0;
        for (int j = 0; j < 4; j++) {
            bool dup = false;
            for (int t = 0; t < triedCount; t++) {
                if (tried[t] == sides[j]) {
                    dup = true;
                    break;
                }
            }
            if (dup)
                continue;
            tried[triedCount++] = sides[j];
            if (sides[j] + value <= side) {
                sides[j] += value;
                if (dfs(sticks, sides, side, i + 1))
                    return true;
                sides[j] -= value;
            }
        }
        return false;
    }
};
