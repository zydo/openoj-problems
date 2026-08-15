class Solution {
  public:
    int minJumps(vector<int> &arr) {
        int n = (int)arr.size();
        if (n == 1) {
            return 0;
        }
        unordered_map<int, vector<int>> indices;
        for (int i = 0; i < n; i++) {
            indices[arr[i]].push_back(i);
        }
        vector<int> dist(n, -1);
        dist[0] = 0;
        queue<int> pending;
        pending.push(0);
        while (!pending.empty()) {
            int i = pending.front();
            pending.pop();
            int d = dist[i] + 1;
            vector<int> nexts;
            nexts.push_back(i - 1);
            nexts.push_back(i + 1);
            auto held = indices.find(arr[i]);
            if (held != indices.end()) {
                for (int j : held->second) {
                    nexts.push_back(j);
                }
                indices.erase(held);
            }
            for (int j : nexts) {
                if (j >= 0 && j < n && dist[j] == -1) {
                    dist[j] = d;
                    if (j == n - 1) {
                        return d;
                    }
                    pending.push(j);
                }
            }
        }
        return dist[n - 1];
    }
};
