# Two Adds And One Takeaway

## Description

You are given an integer array `nums`.

Pick three elements of `nums` that sit at distinct indices and cast them
in the roles `a`, `b` and `c`. The roles are about values, not
positions: the three picks may appear in any relative order inside the
array.

Return the greatest value the expression `a + b - c` can reach.

### Example 1

```text
Input: nums = [7,-3,10]
Output: 20
Explanation: Cast a = 10, b = 7 and c = -3. The expression evaluates to
10 + 7 - (-3) = 20, and no casting does better.
```

### Example 2

```text
Input: nums = [-8,-1,-5,-3]
Output: 4
Explanation: Every value is negative, yet the roles still work: a = -1
and b = -3 are the two least negative values while c = -8 is the most
negative, and -1 + (-3) - (-8) = 4 is the best on offer.
```

### Example 3

```text
Input: nums = [6,6,2,9]
Output: 13
Explanation: Casting a = 9, b = 6 and c = 2 gives 9 + 6 - 2 = 13. Two
of the picks may hold equal values — only the three indices themselves
must be distinct.
```

### Constraints

- `3 <= nums.length <= 100`
- `-100 <= nums[i] <= 100`

## Hints

### Hint 1

For any chosen trio of values, the smart casting puts the two largest
in the `a` and `b` slots and the smallest in `c`; every other casting of
the same three values scores no higher.

### Hint 2

The answer is therefore the sum of the two largest values in `nums`
minus its smallest value, which a single pass tracking those three
extremes can find.
