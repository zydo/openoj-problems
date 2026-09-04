class BalanceReader;

class Solution {
  public:
    int heavierHalf(BalanceReader &balanceReader) {
        // Divide and conquer: compare two equal-length halves of the
        // current range and recurse into whichever sums higher — the
        // large entry inflates exactly one side. An odd-length range
        // peels off its middle element first; a tied comparison of the
        // remaining equal-length halves means that peeled element is the
        // large one.
        return solve(balanceReader, 0, balanceReader.length() - 1);
    }

  private:
    int solve(BalanceReader &balanceReader, int l, int r) {
        if (l == r) {
            return l;
        }
        int length = r - l + 1;
        int mid = (l + r) / 2;
        if (length % 2 == 0) {
            int cmp = balanceReader.compareSub(l, mid, mid + 1, r);
            return cmp > 0 ? solve(balanceReader, l, mid) : solve(balanceReader, mid + 1, r);
        }
        int cmp = balanceReader.compareSub(l, mid - 1, mid + 1, r);
        if (cmp == 0) {
            return mid;
        }
        return cmp > 0 ? solve(balanceReader, l, mid - 1) : solve(balanceReader, mid + 1, r);
    }
};
