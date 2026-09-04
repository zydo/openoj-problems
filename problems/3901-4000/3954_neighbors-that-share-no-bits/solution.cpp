#include <algorithm>
using namespace std;
class Solution {
  public:
    int sumDisjointNeighbors(int n, int k) {
        int s = 0;
        for (int x = max(1, n - k); x <= n + k; x++)
            if (!(n & x))
                s += x;
        return s;
    }
};
