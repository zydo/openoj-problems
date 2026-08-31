# Distinct Values After Digit Reversal

## Description

You are given an array `nums` of positive integers.

For each integer in `nums`, reverse its decimal digits and append the
result to the end of the array. The appended values are derived from the
original integers, not from any value that was itself just appended.

Return the number of distinct integers in the final array.

When a number ends in zero, its reversal drops the leading zeros: for
example, `10` reversed is `01`, which is simply `1`.

### Example 1

```text
Input: nums = [12,21,5,50]
Output: 4
Explanation: The reversed values are 12 -> 21, 21 -> 12, 5 -> 5 and
50 -> 5, so the final array holds 12, 21, 5, 50, 21, 12, 5, 5. Its
distinct values are 12, 21, 5 and 50, which number 4.
```

### Example 2

```text
Input: nums = [111,111]
Output: 1
Explanation: Both originals and both reversals are 111, leaving a single
distinct value.
```

### Example 3

```text
Input: nums = [1,10,100]
Output: 3
Explanation: Reversing 10 and 100 both yields 1, so the distinct values
are 1, 10 and 100.
```

### Constraints

- `1 <= nums.length <= 10⁵`
- `1 <= nums[i] <= 10⁶`

## Hints

### Hint 1

The final array is the originals plus one reversal per original, so its
distinct values are exactly the set of originals together with the set of
reversals.

### Hint 2

Insert every original and every reversal into the same hash set; its size
is the answer. Reversals never grow the digit count, so no value exceeds
`10⁶`.
