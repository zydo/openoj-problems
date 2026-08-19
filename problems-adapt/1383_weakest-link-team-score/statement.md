# Weakest-Link Team Score

## Description

There are `n` candidates, each with a `speed` and an `efficiency`. You are
given the arrays `speed` and `efficiency`, both of length `n`, and a cap `k`.

Pick **at most** `k` of the candidates to form a team. Its score is

```text
(sum of the members' speeds) * (the smallest efficiency on the team)
```

Return the highest score any legal team can reach. The value grows quickly, so
report it **modulo** `10^9 + 7`.

### Example 1

```text
Input: n = 5, speed = [4,9,6,2,7], efficiency = [8,3,5,10,6], k = 2
Output: 66
Explanation: Pairing candidates 0 and 4 gives (4 + 7) * min(8, 6) = 66. The
pair with the larger speed total, 9 and 7, scores only 16 * 3 = 48 because the
slower of the two efficiencies drags it down.
```

### Example 2

```text
Input: n = 5, speed = [4,9,6,2,7], efficiency = [8,3,5,10,6], k = 5
Output: 95
Explanation: Every candidate is available, yet the best team leaves one out:
(4 + 6 + 2 + 7) * min(8, 5, 10, 6) = 19 * 5 = 95. Adding the speed-9 candidate
would reprice the whole team at efficiency 3 for 28 * 3 = 84 — worse.
```

### Example 3

```text
Input: n = 3, speed = [90000,80000,70000], efficiency = [100000000,99999999,5], k = 2
Output: 999711007
Explanation: (90000 + 80000) * 99999999 = 16999999830000, which is reported
modulo 10^9 + 7 as 999711007.
```

### Constraints

- `1 <= k <= n <= 10^5`
- `speed` and `efficiency` each have exactly `n` entries.
- `1 <= speed[i] <= 10^5`
- `1 <= efficiency[i] <= 10^8`

## Hints

### Hint 1

The minimum efficiency on the team couples everything. Sweep the candidates in
decreasing order of efficiency, and at each step let the current candidate be
the one setting that minimum — everyone already swept has efficiency at least
as high.

### Hint 2

While sweeping, hold the speeds of the chosen teammates in a min-heap and keep
at most `k` of them, evicting the slowest whenever the heap overflows. The
heap's sum times the current efficiency is then the best team this candidate
can anchor.

### Hint 3

Intermediates outrun both 32-bit and 64-bit ranges in some languages: multiply
with the widest integers available and take the modulus only when returning.
