# Where Every Slot Lands

## Description

You are given an integer array `nums` laid out in a ring — index `0`
follows the last index, and stepping backward from index `0` lands on
the last index. Build an array `result` of the same length where each
slot is filled independently:

- If `nums[i]` is positive, start at slot `i` and advance exactly
  `nums[i]` places clockwise around the ring; `result[i]` is the value
  sitting on the slot you land on.
- If `nums[i]` is negative, start at slot `i` and walk
  `abs(nums[i])` places counterclockwise; `result[i]` is again the value
  where you land.
- If `nums[i]` is zero, the slot stays put: `result[i] = nums[i]`.

Return the finished array `result`.

### Example 1

```text
Input: nums = [2,-3,5,-1,4]
Output: [5,-1,5,5,-1]
Explanation: Slot 0 advances 2 to slot 2 and reads 5; slot 1 backs up 3
to slot 3 and reads -1; slot 2 advances 5 — one full lap — back to
itself; slot 3 backs up 1 to slot 2 (5); slot 4 advances 4 to slot 3
(-1).
```

### Example 2

```text
Input: nums = [1,2,3,4,5]
Output: [2,4,1,3,5]
Explanation: Every slot moves forward by its own value, wrapping as
needed: slot 0 reaches slot 1, slot 1 reaches slot 3, slot 2 wraps all
the way to slot 0, slot 3 reaches slot 2, slot 4 stays a lap away from
itself.
```

### Example 3

```text
Input: nums = [0,2,-4]
Output: [0,0,2]
Explanation: Slot 0 is pinned in place by its zero. Slot 1 advances 2
around to slot 0, and slot 2 backs up 4 — more than a lap — to slot 1.
```

### Constraints

- `1 <= nums.length <= 100`
- `-100 <= nums[i] <= 100`

## Hints

### Hint 1

Each slot's answer is independent, so one pass suffices — and the
landing slot can be jumped to directly with modular arithmetic instead
of stepping one place at a time.
