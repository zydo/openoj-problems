class Solution {
  public:
    int carFleet(int target, vector<int> &position, vector<int> &speed) {
        int n = position.size();
        vector<int> idx(n);
        iota(idx.begin(), idx.end(), 0);
        sort(idx.begin(), idx.end(), [&](int a, int b) {
            if (position[a] != position[b]) {
                return position[a] > position[b];
            }
            return speed[a] > speed[b];
        });
        int fleets = 0;
        double lastTime = 0.0;
        for (int i : idx) {
            double time = (double)(target - position[i]) / speed[i];
            if (time > lastTime) {
                fleets++;
                lastTime = time;
            }
        }
        return fleets;
    }
};
