# Digit Disagreements Across Pairs

## Description

Every number in `nums` is written with the same number of digits. Given
two equal-length numbers, a position is a disagreement when the digits
they hold there differ, and the pair's digit distance is the number of
disagreeing positions between them.

Add up the digit distance of every unordered pair of numbers from `nums`
and return that total.

### Example 1

```text
Input: nums = [12,34,13]
Output: 5
Explanation:
- 12 versus 34 disagrees at both positions, a distance of 2.
- 12 versus 13 shares a leading 1 and disagrees only in the last digit,
  a distance of 1.
- 34 versus 13 disagrees at both positions, a distance of 2.
The three pairs sum to 2 + 1 + 2 = 5.
```

### Example 2

```text
Input: nums = [407,409,557]
Output: 6
Explanation: The pair distances are 1 (407 vs 409), 2 (407 vs 557) and
3 (409 vs 557), which add up to 6.
```

### Example 3

```text
Input: nums = [61,61]
Output: 0
Explanation: The only pair is two copies of the same number, so nothing
disagrees.
```

### Constraints

- `2 <= nums.length <= 10⁵`
- `1 <= nums[i] < 10⁹`
- All integers in `nums` have the same number of digits.

## Hints

### Hint 1

Positions never interact: settle each digit column on its own, then add
the per-column answers together.

### Hint 2

Inside one column, only how many numbers carry each digit matters — a
census over the ten possible digits is enough.

### Hint 3

If `c` numbers share a digit in a column and `n` numbers exist overall,
that column accounts for `c * (n - c)` ordered comparisons between
different digits, half of which is the column's contribution to
unordered pairs.
