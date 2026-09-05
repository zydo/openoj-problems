# Shared Opening Run

## Description

You are given an array of strings. Find the longest opening run they all
share: read every string from its first character, position by position,
and collect the characters that agree across the whole array. The run ends
at the first position where some string carries a different character or
has no character left at all. Return the collected run, or the empty
string `""` if the strings agree on nothing from the very first character.

### Example 1

```text
Input: strs = ["gather", "garden", "garlic"]
Output: "ga"
```

### Example 2

```text
Input: strs = ["trace", "track", "tractor", "tradition"]
Output: "tra"
```

### Example 3

```text
Input: strs = ["lime", "knot", "fig"]
Output: ""
Explanation: The three strings disagree at the first position, so the
shared opening run is empty.
```

### Constraints

- `1 <= strs.length <= 200`
- `0 <= strs[i].length <= 200`
- Every `strs[i]` consists only of lowercase English letters, and may be
  empty.
