# Column Cuts for Sorted Rows II

## Description

You are given `strs`, an array of `n` strings that all share one length.
Stack the strings one per row to form a character grid; column `j` of the
grid collects the `j`-th character of every row. One cut deletes a chosen
column from every row simultaneously — for `strs = ["abcdef","uvwxyz"]`,
cutting columns `{0, 2, 3}` leaves `["bef", "vyz"]`.

A set of cuts is good when the surviving rows stand in non-descending
lexicographic order from top to bottom, that is
`strs[0] <= strs[1] <= ... <= strs[n - 1]` once each row is read as its
shortened word. Two clarifications: the original rows do not have to be
sorted among themselves, and a pair of equal rows is never a problem.

Return the smallest number of cuts in any good set.

### Example 1

```text
Input: strs = ["bd","ae","cf"]
Output: 1
Explanation: The first column drops between the top two rows (b > a), so
that column must be cut. What survives is ["d","e","f"], already in
lexicographic order — and with the original array out of order, one cut
is also the minimum.
```

### Example 2

```text
Input: strs = ["az","bx"]
Output: 0
Explanation: The rows are already in lexicographic order, so no cut is
needed. The rows themselves are not sorted — it is not true that
strs[0][0] <= strs[0][1] — but only the top-to-bottom reading matters.
```

### Example 3

```text
Input: strs = ["kk","kk","ka"]
Output: 1
Explanation: The first column holds k in every row, and the two equal rows
are fine. The last column falls between the second and third rows
(k > a), so it has to be cut.
```

### Example 4

```text
Input: strs = ["ed","ca"]
Output: 2
Explanation: The first column falls (e > c), and once it is removed the
remaining column also falls (d > a), so every column ends up cut.
```

### Constraints

- `n == strs.length`
- `1 <= n <= 100`
- `1 <= strs[i].length <= 100`
- `strs[i]` consists of lowercase English letters.
