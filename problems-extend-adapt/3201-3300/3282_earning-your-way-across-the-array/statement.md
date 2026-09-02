# Earning Your Way Across The Array

## Description

Picture an integer array `nums` of length `n` laid out as stepping
stones. You begin on stone `0` and want to finish on stone `n - 1`,
moving only forward — every hop must land on a strictly larger index
than the one you leave.

Each hop is paid for at its takeoff: leaping from index `i` to index `j`
earns `(j - i) * nums[i]` points, the distance travelled multiplied by
the value you jumped from.

Chase the biggest possible payday: return the largest total score that
can be accumulated by the time the last index is reached.

### Example 1

```text
Input: nums = [2, 4, 1, 6, 3]
Output: 16
Explanation: Hop 0 -> 1 (earning 1 * 2 = 2), then 1 -> 3 (earning
2 * 4 = 8), then 3 -> 4 (earning 1 * 6 = 6). The hops collect
2 + 8 + 6 = 16 points in all.
```

### Example 2

```text
Input: nums = [5, 1, 2, 2]
Output: 15
Explanation: Nothing after index 0 beats 5, so the best move is one long
leap from index 0 straight to index 3, banking 3 * 5 = 15 points.
```

### Constraints

- `1 <= nums.length <= 10⁵`
- `1 <= nums[i] <= 10⁵`

## Hints

### Hint 1

There is a fixed shape to the best route: standing on index `i`, hop to
the closest index `j > i` whose value `nums[j]` exceeds `nums[i]` — and
when no such index exists, hop all the way to the last index.
