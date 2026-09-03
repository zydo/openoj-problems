# Tallying A Digit Across The Numbers

## Description

Handed an integer array `nums` and a single decimal figure `digit`, count how
many times that figure shows up when every element of `nums` is written out
in base ten and the writings are scanned together.

The count covers each element's full decimal spelling — every place value
counts, including repeated copies of `digit` inside one number.

### Example 1

```text
Input: nums = [123, 456, 789], digit = 3
Output: 1
Explanation: Written out, only 123 contains the figure 3, and it holds it
once; 456 and 789 contribute nothing, so the tally is 1.
```

### Example 2

```text
Input: nums = [101, 220, 55], digit = 0
Output: 2
Explanation: 101 ends in one 0 and 220 ends in one 0; 55 has no zero at all,
giving 1 + 1 = 2.
```

### Example 3

```text
Input: nums = [7], digit = 8
Output: 0
Explanation: The lone element 7 never contains the figure 8, so the answer
is 0.
```

### Constraints

- `1 <= nums.length <= 1000`
- `1 <= nums[i] <= 10⁶`
- `0 <= digit <= 9`

## Hints

### Hint 1

Process each element on its own: strip off one decimal place at a time by
dividing by ten, checking the stripped digit as you go.

### Hint 2

Every element is at least 1, so the strip loop naturally stops after the
leading digit — no special case for zero is needed.
