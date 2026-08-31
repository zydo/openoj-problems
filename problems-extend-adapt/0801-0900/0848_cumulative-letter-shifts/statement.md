# Cumulative Letter Shifts

## Description

You are given a lowercase string `s` and an integer array `shifts` of the
same length. For each index `i`, advance the first `i + 1` letters of the
current string by `shifts[i]` positions in the alphabet. Alphabet movement
wraps around, so advancing `z` once produces `a`.

Return the string after every listed prefix operation has been applied.

### Example 1

```text
Input: s = "azby", shifts = [1,2,3,4]
Output: "kiic"
```

### Example 2

```text
Input: s = "mno", shifts = [26,1,25]
Output: "mnn"
```

### Example 3

```text
Input: s = "z", shifts = [52]
Output: "z"
```

### Constraints

- `s` contains from `1` to `10⁵` lowercase English letters.
- `shifts.length == s.length`.
- Each `shifts[i]` is in the inclusive range `0` through `10⁹`.
