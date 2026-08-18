class Solution {
  public:
    int countQuadrupleZeroSums(vector<int> &first, vector<int> &second, vector<int> &third,
                     vector<int> &fourth) {
        // Meet in the middle: a+b+c+d = 0 iff a+b = -(c+d), so index the
        // first two arrays' pair sums with multiplicities (not a set).
        unordered_map<int, int> sums;
        sums.reserve(first.size() * second.size() * 2);
        for (int a : first) {
            for (int b : second) {
                sums[a + b]++;
            }
        }
        int total = 0;
        // Each (c,d) pair adds the number of (a,b) pairs summing to its
        // negation; every zero tuple is counted once via its unique split.
        for (int c : third) {
            for (int d : fourth) {
                auto it = sums.find(-(c + d));
                if (it != sums.end())
                    total += it->second;
            }
        }
        return total;
    }
};
