# Cuts That Keep The Pattern

## Description

You are given a string `source` of length n, a string `pattern` that occurs
inside `source` as a subsequence, and a sorted array `targetIndices` of
distinct positions, each in the range [0, n - 1].

A cut deletes one character of `source`, and it is legal only when:

- the deleted position appears in `targetIndices`, and
- after the deletion, `pattern` still occurs in `source` as a subsequence.

Positions are fixed to the original string — a cut never renumbers the
survivors. Deleting the 'c' from "acb" still leaves 'b' at index 2.

Report the largest number of legal cuts that can be made.

### Example 1

```text
Input: source = "xyxyx", pattern = "xy", targetIndices = [0,2,4]
Output: 2
Explanation:
The cuts at indices 2 and 4 are both legal: they leave "xyy", which still
carries "xy". A third cut is impossible — every 'x' would be gone, and the
pattern needs one.
```

### Example 2

```text
Input: source = "aabb", pattern = "ab", targetIndices = [0,1]
Output: 1
Explanation:
Cutting both targets would erase every 'a', so they cannot both go; cutting
either single one leaves "abb", where "ab" survives.
```

### Example 3

```text
Input: source = "aa", pattern = "aa", targetIndices = [0,1]
Output: 0
Explanation:
Both characters are needed to spell the pattern, so no cut is legal.
```

### Constraints

- `1 <= n == source.length <= 3 * 10³`
- `1 <= pattern.length <= n`
- `1 <= targetIndices.length <= n`
- `targetIndices` is sorted in ascending order.
- `targetIndices` holds distinct values, all within [0, n - 1].
- `source` and `pattern` contain only lowercase English letters.
- `pattern` is guaranteed to occur in `source` as a subsequence.

## Hints

### Hint 1

Match the pattern greedily position by position is not enough on its own —
think about carrying state across the scan of `source`.

### Hint 2

Dynamic programming over pattern-prefix lengths works: every position of
`source` either joins the current match or it does not, and positions listed
in `targetIndices` add a bonus option to disappear.
