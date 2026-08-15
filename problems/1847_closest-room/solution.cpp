class Solution {
  public:
    vector<int> closestRoom(vector<vector<int>> &rooms, vector<vector<int>> &queries) {
        int n = (int)rooms.size();
        int q = (int)queries.size();
        vector<int> roomsBySize(n);
        for (int i = 0; i < n; i++) {
            roomsBySize[i] = i;
        }
        sort(roomsBySize.begin(), roomsBySize.end(),
             [&](int a, int b) { return rooms[a][1] > rooms[b][1]; });
        vector<int> queryOrder(q);
        for (int j = 0; j < q; j++) {
            queryOrder[j] = j;
        }
        sort(queryOrder.begin(), queryOrder.end(),
             [&](int a, int b) { return queries[a][1] > queries[b][1]; });
        set<int> ids;
        vector<int> answers(q);
        int ri = 0;
        for (int j : queryOrder) {
            int preferred = queries[j][0];
            int minSize = queries[j][1];
            while (ri < n && rooms[roomsBySize[ri]][1] >= minSize) {
                ids.insert(rooms[roomsBySize[ri]][0]);
                ri++;
            }
            auto it = ids.lower_bound(preferred);
            int best = -1;
            long long bestDist = LLONG_MAX;
            if (it != ids.begin()) {
                best = *prev(it);
                bestDist = (long long)preferred - best;
            }
            if (it != ids.end() && (long long)*it - preferred < bestDist) {
                best = *it;
            }
            answers[j] = best;
        }
        return answers;
    }
};
