# Best Order for Positive Prefixes

## Description

You are handed an integer array `nums`, and you may put its elements in
whichever order you like — the given order included. Once reshuffled,
form the running totals of the new arrangement: `prefix[i]` is the sum
of its first `i + 1` elements. The score of the arrangement is the
number of entries of `prefix` that are strictly positive.

Return the largest score reachable over all possible orderings.

### Example 1

```text
Input: nums = [2,0,-1,4,-3]
Output: 5
Explanation: Order the array as [4,2,0,-1,-3]. The running totals are
[4,6,6,5,2], all five of which are positive, so the score is 5. No
ordering can do better.
```

### Example 2

```text
Input: nums = [3,2,-1,-6]
Output: 3
Explanation: Ordering the array as [3,2,-1,-6] yields running totals
[3,5,4,-2]; exactly the first three are positive. The total can be kept
positive through three prefixes at most.
```

### Example 3

```text
Input: nums = [-3,0,-1]
Output: 0
Explanation: Every ordering here produces no positive running total at
all — for instance [0,-1,-3] totals [0,-1,-4] — so the best score is 0.
```

### Constraints

- `1 <= nums.length <= 10⁵`
- `-10⁶ <= nums[i] <= 10⁶`

## Hints

### Hint 1

The strongest ordering starts with the biggest values.

### Hint 2

Sort `nums` in decreasing order, accumulate a running total, and count
how many of those totals stay strictly positive.
