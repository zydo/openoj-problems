# Solutions — Digit Count in Range

## Digit Counting per Position

The answer is reduced to a prefix-count problem: define f(x) as the number of occurrences of digit d among the integers 1..x, so the range count is f(high) − f(low − 1). Only f needs real work, and it never iterates the range — it counts, for each digit position of x, how many numbers up to x have d at that position.

For a position i (from the most significant end), write x as high_part · 10^power + cur · 10^power + low_part, where cur is the digit at the position. The numbers with a smaller high part than x's can place anything at the lower positions, contributing high_part · power (or (high_part + 1) · power when cur > d, since the prefix equal to x's high part is also allowed with any low part). When cur == d, the prefix-equal case contributes only the suffixes up to low_part, an extra low_part + 1. When cur < d, the prefix-equal case contributes nothing. Summing over all positions counts every occurrence exactly once, including multiple occurrences of d inside the same integer.

The d = 0 branch is the careful part: leading zeros are not written, so the units position of single-digit numbers and any position where the high part is 0 are excluded. The code requires high_part ≥ 1, then for cur > 0 contributes high_part · power and for cur == 0 contributes (high_part − 1) · power + low_part + 1 — the −1 because a leading zero on the counted position is forbidden, forcing the effective prefix to start at 1. Both calls run in time proportional to the square of the digit length (each position does O(length) string slicing and conversion), which is microseconds for x ≤ 2·10^8.

**Complexity:** `O(log² high)` time, `O(log high)` space.
