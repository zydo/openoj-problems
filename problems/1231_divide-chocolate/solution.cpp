class Solution {
  public:
    int maximizeSweetness(vector<int> &sweetness, int k) {
        long long total = 0;
        for (int value : sweetness)
            total += value;

        long long lo = 1;
        long long hi = total / (k + 1);
        long long best = 0;
        while (lo <= hi) {
            long long mid = (lo + hi) / 2;
            if (piecesAtLeast(sweetness, mid) >= k + 1) {
                best = mid;
                lo = mid + 1;
            } else {
                hi = mid - 1;
            }
        }
        return (int)best;
    }

  private:
    int piecesAtLeast(vector<int> &sweetness, long long target) {
        int count = 0;
        long long current = 0;
        for (int value : sweetness) {
            current += value;
            if (current >= target) {
                count += 1;
                current = 0;
            }
        }
        return count;
    }
};
