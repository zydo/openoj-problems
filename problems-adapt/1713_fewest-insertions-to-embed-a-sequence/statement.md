# Fewest Insertions to Embed a Sequence

## Description

You are given an array `target` of distinct integers and an array `arr`, which
may repeat values.

In one step you may insert any integer at any position of `arr` — before the
first element, between two neighbours, or after the last.

Return the fewest steps needed until `target` appears in `arr` as a
subsequence, that is, until the elements of `target` can be read off `arr` in
order, possibly with other elements between them.

### Example 1

```text
Input: target = [3,7,1,9], arr = [7,1,1,4,9]
Output: 1
Explanation: 7, 1 and 9 already appear in arr in the right order, so one
insertion suffices — put 3 in front to get [3,7,1,1,4,9] and read 3, 7, 1, 9.
```

### Example 2

```text
Input: target = [4,8,15], arr = [4,1,8,15]
Output: 0
Explanation: Skipping the 1, the values 4, 8, 15 are already in order, so
nothing needs inserting.
```

### Example 3

```text
Input: target = [5,2,8], arr = [2,2,8]
Output: 1
Explanation: arr offers two 2s, but a subsequence may use only one of them.
Inserting the 5 in front gives [5,2,2,8], from which 5, 2, 8 can be read.
```

### Constraints

- `1 <= target.length, arr.length <= 10⁵`
- `1 <= target[i], arr[i] <= 10⁹`
- `target` has no repeated values.

## Hints

### Hint 1

What you insert and what you keep are two sides of one ledger: elements of
`target` that `arr` already carries in the right order can stay, and every
other element of `target` needs exactly one insertion. So the answer is a
length difference involving the longest part you can keep.

### Hint 2

Computing that kept part in general is a longest-common-subsequence problem,
which is quadratic — unless one side has no repeats. `target` has none, so a
value fixes a position: number the elements of `target` by position and
rewrite the matching elements of `arr` as those positions.

### Hint 3

In the rewritten `arr`, a usable kept part is exactly a strictly increasing
run of positions, and the longest one can be found with patience sorting in
`O(n log n)`. Strictly — two occurrences of the same `target` value carry the
same position, and only one of them may serve.
