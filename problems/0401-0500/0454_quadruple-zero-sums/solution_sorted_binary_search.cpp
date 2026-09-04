class Solution {
  public:
    int countQuadrupleZeroSums(vector<int> &first, vector<int> &second, vector<int> &third, vector<int> &fourth) {
        // Same split as the hash-map version -- a+b+c+d = 0 iff a+b = -(c+d)
        // -- but the join is ordered ground rather than a table: materialise
        // both halves' pair sums and sort the right one.
        vector<int> left;
        left.reserve(first.size() * second.size());
        for (int a : first) {
            for (int b : second) {
                left.push_back(a + b);
            }
        }
        vector<int> right;
        right.reserve(third.size() * fourth.size());
        for (int c : third) {
            for (int d : fourth) {
                right.push_back(c + d);
            }
        }
        sort(right.begin(), right.end());
        // Each left sum asks "how many right sums equal my negation?"; on a
        // sorted array a pair of binary searches brackets exactly that run.
        // Counts can reach n^4 = 1.6e9, so the tally widens to 64 bits.
        long long total = 0;
        for (int sum : left) {
            int negated = -sum;
            auto lower = lower_bound(right.begin(), right.end(), negated);
            auto upper = upper_bound(right.begin(), right.end(), negated);
            total += upper - lower;
        }
        return (int)total;
    }
};
