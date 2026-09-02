# Top-Digit Pair Sum

## Description

Two numbers are allowed to team up only when the largest digit appearing in
one equals the largest digit appearing in the other. Given an integer array
`nums`, form such a pair and make its sum as large as you can.

The largest digit of a number is the biggest of its decimal digits: for
482 it is 8, and for 3057 it is 7.

Return the greatest sum over all qualifying pairs, or `-1` when no two
numbers share their largest digit.

### Example 1

```text
Input: nums = [26, 41, 5]
Output: -1
Explanation: The largest digits of the three numbers are 6, 4 and 5 — all
different, so no pair is allowed to form.
```

### Example 2

```text
Input: nums = [38, 29, 853, 71]
Output: 891
Explanation: The largest digits in order are 8, 9, 8 and 7. Only 38 and
853 match (both have 8), and their sum is 38 + 853 = 891.
```

### Example 3

```text
Input: nums = [66, 47, 74, 61]
Output: 127
Explanation: The largest digits are 6, 7, 7 and 6. Two pairs qualify:
66 with 61, summing to 127, and 47 with 74, summing to 121. The better sum
is 127.
```

### Constraints

- `2 <= nums.length <= 100`
- `1 <= nums[i] <= 10⁴`

## Hints

### Hint 1

Two numbers pair up exactly when their largest digits match, and those
digits can take only the nine values 1 through 9 (no element is smaller
than 1).

### Hint 2

Inside one digit group only the group's two greatest values can produce the
best sum, so sweep the array once and remember the best value seen so far
for each group.
