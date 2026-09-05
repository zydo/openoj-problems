# Top-Scoring Splits of a Bit Array

## Description

You are given a binary array `nums` of length `n`, indexed from `0`. A split
at position `i` (where `0 <= i <= n`) cuts `nums` into a left part and a
right part:

- the left part holds the elements at indices `0` through `i - 1`, and the
  right part holds the elements at indices `i` through `n - 1`;
- splitting at `0` leaves the left part empty;
- splitting at `n` leaves the right part empty.

The split score of position `i` is the number of `0`s in the left part plus
the number of `1`s in the right part.

Return every position whose split score is maximal. Any order is accepted.

### Example 1

```text
Input: nums = [1,0,1,0]
Output: [0,2,4]
Explanation: The score of each split position is
- 0: left [], right [1,0,1,0]. Score 0 + 2 = 2.
- 1: left [1], right [0,1,0]. Score 0 + 1 = 1.
- 2: left [1,0], right [1,0]. Score 1 + 1 = 2.
- 3: left [1,0,1], right [0]. Score 1 + 0 = 1.
- 4: left [1,0,1,0], right []. Score 2 + 0 = 2.
The best score is 2, reached at positions 0, 2, and 4.
```

### Example 2

```text
Input: nums = [1,1,0]
Output: [0]
Explanation: Splitting before anything gives left [] and right [1,1,0] for
a score of 0 + 2 = 2. Every later cut either gives up a `1` from the right
or has not yet gained enough `0`s on the left, so position 0 alone is best.
```

### Example 3

```text
Input: nums = [0]
Output: [1]
Explanation: Cutting at 0 scores 0 + 0 = 0. Cutting at 1 puts the lone `0`
on the left, scoring 1 + 0 = 1 — the maximum.
```

### Constraints

- `n == nums.length`
- `1 <= n <= 10⁵`
- `nums[i]` is either `0` or `1`.

## Hints

### Hint 1

Sweep the cut from left to right while carrying counters for the `0`s and
`1`s already on the left. What is the cheapest way to know how many `1`s
remain on the right at each cut?

### Hint 2

The `1`s on the right are simply all the `1`s of the array minus the `1`s
the sweep has already passed — no second pass or per-cut recount needed.

### Hint 3

A prefix-sum array gives the same answer if you prefer tables over running
counters: zeros-left and ones-right are each one subtraction away.
