class Solution {
  public:
    vector<bool> distanceLimitedPathsExist(int n, vector<vector<int>> &edgeList,
                                           vector<vector<int>> &queries) {
        vector<int> parent(n);
        for (int i = 0; i < n; i++) {
            parent[i] = i;
        }
        vector<vector<int>> edges = edgeList;
        sort(edges.begin(), edges.end(),
             [](const vector<int> &a, const vector<int> &b) { return a[2] < b[2]; });
        vector<int> order(queries.size());
        for (int i = 0; i < (int)order.size(); i++) {
            order[i] = i;
        }
        sort(order.begin(), order.end(),
             [&](int a, int b) { return queries[a][2] < queries[b][2]; });
        vector<bool> answer(queries.size(), false);
        int ei = 0;
        for (int qi : order) {
            int p = queries[qi][0];
            int q = queries[qi][1];
            int limit = queries[qi][2];
            while (ei < (int)edges.size() && edges[ei][2] < limit) {
                int ra = find(parent, edges[ei][0]);
                int rb = find(parent, edges[ei][1]);
                if (ra != rb) {
                    parent[ra] = rb;
                }
                ei++;
            }
            answer[qi] = find(parent, p) == find(parent, q);
        }
        return answer;
    }

  private:
    int find(vector<int> &parent, int x) {
        while (parent[x] != x) {
            parent[x] = parent[parent[x]];
            x = parent[x];
        }
        return x;
    }
};
