class Solution {
  public:
    int countArrivalGroups(int destination, vector<int> &starts, vector<int> &velocities) {
        int n = starts.size();
        // Cars cannot pass each other, so sweep from the car nearest
        // the destination backward.
        vector<int> idx(n);
        iota(idx.begin(), idx.end(), 0);
        sort(idx.begin(), idx.end(), [&](int a, int b) {
            if (starts[a] != starts[b]) {
                return starts[a] > starts[b];
            }
            return velocities[a] > velocities[b];
        });
        int fleets = 0;
        double lastTime = 0.0;
        for (int i : idx) {
            // A car's fate is its alone-time to the destination.
            double time = (double)(destination - starts[i]) / velocities[i];
            // Strictly later never catches the fleet ahead: a new
            // fleet lead. Otherwise it merges (equality at the destination
            // merges), and lastTime — the current fleet's arrival
            // time — stays put.
            if (time > lastTime) {
                fleets++;
                lastTime = time;
            }
        }
        return fleets;
    }
};
