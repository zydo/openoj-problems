# The Tightest Equal-Value Triple I

## Description

An integer array `nums` is given. Call a triple of indices `(i, j, k)`
matching when the three indices are distinct and `nums[i] == nums[j] ==
nums[k]`. A matching triple's span is

`abs(i - j) + abs(j - k) + abs(k - i)`,

where `abs(x)` is the absolute value of `x`.

Find the smallest span any matching triple can have, or return `-1` when no
three equal values exist anywhere in the array.

### Example 1

```text
Input: nums = [4,1,4,2,4]
Output: 8
Explanation: The best matching triple is (0, 2, 4): nums[0] == nums[2] ==
nums[4] == 4, and its span is abs(0 - 2) + abs(2 - 4) + abs(4 - 0) =
2 + 2 + 4 = 8.
```

### Example 2

```text
Input: nums = [5,5,1,5,5]
Output: 6
Explanation: The value 5 occurs at indices 0, 1, 3, and 4. The triple
(1, 3, 4) is matching and spans abs(1 - 3) + abs(3 - 4) + abs(4 - 1) =
2 + 1 + 3 = 6, and no other triple of equal values manages less.
```

### Example 3

```text
Input: nums = [2,1]
Output: -1
Explanation: No value occurs three times, so no matching triple exists
and the answer is -1.
```

### Constraints

- `1 <= n == nums.length <= 100`
- `1 <= nums[i] <= n`

## Hints

### Hint 1

Trying every combination of three indices is fast enough at this size.
