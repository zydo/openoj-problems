# Where the Needle First Sits

## Description

You are given two strings, `haystack` and `needle`. Report the
smallest index at which `needle` appears inside `haystack` as a
contiguous block. If `needle` never appears in `haystack`, report
`-1` instead.

### Example 1

```text
Input: haystack = "buttercup", needle = "cup"
Output: 6
Explanation: The letters c, u, p occupy positions 6 through 8, so 6
is where the needle first sits.
```

### Example 2

```text
Input: haystack = "garden", needle = "gate"
Output: -1
Explanation: No starting position in "garden" yields "gate", so the
needle is not present.
```

### Example 3

```text
Input: haystack = "echo", needle = "echo"
Output: 0
Explanation: When the two strings are identical, the needle sits at
the very front.
```

### Constraints

- `1 <= haystack.length, needle.length <= 10⁴`
- `haystack` and `needle` consist of only lowercase English letters.
