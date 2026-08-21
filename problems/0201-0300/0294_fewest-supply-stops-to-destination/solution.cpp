class Solution {
  public:
    int minimumSupplyStops(int destination, int initialRange, vector<vector<int>> &supplies) {
        long long fuel = initialRange;
        priority_queue<long long> available; // max-heap of fuels at supplies passed
        int stops = 0;
        size_t i = 0;
        size_t n = supplies.size();
        while (true) {
            if (fuel >= destination) {
                return stops;
            }
            while (i < n && supplies[i][0] <= fuel) {
                available.push(supplies[i][1]);
                i++;
            }
            if (available.empty()) {
                return -1;
            }
            fuel += available.top();
            available.pop();
            stops++;
        }
    }
};
