# Prefix Divisibility By Five

## Description

Each leading stretch of a binary array spells out one number. Reading
the bits most significant bit first, the stretch from the start through
index `i` names a single value: the array `[1,1,0]` passes through 1
("1"), 3 ("11") and 6 ("110") as it grows bit by bit.

Given a binary array `nums`, return a boolean array `answer` of the same
length in which `answer[i]` says whether the value spelled by the first
`i + 1` bits is divisible by 5.

### Example 1

```text
Input: nums = [0,1,0,1,0]
Output: [true,false,false,true,true]
Explanation: The prefixes read 0, 1, 2, 5, 10 in binary; of those, 0, 5
and 10 are multiples of 5.
```

### Example 2

```text
Input: nums = [1,1,1,1,1]
Output: [false,false,false,true,false]
Explanation: The prefixes read 1, 3, 7, 15, 31; only 15 is a multiple
of 5.
```

### Example 3

```text
Input: nums = [0,0,1]
Output: [true,true,false]
Explanation: The prefixes read 0, 0, 1.
```

### Constraints

- `1 <= nums.length <= 10^5`
- `nums[i]` is either `0` or `1`.

## Hints

### Hint 1

Extending a binary number by one bit doubles it and appends the new
bit, so a prefix's remainder mod 5 follows from the previous remainder
alone — the full prefix values quickly outgrow any fixed-width integer.
