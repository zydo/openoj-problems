# Longest Scattered Palindrome Within k Letter Shifts

## Description

You are given a string `s` and an integer `k`.

One operation nudges a single character of your choice to a neighboring
letter: either the next one or the previous one. The alphabet is circular,
so stepping forward from `'z'` lands on `'a'`, and stepping back from `'a'`
lands on `'z'`. Operations may hit the same character repeatedly, and each
one spends one unit of the budget.

Spend at most `k` operations, then take a subsequence of the resulting
string. Return the length of the longest subsequence that reads the same
in both directions.

### Example 1

```text
Input: s = "zma", k = 1
Output: 3
Explanation: 'z' and 'a' are circular neighbors — one backward step turns
the trailing 'a' into 'z' — so a single operation makes the string "zmz",
and the middle character needs no edit at all.
```

### Example 2

```text
Input: s = "acfed", k = 2
Output: 4
Explanation: Work on the last four characters "cfed": one step turns the
leading 'c' into 'd', another turns the 'f' into 'e', leaving "deed". The
leading 'a' sits outside the palindrome.
```

### Example 3

```text
Input: s = "bbbaaa", k = 3
Output: 6
Explanation: Every 'b'/'a' pair is one step apart, and the string pairs
each 'b' with an 'a'. Three forward steps convert it to "aaaaaa", so the
whole string reads the same both ways.
```

### Constraints

- `1 <= s.length <= 200`
- `1 <= k <= 200`
- `s` consists of lowercase English letters

## Hints

### Hint 1

Only equality within a chosen pair of positions ever matters, and the
cheapest route to equality between two letters is the shorter way around
the circular alphabet — which sometimes crosses the `'z'`/`'a'` boundary.

### Hint 2

Over a substring, the two end characters either take no part in the
palindrome or serve together as its outermost pair.

### Hint 3

Add a budget dimension to the usual substring palindrome recurrence: drop
an end for free, or pair the ends by paying their circular distance and
recursing with that much less budget.
