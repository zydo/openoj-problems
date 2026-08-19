class Solution {
  public:
    int minimumLimitedRouteCost(int nodeCount, vector<vector<int>> &links, int source, int target, int maxIntermediates) {
        const int INF = INT_MAX / 2;
        // After r full rounds, dist[v] is the cheapest cost using at
        // most r edges; maxIntermediates internal nodes allow maxIntermediates+1 links, so run maxIntermediates+1 rounds.
        vector<int> dist(nodeCount, INF);
        dist[source] = 0;
        for (int i = 0; i < maxIntermediates + 1; i++) {
            // Relax from a frozen copy: writing in place would chain
            // several edges inside one round and exceed the stop limit.
            vector<int> ndist = dist;
            bool changed = false;
            for (const auto &link : links) {
                int f = link[0], t = link[1], weight = link[2];
                if (dist[f] + weight < ndist[t]) {
                    ndist[t] = dist[f] + weight;
                    changed = true;
                }
            }
            dist = ndist;
            // A round that changed nothing never improves later rounds.
            if (!changed)
                break;
        }
        // Positive weights need no negative-cycle handling; a
        // surviving infinity means the destination is unreachable
        // within the allowance.
        return dist[target] >= INF ? -1 : dist[target];
    }
};
