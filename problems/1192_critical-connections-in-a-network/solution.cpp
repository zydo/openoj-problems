class Solution {
    int timerVal;
    vector<int> discArr, lowArr;
    vector<vector<int>> graphArr;
    vector<vector<int>> bridgesArr;

    void dfs(int u, int parent) {
        discArr[u] = lowArr[u] = timerVal++;
        for (int v : graphArr[u]) {
            if (discArr[v] == -1) {
                dfs(v, u);
                lowArr[u] = min(lowArr[u], lowArr[v]);
                if (lowArr[v] > discArr[u]) {
                    bridgesArr.push_back({min(u, v), max(u, v)});
                }
            } else if (v != parent) {
                lowArr[u] = min(lowArr[u], discArr[v]);
            }
        }
    }

  public:
    vector<vector<int>> criticalConnections(int n, vector<vector<int>> &connections) {
        graphArr.assign(n, {});
        for (auto &e : connections) {
            graphArr[e[0]].push_back(e[1]);
            graphArr[e[1]].push_back(e[0]);
        }
        discArr.assign(n, -1);
        lowArr.assign(n, 0);
        timerVal = 0;
        bridgesArr.clear();
        dfs(0, -1);
        sort(bridgesArr.begin(), bridgesArr.end());
        return bridgesArr;
    }
};
