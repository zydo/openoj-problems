# Score From Row Maxima

## Description

You are given a 0-indexed matrix of integers `nums`, and a score that starts
at 0. Play rounds until the matrix has no numbers left. One round works like
this:

1. Every row surrenders its largest remaining number. If several candidates
   within a row tie for largest, any of them may go.
2. Look at everything the rows surrendered in this round and take the
   biggest value among them; add it to the score.

Return the score once the matrix is empty.

### Example 1

```text
Input: nums = [[9,1],[2,8],[5,5],[7,3]]
Output: 14
Explanation: Round one collects 9, 8, 5, and 7, and 9 joins the score.
Round two collects 1, 2, 5, and 3, and 5 joins the score. The total is
9 + 5 = 14.
```

### Example 2

```text
Input: nums = [[4]]
Output: 4
Explanation: A single-cell matrix empties after one round that is worth 4.
```

### Example 3

```text
Input: nums = [[5,1,9],[7],[8,2]]
Output: 15
Explanation: The rows shrink at different speeds. Round one collects 9, 7,
and 8 (worth 9); round two collects 5 and 2 from the two rows that still
have numbers (worth 5); round three collects the last 1 (worth 1). The
total is 9 + 5 + 1 = 15.
```

### Example 4

```text
Input: nums = [[10,3,8],[6,10,2]]
Output: 21
Explanation: Sorted, the rows read [10,8,3] and [10,6,2]. The rounds are
worth 10, 8, and 3, so the score is 21.
```

### Constraints

- `1 <= nums.length <= 300`
- `1 <= nums[i].length <= 500`
- `0 <= nums[i][j] <= 10³`

## Hints

### Hint 1

Arrange every row in decreasing order. From then on, the number a row
surrenders in round `k` is simply its `k`-th entry.

### Hint 2

The score is therefore the sum, over all rounds, of the largest value
appearing in that position across the rows — the column maxima of the
rearranged matrix.
