class Solution {
  public:
    int canCompleteCircuit(vector<int> &gas, vector<int> &cost) {
        long long total = 0;
        long long tank = 0;
        int start = 0;
        for (int i = 0; i < (int)gas.size(); i++) {
            long long diff = (long long)gas[i] - cost[i];
            total += diff;
            tank += diff;
            if (tank < 0) {
                start = i + 1;
                tank = 0;
            }
        }
        return total >= 0 ? start : -1;
    }
};
