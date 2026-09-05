# Charging Through Every Lock II

## Description

`n` locks stand between you and the way out. Lock `i` gives way only once
the blade working on it has stored at least `strength[i]` energy.

The blade charges on a one-minute clock. It starts out holding `0` energy
with charge factor `x = 1`, and every minute it banks another `x` energy.
The moment the stored energy reaches the next lock's requirement, that
lock breaks; the blade then dumps everything it holds back to `0`, and
its charge factor rises by exactly `1` before the next minute ticks.

The factor only ever grows, so the order you attack the locks in changes
the total bill. Return the fewest minutes in which all `n` locks can be
broken.

### Example 1

```text
Input: strength = [6,2,9]
Output: 8
Explanation: Break the lock needing 2 first — two minutes at factor 1.
The factor then rises to 2 and the lock needing 6 falls after three
more; at factor 3 the last lock needs three minutes. That bills
2 + 3 + 3 = 8, and nothing cheaper exists.
```

### Example 2

```text
Input: strength = [1,1000000]
Output: 500001
Explanation: One minute clears the trivial lock, and the resulting
factor of 2 halves the enormous one — 500000 minutes more, 500001 in
all. Breaking the heavy lock first would cost 1000001.
```

### Example 3

```text
Input: strength = [8,20,5,14]
Output: 19
Explanation: Attacking in rising order 5, 8, 14, 20 bills 5 minutes at
factor 1, then 4, 5, and 5 minutes at factors 2, 3, and 4 — 19 in all.
```

### Constraints

- `1 <= n == strength.length <= 80`
- `1 <= strength[i] <= 10⁶`

## Hints

### Hint 1

Whatever the order, the `k`-th lock broken is always charged at factor
`k`, so an order's total is a sum of `ceil(strength[i] / k)` terms.
Pairing every lock with the slot that minimizes the grand total is a
minimum-cost perfect matching — the Hungarian algorithm settles `n <= 80`
in `O(n³)`.
