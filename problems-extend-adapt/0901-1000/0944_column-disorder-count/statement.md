# Column Disorder Count

## Description

You receive `strs`, a list of equal-length strings. Lay the strings out as
rows of a character grid. A column is in order when its letters never decrease
as you read from the first row down to the last; equal neighboring letters are
allowed.

Discard every column that is not in order, and return how many columns must be
discarded. Each column is judged independently of all others.

### Example 1

```text
Input: strs = ["az","bz","cz"]
Output: 0
Explanation: The first column runs a, b, c and the second repeats z three
times; nothing ever drops, so no column is discarded.
```

### Example 2

```text
Input: strs = ["abz","aay","acx"]
Output: 2
Explanation: The first column is ordered, but the second contains b then a,
and the third falls from z to y, so two columns are discarded.
```

### Constraints

- `1 <= strs.length <= 100`
- `1 <= strs[i].length <= 1000`
- `strs[i]` consists of lowercase English letters.
