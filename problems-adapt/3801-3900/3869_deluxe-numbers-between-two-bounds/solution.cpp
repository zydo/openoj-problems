#include <algorithm>
#include <string>
#include <vector>

using namespace std;

class Solution {
  public:
    long long countDeluxe(long long l, long long r) {
        // Strictly increasing numbers draw digits from 1..9; strictly
        // decreasing ones from 0..9 with no leading zero. Enumerate every
        // nonempty digit subset once per direction and deduplicate.
        vector<long long> sleeks;
        for (int mask = 1; mask < (1 << 9); mask++) {
            long long num = 0;
            for (int d = 1; d <= 9; d++) {
                if (mask & (1 << (d - 1)))
                    num = num * 10 + d;
            }
            sleeks.push_back(num);
        }
        for (int mask = 1; mask < (1 << 10); mask++) {
            long long num = 0;
            for (int d = 9; d >= 0; d--) {
                if (mask & (1 << d))
                    num = num * 10 + d;
            }
            if (num > 0)
                sleeks.push_back(num);
        }
        sort(sleeks.begin(), sleeks.end());
        sleeks.erase(unique(sleeks.begin(), sleeks.end()), sleeks.end());

        // sleek[s] == 1 when the integer s is itself strictly monotone;
        // those are exactly the sleek digit sums (s in [1, 144]).
        vector<int> sleek(145, 0);
        for (long long g : sleeks) {
            if (g <= 144)
                sleek[(int)g] = 1;
        }

        // overlap[i]: among sleeks[0..i), how many also have a sleek digit sum
        vector<long long> overlap(sleeks.size() + 1, 0);
        for (size_t i = 0; i < sleeks.size(); i++) {
            overlap[i + 1] = overlap[i] + sleek[digitSum(sleeks[i])];
        }

        return countUpTo(r, sleeks, sleek, overlap) - countUpTo(l - 1, sleeks, sleek, overlap);
    }

  private:
    int digitSum(long long n) {
        int s = 0;
        while (n > 0) {
            s += n % 10;
            n /= 10;
        }
        return s;
    }

    long long countUpTo(long long x, const vector<long long> &sleeks, const vector<int> &sleek,
                        const vector<long long> &overlap) {
        // Deluxe = sleek digits OR sleek digit sum; subtract the sleeks whose
        // digit sum is also sleek (counted by both terms).
        return countSleekSum(x, sleek) + countSleek(x, sleeks) - countOverlap(x, sleeks, overlap);
    }

    long long countSleek(long long x, const vector<long long> &sleeks) {
        return upper_bound(sleeks.begin(), sleeks.end(), x) - sleeks.begin();
    }

    long long countOverlap(long long x, const vector<long long> &sleeks, const vector<long long> &overlap) {
        return overlap[countSleek(x, sleeks)];
    }

    long long countSleekSum(long long x, const vector<int> &sleek) {
        // Numbers in [1, x] whose digit sum is a sleek sum.
        if (x <= 0)
            return 0;
        string s = to_string(x);
        int n = s.size();
        // ways[k][t]: k free digits (0-9, leading zeros allowed) summing to
        // exactly t. Counts reach ~10^15, past 32 bits, so the table is
        // long long.
        vector<vector<long long>> ways(n + 1, vector<long long>(145, 0));
        ways[0][0] = 1;
        for (int k = 1; k <= n; k++) {
            for (int t = 0; t <= 144; t++) {
                long long total = 0;
                for (int d = 0; d <= 9; d++) {
                    if (t >= d)
                        total += ways[k - 1][t - d];
                }
                ways[k][t] = total;
            }
        }
        long long result = 0;
        int running = 0;
        for (int i = 0; i < n; i++) {
            int v = s[i] - '0';
            int k = n - i - 1;
            // A smaller digit here fixes the prefix; the tail is free.
            for (int d = 0; d < v; d++) {
                int base = running + d;
                int limit = min(9 * k, 144 - base);
                for (int rem = 0; rem <= limit; rem++) {
                    if (sleek[base + rem])
                        result += ways[k][rem];
                }
            }
            running += v;
        }
        if (sleek[running])
            result += 1;
        return result;
    }
};
