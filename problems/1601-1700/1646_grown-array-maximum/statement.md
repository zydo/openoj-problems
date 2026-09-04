# Grown Array Maximum

## Description

Start from an integer `n` and fill a 0-indexed array `nums` of length
`n + 1` according to these rules:

- `nums[0] = 0`
- `nums[1] = 1`
- `nums[2 * i] = nums[i]` whenever `2 <= 2 * i <= n`
- `nums[2 * i + 1] = nums[i] + nums[i + 1]` whenever
  `2 <= 2 * i + 1 <= n`

Return the largest value the finished array contains.

### Example 1

```text
Input: n = 5
Output: 3
Explanation: The rules give
  nums[0] = 0
  nums[1] = 1
  nums[2] = nums[1] = 1
  nums[3] = nums[1] + nums[2] = 1 + 1 = 2
  nums[4] = nums[2] = 1
  nums[5] = nums[2] + nums[3] = 1 + 2 = 3
so nums = [0,1,1,2,1,3] and the largest entry is 3.
```

### Example 2

```text
Input: n = 12
Output: 5
```

### Example 3

```text
Input: n = 100
Output: 21
```

### Constraints

- `0 <= n <= 100`

## Hints

### Hint 1

Simply build the array exactly as the rules describe.

### Hint 2

Watch the small indices — index 1 is a seed, not something both parity
rules apply to.
