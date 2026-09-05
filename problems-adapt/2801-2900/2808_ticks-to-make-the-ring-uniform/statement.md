# Ticks To Make The Ring Uniform

## Description

An array `nums` of `n` integers (0-indexed) is laid out on a ring: the spot
after the last element is the first one again.

Time moves in discrete ticks. During every tick, all positions update at
once — each index `i` may keep its current value `nums[i]`, adopt the value
from its counterclockwise neighbor `nums[(i - 1 + n) % n]`, or adopt the
value from its clockwise neighbor `nums[(i + 1) % n]`.

Find the smallest number of ticks after which every position of the ring
holds the same value.

### Example 1

```text
Input: nums = [4,9,4]
Output: 1
Explanation: The 9 sits between two 4s, so after one tick it can adopt 4
from either side and the ring reads [4,4,4]. Zero ticks cannot work since
the array does not start uniform.
```

### Example 2

```text
Input: nums = [1,2,3]
Output: 1
Explanation: Settling on the middle value finishes in a single tick: the
first position borrows its neighbor's 2 and the last position borrows its
neighbor's 2, leaving [2,2,2].
```

### Example 3

```text
Input: nums = [10,1,1,1,10,2]
Output: 2
Explanation: One tick cannot suffice — the trailing 2 has no equal-valued
neighbor to copy whichever value it joins. Two ticks do suffice: after the
first tick the ring can read [1,1,1,1,1,10], and the last cell then copies
its neighbor's 1.
```

### Constraints

- `1 <= n == nums.length <= 10⁵`
- `1 <= nums[i] <= 10⁹`

## Hints

### Hint 1

Ask the question separately for each candidate final value `x`: how many
ticks does it take to repaint the whole ring with `x`?

### Hint 2

For two neighboring occurrences of `x` at positions `i` and `j`, every cell
strictly between them needs the ticks to spread from the nearer end, which
is floor((j - i) / 2). The pair wrapping around the ring's seam counts the
same way.

### Hint 3

So for each `x` the cost is half the largest empty arc between consecutive
occurrences of `x`, rounded down; the answer is the cheapest `x`.
