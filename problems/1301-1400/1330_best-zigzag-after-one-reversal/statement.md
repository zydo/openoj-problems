# Best Zigzag After One Reversal

## Description

Call the zigzag score of an integer array the sum of the absolute
differences of every adjacent pair, i.e. the total of `|nums[i] -
nums[i+1]|` over all valid `i`.

You may choose one contiguous stretch of the array and reverse it, and
you may do this at most a single time. Everything else about the array
stays put.

Return the largest zigzag score any single reversal can produce.

### Example 1

```text
Input: nums = [1,4,2,7]
Output: 13
Explanation: Flipping the stretch [4,2,7] turns the array into
[1,7,2,4], whose score is 6 + 5 + 2 = 13.
```

### Example 2

```text
Input: nums = [5,-2,8,3,-6]
Output: 40
```

### Constraints

- `2 <= nums.length <= 3 * 10^4`
- `-10^5 <= nums[i] <= 10^5`
- The answer is guaranteed to fit in a 32-bit integer.

## Hints

### Hint 1

Reversing a stretch `[L, R]` leaves every difference strictly inside it
untouched — only the two links where the stretch joins the rest of the
array change.

### Hint 2

The gain of a reversal is
`|a[R] - a[L-1]| + |a[L] - a[R+1]| - |a[L] - a[L-1]| - |a[R] - a[R+1]|`,
treating missing neighbors at the array ends as absent.

### Hint 3

A stretch touching either end drops one of those four terms, so the
gain there is a single absolute-value swap — try every cut point.

### Hint 4

For interior stretches, expand each absolute value into its
larger-minus-smaller form; the best gain collapses to twice the
quantity (largest adjacent-pair minimum - smallest adjacent-pair
maximum), each extremum found in one scan.
