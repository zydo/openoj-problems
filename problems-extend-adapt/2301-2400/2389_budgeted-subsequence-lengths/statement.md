# Budgeted Subsequence Lengths

## Description

Two integer arrays arrive together: `nums` of length `n`, and `queries`
of length `m`. For every budget `queries[i]`, work out the largest
number of elements a subsequence of `nums` can contain while its total
stays at or under that budget, and collect the `m` answers — in query
order — into one array.

A subsequence keeps the relative order of whichever elements it keeps;
since you are free to skip elements, any selection qualifies.

### Example 1

```text
Input: nums = [7,2,9,4], queries = [5,13,31]
Output: [1,3,4]
Explanation: Sorted values 2,4,7,9 accumulate as 2,6,13,22. A budget of
5 affords only [2]; 13 affords [2,4,7]; 31 affords all four elements.
```

### Example 2

```text
Input: nums = [3,6,1,1,9], queries = [2,5,20]
Output: [2,3,5]
Explanation: Budget 2 covers [1,1]; budget 5 covers [1,1,3]; budget 20
covers the entire array, whose sum is exactly 20.
```

### Example 3

```text
Input: nums = [4], queries = [3,4,9]
Output: [0,1,1]
Explanation: A budget of 3 is too small to take the lone element, so the
empty subsequence of length 0 is the best there; from 4 upward the
element itself fits.
```

### Constraints

- `n == nums.length` and `m == queries.length`
- `1 <= n, m <= 1000`
- `1 <= nums[i], queries[i] <= 10⁶`

## Hints

### Hint 1

Handle every budget on its own; the queries never interact.

### Hint 2

To stretch a subsequence as far as a fixed sum allows, which elements of
`nums` deserve to be picked first?

### Hint 3

Grab the smallest values until the running total would pass the budget —
sorting once and scanning prefix sums, with a binary search per query,
answers everything quickly.
