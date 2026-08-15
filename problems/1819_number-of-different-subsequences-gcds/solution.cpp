class Solution {
  public:
    int countDifferentSubsequenceGCDs(vector<int> &nums) {
        int maxVal = 0;
        for (int v : nums) {
            if (v > maxVal)
                maxVal = v;
        }
        vector<char> present(maxVal + 1, 0);
        for (int v : nums)
            present[v] = 1;
        int count = 0;
        for (int g = 1; g <= maxVal; g++) {
            int running = 0;
            for (int multiple = g; multiple <= maxVal; multiple += g) {
                if (present[multiple]) {
                    running = gcdIter(running, multiple);
                    if (running == g) {
                        count++;
                        break;
                    }
                }
            }
        }
        return count;
    }

  private:
    static int gcdIter(int a, int b) {
        while (b != 0) {
            int t = a % b;
            a = b;
            b = t;
        }
        return a;
    }
};
