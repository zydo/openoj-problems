# K Picks from a Shrinking Pool

## Description

You start with a score of 0, an integer array `nums`, and a budget of
`k` moves. Each move:

- picks any index `i`, adds the current `nums[i]` to your score, and
- then replaces that entry with `ceil(nums[i] / 3)` — rounded up, so a
  value of 1 or 2 collapses to 1 and never shrinks further.

After performing exactly `k` moves, return the largest score reachable.

### Example 1

```text
Input: nums = [9,4,6], k = 3
Output: 19
Explanation: Take 9 first (it shrinks to 3), then 6 (shrinks to 2),
then 4. The score is 9 + 6 + 4 = 19.
```

### Example 2

```text
Input: nums = [8,8,8], k = 4
Output: 27
Explanation: Each 8 pays out 8 and drops to 3, so the first three
moves bank 24; the fourth move takes the surviving 3 for a total of 27.
```

### Example 3

```text
Input: nums = [1,2,3], k = 7
Output: 10
Explanation: The picks go 3, 2, then five 1's, since everything decays
to 1 and stays: 3 + 2 + 1 + 1 + 1 + 1 + 1 = 10.
```

### Constraints

- `1 <= nums.length, k <= 10⁵`
- `1 <= nums[i] <= 10⁹`

## Hints

### Hint 1

Skipping the current maximum never pays: anything smaller you take
instead would still be there next round, while the maximum only decays.
Always grab the largest value alive.

### Hint 2

A max-heap answers each "largest alive" query in `O(log n)`, and the
pulled value's replacement `ceil(v / 3)` goes straight back in.
