# Longest Two-Case Substring

## Description

A string is two-case when every distinct letter it contains shows up
in both of its casings: for each lowercase letter that occurs, the
matching uppercase letter occurs too, and the other way around. For
instance, `"bBDd"` is two-case because both `b`/`B` and `d`/`D` appear,
while `"bBc"` is not — `c` occurs but `C` never does.

Given a string `s`, find its longest substring that is two-case. If
several substrings share the longest length, take the one that starts
leftmost. When no non-empty substring qualifies, return the empty
string.

### Example 1

```text
Input: s = "dDc"
Output: "dD"
Explanation: The trailing `c` has no uppercase partner, so the best
two-case window is "dD" at the front.
```

### Example 2

```text
Input: s = "eEfFgG"
Output: "eEfFgG"
Explanation: Every letter that appears does so in both casings, so the
whole string already qualifies.
```

### Example 3

```text
Input: s = "h"
Output: ""
Explanation: A lone letter cannot meet its partner anywhere, so no
non-empty substring is two-case.
```

### Constraints

- `1 <= s.length <= 100`
- `s` consists of English letters in both upper and lower case.

## Hints

### Hint 1

Any letter whose opposite-case partner is absent from the entire
string spoils every window that contains it, no matter what else is
in the window.

### Hint 2

With at most 100 characters, it is perfectly viable to examine the
candidate windows directly, or to cut the string at those spoiling
letters and solve each remaining piece.
