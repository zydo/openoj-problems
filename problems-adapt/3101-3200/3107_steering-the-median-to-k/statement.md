# Steering the Median To K

## Description

An integer array `nums` and a non-negative target `k` are given. A
single move raises or lowers one element of the array by exactly 1;
moves may be applied any number of times, in either direction.

Your goal is for the array's median to land on `k`. The median means
the middle value of the array arranged in non-decreasing order, and
when the length is even — leaving two candidates for the middle — the
larger of the two candidates counts.

What is the fewest moves needed to reach that goal?

### Example 1

```text
Input: nums = [9,1,4,7], k = 5
Output: 2
Explanation: Ordered, the array reads [1,4,7,9]; the larger of the two
middle values is 7. Lowering it twice gives [9,1,4,5], whose median is
5 — two moves in total.
```

### Example 2

```text
Input: nums = [3,8,6,2,10], k = 9
Output: 4
Explanation: Ordered, the array reads [2,3,6,8,10] with median 6.
Raising the median to 9 costs 3 moves, and the value 8 to its right
must also climb one step to stop dragging the median down: 4 moves
overall.
```

### Example 3

```text
Input: nums = [5,5,5], k = 5
Output: 0
Explanation: The median already equals k, so no move is needed.
```

### Constraints

- `1 <= nums.length <= 2 * 10⁵`
- `1 <= nums[i] <= 10⁹`
- `1 <= k <= 10⁹`

## Hints

### Hint 1

Sort the array first: once ordered, the median occupies index `n // 2`
— the single middle when `n` is odd, the larger middle when `n` is
even, matching the definition above.

### Hint 2

Only wrongly-placed values need paying for. Any element left of the
median slot still above `k` must be pushed down to `k`, and any element
right of the slot still below `k` must be lifted to `k`; the rest can
stay where they are.

### Hint 3

Every unit of distance costs one move, so the answer is the sum of those
per-element distances — up to around 10¹⁴ at the limits, so accumulate
in a 64-bit type.
