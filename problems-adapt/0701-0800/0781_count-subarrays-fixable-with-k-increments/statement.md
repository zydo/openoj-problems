# Count Subarrays Fixable With K Increments

## Description

You are given an array `nums` of `n` integers and an integer `k`.

Treat each subarray on its own. Inside one subarray you may take up to `k`
steps, where a step picks any element of that subarray and increases it by
`1`. Steps spent on one subarray leave every other subarray untouched.

A subarray counts when at most `k` steps can bring it into non-decreasing
order — no element smaller than the one before it. Return the number of
subarrays that count.

### Example 1

```text
Input: nums = [7,4,2,3,5,5], k = 8
Output: 18
Explanation: The array has 21 subarrays. Three of them start at index 0 —
[7,4,2,3,5,5], [7,4,2,3,5], [7,4,2,3] — and none can be repaired within 8
steps, since dragging 4, 2 and 3 up to 7 alone already costs more than 8.
Every other subarray can, so the answer is 21 - 3 = 18.
```

### Example 2

```text
Input: nums = [9,7,5,3], k = 12
Output: 10
Explanation: The whole array is the worst case: raising 7, 5 and 3 up to 9
costs 2 + 4 + 6 = 12, exactly the budget, so all 10 subarrays count.
```

### Example 3

```text
Input: nums = [4,1,3,1,5], k = 3
Output: 12
Explanation: 15 subarrays exist. The three that start at the 4 and reach the
3 — [4,1,3], [4,1,3,1] and [4,1,3,1,5] — need more than 3 lifts, since
raising 1 and 3 to 4 already costs 4.
```

### Constraints

- `1 <= nums.length <= 10⁵`
- `1 <= nums[i] <= 10⁹`
- `1 <= k <= 10⁹`

## Hints

### Hint 1

With only `+1` steps available, the cheapest repair of a stretch lifts each
element exactly up to the largest value seen to its left. Price a subarray by
that total lift.

### Hint 2

Pin the left end and walk the right end outward: the lift total never comes
back down, so each left end has a farthest reachable right end, and counting
subarrays becomes counting that reach.

### Hint 3

Sweep the left end right-to-left and keep the lift total incrementally in a
monotonic stack of running-maximum plateaus — each element then enters and
leaves the accounting once.
