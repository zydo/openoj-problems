# Soonest Tick To Stamp Every Slot II

## Description

You are given two 1-indexed integer arrays: `nums`, covering `n` slots, and
`changeIndices`, covering `m` ticks.

No slot is stamped at the start, and the goal is to stamp all `n` slots.

The clock runs through the ticks `s = 1, 2, …, m` in order. On each tick you
perform exactly one of these moves:

- pick a slot `i` in `[1, n]` and lower `nums[i]` by one;
- overwrite `nums[changeIndices[s]]` with any non-negative value;
- stamp a slot `i` whose `nums[i]` is currently zero;
- let the tick pass unused.

Return the soonest tick in `[1, m]` by which every slot can be stamped when
the moves are chosen optimally, or `-1` if stamping everything by tick `m`
cannot be done.

### Example 1

```text
Input: nums = [2,2], changeIndices = [1,2,1,2]
Output: 4
Explanation: The reset chances land on tick 1 for slot 1 and tick 2 for slot 2, one per slot. Overwrite both slots with zero on those ticks, then spend ticks 3 and 4 stamping them. Finishing by tick 3 is impossible: two slots need two stamp ticks, leaving a single tick to bring both values to zero.
```

### Example 2

```text
Input: nums = [5,1,2], changeIndices = [3,1,2,3,2,1,3,3,1,2]
Output: 6
Explanation: Overwrite slot 3 with zero on tick 1 and slot 1 on tick 2, then spend tick 3 lowering slot 2, whose value is already 1, to zero. Ticks 4, 5, and 6 stamp the three slots. The two overwrites trade the long decrement chains of slots 1 and 3 for single ticks, and no schedule beats six.
```

### Example 3

```text
Input: nums = [1,2], changeIndices = [1,2]
Output: -1
Explanation: Even spending tick 1 zeroing slot 1 and tick 2 zeroing slot 2 leaves no tick left to stamp anything, so every schedule falls short. Hence the answer is -1.
```

### Constraints

- `1 <= n == nums.length <= 5000`
- `0 <= nums[i] <= 10⁹`
- `1 <= m == changeIndices.length <= 5000`
- `1 <= changeIndices[i] <= n`

## Hints

### Hint 1

Stamping `n` slots needs at least `n` ticks, and pure decrement play always
finishes within `sum(nums[i]) + n` ticks, so the interesting horizons live
inside that window.

### Hint 2

Being able to finish by tick `t` only gets easier as `t` grows, so the
answer can be binary-searched over `[1, m]`.

### Hint 3

An overwrite move only pays when the slot it hits holds a value of at least
two, when it writes zero, and when it fires at the first occurrence of that
slot within `changeIndices[1..t]` — a later occurrence only postpones the
stamp that must follow the overwrite.

### Hint 4

Put `time_needed = sum(nums[i]) + n`. Checking a horizon `t` asks whether
overwrites can shrink `time_needed` down to `t` or less.

### Hint 5

An overwrite on slot `changeIndices[i]` at its first occurrence, with a
stamp reserved after it, swaps the slot's whole decrement chain for one
tick, cutting `time_needed` by `nums[changeIndices[i]] - 1`. The task is to
choose overwrites so this cut is as large as possible.

### Hint 6

Sweep first occurrences from tick `t` downwards, tentatively banking each
candidate overwrite worth `nums[changeIndices[i]] - 1`; the stamps after any
deadline `f` must fit in the ticks that deadline leaves once the chosen
overwrites at or after `f` take theirs, capping the chosen count by half the
window. Whenever a cap breaks, drop the banked overwrite with the smallest
saving — a min-priority queue does this in one pass.

### Hint 7

The answer is the first `t` in `[1, m]` for which the shrunk `time_needed`
fits, or `-1` when no horizon succeeds.
