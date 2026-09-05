# Earliest String Awakening

## Description

You are handed a string `s` of length `n` together with an array `order`
that lists each index from `0` to `n - 1` exactly once.

Moments are numbered from `t = 0` onward. At moment `t`, the character
sitting at position `order[t]` of `s` is swapped out for `'*'`, and every
swap is permanent.

A substring counts as starred once it contains at least one `'*'`. The
string is awake from the first moment at which the number of starred
substrings is `k` or more.

Return that earliest moment. If no amount of starring ever gets the count
up to `k`, return `-1`.

### Example 1

```text
Input: s = "flow", order = [2,0,3,1], k = 7
Output: 1
Explanation: Moment 0 stars index 2, turning s into "fl*w"; 6 of the 10
substrings are starred. Moment 1 also stars index 0, giving "*l*w", and the
count climbs to 8, which clears k = 7. The answer is 1.
```

### Example 2

```text
Input: s = "gold", order = [3,1,0,2], k = 9
Output: 2
Explanation: The string walks through "gol*", "g*l*", and "**l*", whose
starred-substring counts are 4, 8, and 9. The target k = 9 is first met at
moment 2, when only the lone "l" still lacks a star.
```

### Example 3

```text
Input: s = "be", order = [0,1], k = 5
Output: -1
Explanation: Two characters produce only three substrings in total, so no
number of swaps can ever raise the starred count to k = 5.
```

### Constraints

- `1 <= n == s.length <= 10⁵`
- `order.length == n`
- `0 <= order[i] <= n - 1`
- `s` contains only lowercase English letters.
- `order` holds every integer from `0` to `n - 1` exactly once.
- `1 <= k <= 10⁹`

## Hints

### Hint 1

A substring that has gained a star keeps it forever, so the starred count
never drops as moments pass. Feasibility is therefore monotone in `t`,
which is an invitation to binary-search for the first feasible moment.

### Hint 2

To evaluate a candidate moment, star the first `t + 1` entries of `order`
and subtract from `n(n + 1) / 2` the `L(L + 1) / 2` unstarred substrings
hidden inside each maximal star-free run of length `L`; comparing the
remainder with `k` settles the probe.
