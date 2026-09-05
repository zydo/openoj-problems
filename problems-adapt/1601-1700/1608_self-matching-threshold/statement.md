# Self-Matching Threshold

## Description

You are given an array `nums` of non-negative integers. Call the array
**self-matching** if some number `x` has exactly `x` array entries that
are greater than or equal to `x` — a threshold that counts itself out of
its own definition.

`x` does not have to be one of the values stored in `nums`.

Return that `x` if the array is self-matching, and `-1` otherwise. Such
an `x`, when it exists, is unique.

### Example 1

```text
Input: nums = [7,1,7,4]
Output: 3
Explanation: Exactly 3 entries (both 7s and the 4) are greater than or
equal to 3. Note that 3 itself appears nowhere in the array.
```

### Example 2

```text
Input: nums = [1,1,1]
Output: -1
Explanation: No candidate works. The only possibilities worth checking:
x = 1 would need exactly 1 entry >= 1, but all 3 qualify; x = 2 would
need 2 entries >= 2, but none qualify; x = 3 would need 3 entries >= 3,
but none qualify. x = 0 fails immediately too, since all 3 entries are
>= 0 rather than none.
```

### Example 3

```text
Input: nums = [0,0,5,8,8]
Output: 3
Explanation: The three entries 5, 8, and 8 are greater than or equal to
3, and nothing larger than 3 matches its own count.
```

### Constraints

- `1 <= nums.length <= 100`
- `0 <= nums[i] <= 1000`

## Hints

### Hint 1

For every candidate `x` from `0` through `nums.length`, count how many
entries are greater than or equal to it. Candidates beyond the array's
length can never work.

### Hint 2

The first candidate whose count comes back equal to itself is the
answer; if the whole range fails, return `-1`.
