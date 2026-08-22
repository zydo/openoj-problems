# Cheapest Gathering of K Ones

## Description

A binary array `nums` of length `n` represents a strip of cells, each
holding `0` or `1`. You are also given a positive integer `k` and a
non-negative integer `maxFlips`.

A collector has to gather `k` ones while spending as few moves as
possible. It first picks any cell `at` in `[0, n - 1]` to stand on — no
move is charged for this. If that cell holds a `1`, the collector takes
it immediately and the cell becomes `0`. Afterwards, every move is
exactly one of these:

- **Flip.** Choose any cell `j != at` holding `0` and turn it into `1`.
  At most `maxFlips` flips may happen in the whole game.
- **Slide.** Choose neighboring cells `x`, `y` (`|x - y| == 1`) where
  `nums[x] == 1` and `nums[y] == 0`, and shift the one from `x` into
  `y`. If `y == at`, the collector takes that one and `y` becomes `0`.

Return the least number of moves the collector needs to gather exactly
`k` ones.

### Example 1

```text
Input: nums = [1,0,1,1,0,0,1], k = 3, maxFlips = 0
Output: 3
Explanation: With no flips available, stand at index 2 and take its one
for free. Slide the one at index 3 into 2 (one move), then slide the one
at index 0 through 1 into 2 (two moves). Three moves gather three ones;
standing anywhere else costs more walking.
```

### Example 2

```text
Input: nums = [1,0,0,0,0,0,1], k = 2, maxFlips = 1
Output: 2
Explanation: Stand at index 0 and take its one for free. The other real
one sits six cells away, but a manufactured one is cheaper: flip index 1
(one move) and slide it into 0 (one move). Two moves gather the second
one.
```

### Example 3

```text
Input: nums = [0,0,0,0,0,0], k = 3, maxFlips = 3
Output: 6
Explanation: The strip has no real ones at all, so every gathered one is
manufactured: flip a neighbor of the standing cell and slide it in, two
moves apiece, for a total of six.
```

### Constraints

- `2 <= n <= 10⁵`
- `0 <= nums[i] <= 1`
- `1 <= k <= 10⁵`
- `0 <= maxFlips <= 10⁵`
- `maxFlips + sum(nums) >= k`

## Hints

### Hint 1

A manufactured one always costs exactly two moves — the flip beside the
standing cell plus the slide onto it — so apart from ones already sitting
next to the standing cell, flipping tends to beat walking.

### Hint 2

Among the real ones, the cheapest `t` to walk in are `t` consecutive ones
in the sorted list of one-positions, and for a fixed group the total
walking cost is smallest when standing at the group's median.

### Hint 3

Only the indices where `nums[i] == 1` matter for the walking part;
prefix sums over those positions price any candidate group in constant
time.
