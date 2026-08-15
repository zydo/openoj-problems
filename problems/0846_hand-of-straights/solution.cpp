class Solution {
  public:
    bool isNStraightHand(vector<int> &hand, int groupSize) {
        if ((int)hand.size() % groupSize != 0) {
            return false;
        }
        map<int, long long> counts;
        for (int v : hand) {
            counts[v]++;
        }
        while (!counts.empty()) {
            auto it = counts.begin();
            int value = it->first;
            long long need = it->second;
            for (int nv = value; nv < value + groupSize; nv++) {
                auto found = counts.find(nv);
                long long have = (found == counts.end()) ? 0 : found->second;
                if (have < need) {
                    return false;
                }
                if (have == need) {
                    counts.erase(nv);
                } else {
                    counts[nv] = have - need;
                }
            }
        }
        return true;
    }
};
