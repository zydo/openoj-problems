class Solution {
  public:
    int minimumLimitedRouteCost(int nodeCount, vector<vector<int>> &links, int source, int target, int maxIntermediates) {
        vector<vector<pair<int, int>>> graph(nodeCount);
        for (const auto &link : links) {
            graph[link[0]].push_back({link[1], link[2]});
        }
        // State = (cost, node, links taken). Carrying the count in the
        // state is what enforces the limit: a state that already used its
        // maxIntermediates+1 links is never allowed to board another.
        priority_queue<tuple<int, int, int>, vector<tuple<int, int, int>>, greater<tuple<int, int, int>>> heap;
        heap.emplace(0, source, 0);
        vector<int> best(nodeCount, INT_MAX);
        while (!heap.empty()) {
            auto [cost, node, edges] = heap.top();
            heap.pop();
            // The heap pops in cost order, so the first target pop is final.
            if (node == target) {
                return cost;
            }
            // Dominance prune: a cheaper state that used no more links was
            // already expanded here, so this one cannot lead anywhere new.
            if (edges > best[node]) {
                continue;
            }
            best[node] = edges;
            if (edges < maxIntermediates + 1) {
                for (const auto &[nxt, weight] : graph[node]) {
                    heap.emplace(cost + weight, nxt, edges + 1);
                }
            }
        }
        return -1;
    }
};
