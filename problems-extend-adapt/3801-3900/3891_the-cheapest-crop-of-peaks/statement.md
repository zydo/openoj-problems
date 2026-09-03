# The Cheapest Crop of Peaks

## Description

You are given an integer array `nums` of length `n`. An interior index `i`
(with `0 < i < n - 1`) is a peak when `nums[i]` is strictly larger than both
of its neighbours.

The only move available is choosing any index and adding `1` to that one
element, and a move may be applied to the same index repeatedly.

First make the number of peaks as large as it can be, then spend as few
moves as possible while keeping that largest number. Return the minimum
number of moves.

### Example 1

```text
Input: nums = [3,3,3]
Output: 1
Explanation: With three elements only the middle index can ever be a
peak, so one raise — [3,4,3] — already achieves the maximum of 1.
```

### Example 2

```text
Input: nums = [4,2,4,2,4]
Output: 6
Explanation: Peaks can never sit next to each other, so the best crop is
indices 1 and 3. Each starts at 2 and must clear 5 to top its two 4s,
costing 3 raises apiece — 6 in total.
```

### Example 3

```text
Input: nums = [1,5,3,5,1]
Output: 0
Explanation: Indices 1 and 3 already tower over their neighbours, which
is the largest count five slots can hold, so nothing needs to change.
```

### Constraints

- `3 <= n <= 10⁵`
- `1 <= nums[i] <= 10⁹`

## Hints

### Hint 1

Raising a cell is the only way to turn it into a peak — a raise spent on a
neighbour only pushes that peak's target higher.

### Hint 2

Two chosen peaks can never be adjacent, so the task becomes a weighted
independent set over the interior positions: maximize how many are chosen,
then minimize the raises they consume.

### Hint 3

Sweep left to right carrying two (count, cost) pairs — best with the
current slot chosen, best with it skipped — and compare them
lexicographically.
