# Soonest Tick To Stamp Every Slot I

## Description

You are given two 1-indexed integer arrays: `nums`, holding a value for each
of `n` slots, and `changeIndices`, listing `m` ticks.

No slot is stamped initially, and the goal is to stamp all `n` slots. Time
runs through the ticks `s = 1, 2, …, m` in order, and on each tick you
perform exactly one of these moves:

- pick a slot `i` in `[1, n]` and lower `nums[i]` by one;
- stamp the slot `changeIndices[s]`, which is only allowed while
  `nums[changeIndices[s]]` is zero;
- let the tick pass unused.

Return the soonest tick in `[1, m]` by which every slot can be stamped when
the moves are chosen optimally, or `-1` if no horizon in `[1, m]` suffices.

### Example 1

```text
Input: nums = [0,3,0], changeIndices = [2,3,1,2,2,3]
Output: 6
Explanation: The following schedule stamps everything by tick 6:
Tick 1: lower slot 2; nums becomes [0,2,0].
Tick 2: lower slot 2; nums becomes [0,1,0].
Tick 3: slot changeIndices[3] = 1 holds zero, so stamp slot 1.
Tick 4: lower slot 2; nums becomes [0,0,0].
Tick 5: slot changeIndices[5] = 2 holds zero, so stamp slot 2.
Tick 6: slot changeIndices[6] = 3 holds zero, so stamp slot 3.
Finishing by tick 5 is impossible: slot 3 can only be stamped at tick 2,
slot 1 only at tick 3, and that leaves too few ticks to lower slot 2 from
3 to 0 before stamping it.
```

### Example 2

```text
Input: nums = [2,1], changeIndices = [2,1,2,2,1]
Output: 5
Explanation: Three lowering ticks and two stamping ticks are unavoidable,
so all five ticks must be used:
Tick 1: lower slot 2; nums becomes [2,0].
Tick 2: lower slot 1; nums becomes [1,0].
Tick 3: lower slot 1; nums becomes [0,0].
Tick 4: stamp slot 2.
Tick 5: stamp slot 1.
```

### Example 3

```text
Input: nums = [1,2], changeIndices = [1,2,2,2]
Output: -1
Explanation: Slot 1 is named only at tick 1, yet its value is 1 and there
is no earlier tick to lower it with, so slot 1 can never be stamped.
```

### Constraints

- `1 <= n == nums.length <= 2000`
- `0 <= nums[i] <= 10⁹`
- `1 <= m == changeIndices.length <= 2000`
- `1 <= changeIndices[i] <= n`

## Hints

### Hint 1

Succeeding by tick `t` stays possible when more ticks are allowed, so
feasibility is monotone in the horizon — search that horizon directly.

### Hint 2

Fix a horizon `t` and stamp each slot at its **last** occurrence inside
`changeIndices[1..t]`; a slot that never appears there fails the horizon
outright.

### Hint 3

Sweep the horizon once, tracking the lowering debt already committed and the
stamps already spent. At a last-occurrence tick `s` for slot `i`, the value
`nums[i]` joins the debt, and the schedule survives only while the debt
never exceeds the ticks not spent on stamps so far.

### Hint 4

The answer is the earliest horizon whose sweep passes, or `-1` when every
horizon fails.
