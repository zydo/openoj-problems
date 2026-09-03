# Parity Bits In Sorted Order

## Description

You are given an integer array `nums`. First shrink every entry down to
its parity: an even value turns into `0` and an odd value turns into
`1`. Then arrange the shrunken array in non-decreasing order and return
the result.

### Example 1

```text
Input: nums = [7,2,10,5]
Output: [0,0,1,1]
Explanation: The parities of 7, 2, 10, 5 are 1, 0, 0, 1, giving
[1,0,0,1]. Placed in non-decreasing order that becomes [0,0,1,1].
```

### Example 2

```text
Input: nums = [9]
Output: [1]
Explanation: The single value 9 is odd, so the array is just [1].
```

### Example 3

```text
Input: nums = [6,8,3,3,6]
Output: [0,0,0,1,1]
Explanation: The parities are 0, 0, 1, 1, 0. Sorted, the three 0s come
first and the two 1s follow.
```

### Constraints

- `1 <= nums.length <= 100`
- `1 <= nums[i] <= 1000`

## Hints

### Hint 1

After the parity mapping the array holds nothing but 0s and 1s, so one
arrangement beats every other non-decreasing ordering: all the 0s, then
all the 1s.

### Hint 2

Count how many entries are odd, say `k`; the answer is the 0 repeated
`n - k` times followed by the 1 repeated `k` times.
