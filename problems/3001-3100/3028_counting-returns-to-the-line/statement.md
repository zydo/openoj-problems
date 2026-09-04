# Counting Returns To The Line

## Description

A crawler sits on a line painted on the ground and then takes a walk
along that line, sometimes drifting left and sometimes right. You are
given an array `nums` of non-zero integers; the crawler processes the
values from the first to the last, and each value is one step of the
walk:

- A positive `nums[i]` moves the crawler `nums[i]` units to the right.
- A negative `nums[i]` moves the crawler `-nums[i]` units to the left.

Count how many steps end with the crawler standing exactly on the line it
started from, and return that count.

Notes:

- The line stretches without limit in both directions.
- A step is only judged at its end. If the crawler swings across the line
  in the middle of a step but comes to rest away from it, that step does
  not count.

### Example 1

```text
Input: nums = [1,2,-3,4]
Output: 1
Explanation: The walk sits 1 unit right of the line, then 5 units right,
then back on the line (1 + 2 - 3 = 0), and finally 4 units right. The
crawler lands on the line exactly once.
```

### Example 2

```text
Input: nums = [5,-5,5,-5]
Output: 2
Explanation: The positions after each step are 5, 0, 5, 0 — the crawler
is back on the line after the second and fourth steps, so the answer is 2.
```

### Example 3

```text
Input: nums = [3,-5,4]
Output: 0
Explanation: The positions after each step are 3, -2, 2. The second step
crosses the line on the way from 3 down to -2, but the step ends away
from the line, and crossings do not count.
```

### Constraints

- `1 <= nums.length <= 100`
- `-10 <= nums[i] <= 10`
- `nums[i] != 0`

## Hints

### Hint 1

Track one running total: after each step it equals the crawler's signed
distance from the line, because right steps add and left steps subtract.

### Hint 2

Compare the running total with zero only after the whole step has been
applied — a step whose absolute size overshoots the current distance
jumps across zero without ever landing on it.
