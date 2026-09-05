class Solution {
  public:
    int fewestTransitLines(vector<vector<int>> &lines, int startStop, int endStop) {
        // Early exits: same stop needs no line; an endpoint on no route
        // has no path.
        if (startStop == endStop) {
            return 0;
        }
        // Map each stop to the lines passing through it.
        unordered_map<int, vector<int>> stopToRoutes;
        for (int r = 0; r < (int)lines.size(); r++) {
            for (int s : lines[r]) {
                stopToRoutes[s].push_back(r);
            }
        }
        if (stopToRoutes.find(startStop) == stopToRoutes.end() || stopToRoutes.find(endStop) == stopToRoutes.end()) {
            return -1;
        }
        unordered_set<int> usedRoutes;
        unordered_set<int> seenStops;
        seenStops.insert(startStop);
        deque<pair<int, int>> queue;
        queue.push_back({startStop, 0});
        while (!queue.empty()) {
            auto [stop, rides] = queue.front();
            queue.pop_front();
            auto it = stopToRoutes.find(stop);
            if (it == stopToRoutes.end()) {
                continue;
            }
            for (int r : it->second) {
                // BFS over stops: boarding a route reaches all its
                // stops one level deeper. Expand each route only once
                // ever — re-boarding can only revisit stops already
                // found at an equal or smaller ride count.
                if (usedRoutes.count(r)) {
                    continue;
                }
                usedRoutes.insert(r);
                for (int nxt : lines[r]) {
                    // The endStop is counted on sight — no need to
                    // enqueue it.
                    if (nxt == endStop) {
                        return rides + 1;
                    }
                    if (!seenStops.count(nxt)) {
                        seenStops.insert(nxt);
                        queue.push_back({nxt, rides + 1});
                    }
                }
            }
        }
        return -1;
    }
};
