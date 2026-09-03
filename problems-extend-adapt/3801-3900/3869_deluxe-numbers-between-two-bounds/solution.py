from bisect import bisect_right


class Solution:
    def countDeluxe(self, l: int, r: int) -> int:
        # Strictly increasing numbers draw digits from 1..9; strictly
        # decreasing ones from 0..9 with no leading zero. Enumerate every
        # nonempty digit subset once per direction and deduplicate.
        sleek_set = set()
        for mask in range(1, 1 << 9):
            num = 0
            for d in range(1, 10):
                if mask & (1 << (d - 1)):
                    num = num * 10 + d
            sleek_set.add(num)
        for mask in range(1, 1 << 10):
            num = 0
            for d in range(9, -1, -1):
                if mask & (1 << d):
                    num = num * 10 + d
            if num > 0:
                sleek_set.add(num)
        sleeks = sorted(sleek_set)

        # sleek[s] == 1 when the integer s itself is a strictly monotone
        # number; those are exactly the sleek digit sums (s in [1, 144]).
        sleek = [0] * 145
        for s in range(1, 145):
            if s in sleek_set:
                sleek[s] = 1

        def digit_sum(x: int) -> int:
            total = 0
            while x > 0:
                total += x % 10
                x //= 10
            return total

        # overlap[i]: among sleeks[:i], how many also have a sleek digit sum
        overlap = [0] * (len(sleeks) + 1)
        for i, g in enumerate(sleeks):
            overlap[i + 1] = overlap[i] + sleek[digit_sum(g)]

        def count_sleek_sum(x: int) -> int:
            # Numbers in [1, x] whose digit sum is a sleek sum.
            if x <= 0:
                return 0
            s = str(x)
            n = len(s)
            # ways[k][t]: k free digits (0-9, leading zeros allowed) summing
            # to exactly t. Counts reach ~10^15, so Python ints carry them.
            ways = [[0] * 145 for _ in range(n + 1)]
            ways[0][0] = 1
            for k in range(1, n + 1):
                prev = ways[k - 1]
                row = ways[k]
                for t in range(145):
                    total = 0
                    for d in range(10):
                        if t >= d:
                            total += prev[t - d]
                    row[t] = total

            def count_free(k: int, base: int) -> int:
                # The remaining k digits add s_, making the digit sum
                # base + s_; it must land on a sleek sum.
                result = 0
                for s_ in range(min(9 * k, 144 - base) + 1):
                    if sleek[base + s_]:
                        result += ways[k][s_]
                return result

            result = 0
            running = 0
            for i, ch in enumerate(s):
                v = int(ch)
                k = n - i - 1
                # A smaller digit here fixes the prefix; the tail is free.
                for d in range(v):
                    result += count_free(k, running + d)
                running += v
            if sleek[running]:
                result += 1
            return result

        def count_sleek(x: int) -> int:
            return bisect_right(sleeks, x)

        def count_overlap(x: int) -> int:
            return overlap[bisect_right(sleeks, x)]

        def count_deluxe(x: int) -> int:
            # Deluxe = sleek digits OR sleek digit sum; subtract the sleeks
            # whose digit sum is also sleek (counted by both terms).
            return count_sleek_sum(x) + count_sleek(x) - count_overlap(x)

        return count_deluxe(r) - count_deluxe(l - 1)
