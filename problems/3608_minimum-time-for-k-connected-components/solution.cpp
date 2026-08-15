class Solution {
  public:
    int minTime(int n, vector<vector<int>> &edges, int k) {
        vector<int> parent(n);
        for (int i = 0; i < n; i++)
            parent[i] = i;

        vector<vector<int>> ordered(edges);
        sort(ordered.begin(), ordered.end(),
             [](const vector<int> &a, const vector<int> &b) { return a[2] > b[2]; });

        int components = n;
        int answer = 0;
        int i = 0;
        int m = (int)ordered.size();
        while (i < m) {
            int t = ordered[i][2];
            if (components >= k)
                answer = t;
            while (i < m && ordered[i][2] == t) {
                if (uni(parent, ordered[i][0], ordered[i][1]))
                    components--;
                i++;
            }
        }
        if (components >= k)
            answer = 0;
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

    bool uni(vector<int> &parent, int a, int b) {
        int ra = find(parent, a), rb = find(parent, b);
        if (ra == rb)
            return false;
        parent[ra] = rb;
        return true;
    }
};
