# OR of Every Subsequence Total

## Description

Take an array of integers `nums`. Every way of keeping some (or none, or
all) of its elements, preserving their order, produces one total — the sum
of the kept elements. Collect the totals of all these selections and
combine them with bitwise OR.

Return that single combined value.

### Example 1

```text
Input: nums = [1, 2, 3]
Output: 7
Explanation: The selections give the totals 0, 1, 2, 3 (1+2), 3, 4 (1+3),
5 (2+3), and 6 (1+2+3). OR-ing them together, 0 | 1 | 2 | 3 | 4 | 5 | 6,
yields 7.
```

### Example 2

```text
Input: nums = [3, 3]
Output: 7
Explanation: The totals are 0, 3, 3, and 6. The total 6 (binary 110)
raises bit 2 even though neither element has it — the carry when the two
3s add — so the OR of all totals is 3 | 6 = 7.
```

### Example 3

```text
Input: nums = [5, 0]
Output: 5
Explanation: Every selection totals to 0 or 5, so the combined OR is 5.
```

### Constraints

- `1 <= nums.length <= 10⁵`
- `0 <= nums[i] <= 10⁹`

## Hints

### Hint 1

Work bit by bit: decide for each bit position whether the final OR has it
set.

### Hint 2

A bit ends up set if some single element carries it, or if adding several
elements together produces it.

### Hint 3

Sums of many elements are built out of sums of few — watch how lower bits
pile up through carries into higher bits.
