# Fewest Removals To Clear The Bar I

## Description

You are given a 0-indexed integer array `nums` and an integer `k`.

A single operation deletes one occurrence of the smallest value currently
present in `nums`.

What is the fewest number of operations after which nothing remaining in
the array falls below `k`? Return that count.

### Example 1

```text
Input: nums = [4,7,15,2,9], k = 7
Output: 2
Explanation: The current smallest, 2, is removed first, leaving [4,7,15,9]. The next smallest, 4, goes second, leaving [7,15,9]. Every survivor now sits at 7 or above, so two operations suffice, and removing anything else first cannot do better.
```

### Example 2

```text
Input: nums = [8,8,8], k = 8
Output: 0
Explanation: Every element already meets the bar, so the answer is zero operations.
```

### Example 3

```text
Input: nums = [3,1,10,6,5,1], k = 5
Output: 3
Explanation: Exactly three values sit below 5 — the 3 and the two 1s — and each demands its own removal, while 10, 6 and 5 stay put. Hence the answer is 3.
```

### Constraints

- `1 <= nums.length <= 50`
- `1 <= nums[i] <= 10⁹`
- `1 <= k <= 10⁹`
- The input is built so at least one element of `nums` is greater than or
  equal to `k`.

## Hints

### Hint 1

Every operation strips the current minimum away, so the process removes
precisely the values strictly below `k`, one per operation — counting them
answers the question.
