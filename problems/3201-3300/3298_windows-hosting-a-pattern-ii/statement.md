# Windows That Can Host A Pattern II

## Description

You are given two lowercase strings, `word1` and `word2`.

A window of `word1` — some contiguous slice of it — qualifies if its
characters can be reordered so the reordered text starts with `word2`.
Reordering moves letters around without creating any, so the qualifying
condition is purely about letter counts: the window must supply every
letter `word2` uses, at least as often as `word2` uses it.

Count the qualifying windows of `word1`. Windows at different index
ranges are counted as different even if they read identically.

The input sizes here are an order of magnitude larger than in the first
version, and the tight memory budget only leaves room for a solution
that runs in linear time.

### Example 1

```text
Input: word1 = "cbbac", word2 = "abc"
Output: 4
Explanation: Four windows contain at least one of each of a, b and c —
"cbba", "cbbac", "bbac" and "bac" — and each of them reshuffles into
text beginning with "abc".
```

### Example 2

```text
Input: word1 = "aabb", word2 = "ab"
Output: 4
Explanation: The hosts are "aab", "aabb", the "ab" at indices 2..3 and
"abb" — every one of them covers one a and one b.
```

### Example 3

```text
Input: word1 = "abc", word2 = "aabb"
Output: 0
Explanation: `word2` calls for two b's and no window of `word1` holds
two.
```

### Constraints

- `1 <= word1.length <= 10⁶`
- `1 <= word2.length <= 10⁴`
- Both strings consist only of lowercase English letters.

## Hints

### Hint 1

Treat the pattern as a multiset: a window qualifies exactly when its own
letter multiset contains `word2`'s, so track only 26 counters plus a
tally of how many required letters are still unmet.

### Hint 2

Walk the left end across `word1` and stretch the right end only
forward, stopping the moment the window first qualifies — everything
from there to the far end qualifies too and adds `n - r` windows at
once. The right end never retreats, which is what keeps the sweep
linear.
