# Fewest Window Flips

## Description

`nums` holds only zeros and ones, and `k` is a positive length. One _window
flip_ picks `k` neighbouring positions of `nums` and inverts all of them at
once — each `0` there turns into a `1` and each `1` into a `0`. The window has
to lie entirely inside the array.

Return the smallest number of window flips that leaves `nums` free of zeros,
or `-1` when no sequence of flips achieves that.

### Example 1

```text
Input: nums = [1,0,1,1,0], k = 1
Output: 2
Explanation: A window of length 1 inverts a single position, so the two zeros
cost one flip each and nothing else is disturbed.
```

### Example 2

```text
Input: nums = [0,1,1,1], k = 3
Output: -1
Explanation: The zero at the front can only be repaired by the window covering
positions 0, 1, 2, which leaves [1,0,0,1]. Repairing position 1 the same way
gives [1,1,1,0], and the trailing zero now needs a window of three positions
where only one remains.
```

### Example 3

```text
Input: nums = [0,1,1,0,1,0,0,0], k = 3
Output: 3
Explanation:
Invert positions 0..2:  [1,0,0,0,1,0,0,0]
Invert positions 1..3:  [1,1,1,1,1,0,0,0]
Invert positions 5..7:  [1,1,1,1,1,1,1,1]
```

### Constraints

- `nums` has between `1` and `10^5` entries, each of them `0` or `1`.
- `k` is at least `1` and at most the length of `nums`.

## Hints

### Hint 1

Look at the first position that still reads `0` during a left-to-right sweep.
Every window that covers it and starts earlier would disturb positions already
settled, so the window starting exactly there is the only move available — the
sweep never has a real choice to make.

### Hint 2

Rewriting `k` entries per flip is too slow. What a position actually needs is
the _parity_ of the flips whose windows still cover it: its current value is
`nums[i]` XOR that parity.

### Hint 3

Keep the parity in one variable and store expiries in a side array — when a
window opens at `i`, mark index `i + k` so that entering that index toggles the
parity back off. A window forced open at `i` with `i + k` beyond the array is
the impossible case.
