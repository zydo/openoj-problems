#include <vector>

using namespace std;

class Solution {
  public:
    int minTailSwaps(vector<int> &nums) {
        int zeros = 0;
        for (int value : nums)
            if (value == 0)
                ++zeros;
        int prefixLength = (int)nums.size() - zeros;
        int answer = 0;
        for (int i = 0; i < prefixLength; ++i)
            if (nums[i] == 0)
                ++answer;
        return answer;
    }
};
