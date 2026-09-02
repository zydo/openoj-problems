# The Best Folded-XOR Window

## Description

An array `nums` of `n` integers and a list of `q` ranges `queries`, where
`queries[i] = [li, ri]`, are given. Folding a window means running this
reduction until a single value remains:

- every element except the last simultaneously becomes its XOR with the
  element to its right;
- the last element is then dropped.

The one surviving value is the window's fold. Each query asks for the
largest fold reached by any window lying entirely inside
`nums[li..ri]`. Return an array holding one answer per query.

### Example 1

```text
Input: nums = [5,2,8,1], queries = [[0,1],[2,3],[0,3]]
Output: [7,9,14]
Explanation:
- Range [0,1]: window [5, 2] folds to 7.
- Range [2,3]: window [8, 1] folds to 9.
- Range [0,3]: the whole array folds to 14 — one round gives
  [7, 10, 9], the next [13, 3], the last [14].
```

### Example 2

```text
Input: nums = [6,1,4,9], queries = [[1,3],[0,2],[0,3]]
Output: [13,7,13]
Explanation: Inside [1,3] the best window is [4, 9] with fold 13;
inside [0,2] it is [6, 1] with fold 7; [4, 9] wins again for [0,3].
```

### Example 3

```text
Input: nums = [10], queries = [[0,0]]
Output: [10]
Explanation: The only window is [10], whose fold is 10 itself.
```

### Constraints

- `1 <= n == nums.length <= 2000`
- `0 <= nums[i] <= 2³¹ - 1`
- `1 <= q == queries.length <= 10⁵`
- `queries[i].length == 2`
- `queries[i] = [li, ri]`
- `0 <= li <= ri <= n - 1`

## Hints

### Hint 1

Work out the fold of every window once, before reading any query.

### Hint 2

Compare the folds of `nums[i..j]`, `nums[i..j+1]`, `nums[i..j+2]`, …:
one round of folding `nums[i..j]` produces exactly the window one row
below, so a two-term recurrence falls out.

### Hint 3

With `fold[i][j]` the fold of `nums[i..j]`, `fold[i][j] =
fold[i-1][j] ^ fold[i-1][j+1]`; a second running-maximum table over the
same rows then answers every query with a single lookup.
