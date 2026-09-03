class Solution {
  public:
    vector<int> lampsStillLit(vector<int> &lamps) {
        // Toggle a fixed table indexed by lamp number; a lamp ends on exactly when
        // it is toggled an odd number of times. Sweep indices 1..100 and collect
        // the on positions — ascending order for free.
        vector<bool> on(101, false);
        for (int value : lamps) {
            on[value] = !on[value];
        }
        vector<int> result;
        for (int i = 1; i <= 100; i++) {
            if (on[i]) {
                result.push_back(i);
            }
        }
        return result;
    }
};
