# Fewest Steps to Hit the Goal

## Description

You are given a 0-indexed array `nums` of distinct integers, together with
a `start` value and a `goal` value. A working number `x` begins at `start`,
and you change it by applying moves until it lands exactly on `goal`. As
long as `x` currently satisfies `0 <= x <= 1000`, one move picks any
element `nums[i]` and replaces `x` with one of:

- `x + nums[i]`
- `x - nums[i]`
- `x ^ nums[i]` (bitwise XOR)

Each element may be reused arbitrarily often and in any order. A move that
throws `x` outside `0 <= x <= 1000` is still allowed, but `x` is then
frozen — no further moves can be made.

Return the fewest moves that carry `x` from `start` to `goal`, or `-1` if
the goal can never be reached.

### Example 1

```text
Input: nums = [2,6], start = 4, goal = 0
Output: 2
Explanation: Two moves suffice: 4 - 2 = 2, then 2 - 2 = 0.
```

### Example 2

```text
Input: nums = [1001], start = 1, goal = 1002
Output: 1
Explanation: The single move 1 + 1001 = 1002 lands on the goal even
though 1002 lies outside 0 <= x <= 1000 — a finishing move may leave the
range.
```

### Example 3

```text
Input: nums = [2], start = 0, goal = 1
Output: -1
Explanation: Adding, subtracting, or XOR-ing 2 can never turn the even
value 0 into the odd value 1.
```

### Constraints

- `1 <= nums.length <= 1000`
- `-10⁹ <= nums[i], goal <= 10⁹`
- `0 <= start <= 1000`
- `start != goal`
- Every element of `nums` is distinct.

## Hints

### Hint 1

Once `x` escapes the range `0 <= x <= 1000`, no further moves are
possible — such states are dead ends unless they already equal the goal.

### Hint 2

Treat the 1001 in-range values as states and run a breadth-first search:
the first time the goal appears, the current depth is the answer.
