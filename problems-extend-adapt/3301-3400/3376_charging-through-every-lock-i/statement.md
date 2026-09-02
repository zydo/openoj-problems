# Charging Through Every Lock I

## Description

`n` locks stand between you and the way out, and lock `i` gives way only
once the blade working on it has stored at least `strength[i]` energy.

The blade charges on a one-minute clock. It starts out holding `0`
energy with charge factor `x = 1`, and every minute it banks another `x`
energy. The instant its stored energy reaches `strength[i]`, lock `i`
breaks; the blade then dumps all stored energy back to `0` and its
charge factor grows by `k` for every lock that follows.

Since the factor only grows, the order you attack the locks in changes
the total bill. Return the fewest minutes in which all `n` locks can be
broken.

### Example 1

```text
Input: strength = [5,3], k = 2
Output: 5
Explanation: Take the lock needing 3 first: three minutes at factor 1.
The factor then rises to 3, and the lock needing 5 falls after two more
minutes — 5 minutes in all.
```

### Example 2

```text
Input: strength = [8,6,12], k = 3
Output: 10
Explanation: Breaking in the order 6, 8, 12 costs 6 minutes at factor
1, then 2 minutes at factor 4, then 2 minutes at factor 7 — 10 total.
```

### Example 3

```text
Input: strength = [9,1,5,3], k = 2
Output: 5
Explanation: Clear the cheap locks 1 and 3 first to raise the factor
cheaply, then spend 2 minutes on the 9 and one more on the 5.
```

### Constraints

- `1 <= n == strength.length <= 8`
- `1 <= strength[i] <= 10⁶`
- `1 <= k <= 10`

## Hints

### Hint 1

There are at most `8!` orders, so trying permutations outright already
fits. Cheaper: after breaking any `j` locks the factor is pinned at
`1 + j*k`, so only the _set_ of broken locks matters — a bitmask DP over
subsets settles it in `O(2^n · n)`.
