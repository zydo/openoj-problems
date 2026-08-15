class Solution {
  public:
    int kConcatenationMaxSum(vector<int> &arr, int k) {
        const long long MOD = 1000000007LL;
        long long total = 0;
        for (int value : arr)
            total += value;

        if (k == 1) {
            return (int)(kadane(arr, 1) % MOD);
        }
        long long best = kadane(arr, 2);
        if (k > 2 && total > 0) {
            best = max(best, maxSuffix(arr) + maxPrefix(arr) + (long long)(k - 2) * total);
        }
        return (int)(best % MOD);
    }

  private:
    long long kadane(vector<int> &arr, int copies) {
        long long best = 0, current = 0;
        for (int c = 0; c < copies; c++) {
            for (int value : arr) {
                current = max(current + value, 0LL);
                best = max(best, current);
            }
        }
        return best;
    }

    long long maxPrefix(vector<int> &arr) {
        long long best = 0, current = 0;
        for (int value : arr) {
            current += value;
            best = max(best, current);
        }
        return best;
    }

    long long maxSuffix(vector<int> &arr) {
        long long best = 0, current = 0;
        for (int i = (int)arr.size() - 1; i >= 0; i--) {
            current += arr[i];
            best = max(best, current);
        }
        return best;
    }
};
