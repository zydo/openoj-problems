# Longest Duplicated Slice

## Description

A _slice_ of `s` is a run of consecutive characters. Report how long the longest
slice can be while still starting at two or more distinct positions of `s`.

The two starting positions are otherwise unrestricted, so the appearances are
allowed to overlap. If no slice at all manages this, report `0`.

### Example 1

```text
Input: s = "flux"
Output: 0
Explanation: All four characters differ, so even a one-character slice occurs
only once.
```

### Example 2

```text
Input: s = "banana"
Output: 3
Explanation: The slice "ana" begins at positions 1 and 3. Those two appearances
share the character at position 3, which the rules permit. Nothing four
characters long doubles up.
```

### Example 3

```text
Input: s = "mississippi"
Output: 4
Explanation: "issi" begins at positions 1 and 4.
```

### Constraints

- `1 <= s.length <= 2000`
- Every character of `s` is a lowercase English letter

## Hints

### Hint 1

Turn the question into a yes-or-no one: _is there any slice of length `L` that
occurs twice?_ Trim a character off the end of both appearances and you have the
same fact for `L - 1`, so the lengths that answer yes are exactly `0` through
the answer.

### Hint 2

Downward-closed means the boundary can be located by binary search, and you only
have to answer the yes-or-no probe about `log n` times.

### Hint 3

One probe is a duplicate hunt among the `n - L + 1` windows of length `L`. Feed
them to a hash set and stop at the first window you have already stored —
overlap being legal is what lets you take every window without skipping any.
