# Target-Sum Bit Windows

## Description

You are given a binary array `nums` and an integer `goal`. Count the
non-empty windows — contiguous runs of elements — whose entries add up to
exactly `goal`.

### Example 1

```text
Input: nums = [0,1,1,0,1], goal = 2
Output: 5
Explanation: The windows summing to 2 are [0,1,1], [0,1,1,0], [1,1],
[1,1,0], and [1,0,1].
```

### Example 2

```text
Input: nums = [1,1,0,0,1], goal = 3
Output: 1
Explanation: Only the full array sums to 3.
```

### Example 3

```text
Input: nums = [0,0,0], goal = 0
Output: 6
Explanation: Zeros add nothing, so every one of the 6 windows qualifies.
```

### Constraints

- `1 <= nums.length <= 3 * 10⁴`
- Every element of `nums` is `0` or `1`.
- `0 <= goal <= nums.length`

## Hints

### Hint 1

A window's sum can be written as one running total minus another. Which
two?

### Hint 2

Sweep the array once, and for each running total remember how many times
that value has already appeared.

### Hint 3

Standing at a running total of `curr`, every earlier position whose running
total was `curr - goal` closes exactly one qualifying window ending here.
