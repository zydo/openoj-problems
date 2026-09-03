# Longest Doubled-Count Window

## Description

You are given an integer array `nums`.

Consider contiguous windows of `nums` and call one of them doubled-count
when it satisfies either rule below:

- The window holds just one distinct value.
- Otherwise some positive integer `f` exists for which each distinct value
  in the window appears exactly `f` times or exactly `2 * f` times — and
  both of those counts really do occur within the window.

Find the length of the longest doubled-count window and return it.

### Example 1

```text
Input: nums = [7,8,8,7,8,9,9,9,9]
Output: 5
Explanation: The window [8, 7, 8, 9, 9] contains 7 once, 8 twice, and 9
twice. With f = 1, every value appears either 1 or 2 times and both counts
occur, so the window is doubled-count. No longer window qualifies.
```

### Example 2

```text
Input: nums = [6,6,6]
Output: 3
Explanation: The whole array holds a single distinct value, so it qualifies
immediately and the answer is 3.
```

### Example 3

```text
Input: nums = [4,1,7]
Output: 1
Explanation: In the full array each of the three values appears once, so
only one count level exists and no single value fills the window — the
rules are not met past length 1. The answer is 1.
```

### Example 4

```text
Input: nums = [1,1,2,2,3,3]
Output: 5
Explanation: The window [1, 1, 2, 2, 3] shows counts 2, 2, and 1 — exactly
the levels 2 and 2 * 1. Both levels occur, so this length-5 window is
doubled-count, and the remaining window arrangements do no better.
```

### Constraints

- `1 <= nums.length <= 1000`
- `1 <= nums[i] <= 10⁹`

## Hints

### Hint 1

Pin the left edge and stretch the right edge one step at a time, maintaining
each value's count plus a tally of how many values sit at every count — each
step then costs constant time.

### Hint 2

Track the number, the sum, and the squared sum of the count levels currently
active. Two levels `f` and `2f` are precisely a two-level state whose sum is
`3f` and whose squared sum is `5f²`.

### Hint 3

Treat windows built from a single distinct value as valid on their own,
without consulting the level equations.
