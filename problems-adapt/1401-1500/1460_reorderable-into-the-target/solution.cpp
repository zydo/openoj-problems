#include <vector>

class Solution {
  public:
    bool reorderMatch(std::vector<int> &target, std::vector<int> &arr) {
        std::vector<int> counts(1001, 0);
        for (int value : target) {
            counts[value]++;
        }
        for (int value : arr) {
            counts[value]--;
        }
        for (int count : counts) {
            if (count != 0) {
                return false;
            }
        }
        return true;
    }
};
