# The Cheapest K-Split II

## Description

You are given an integer array `nums` and an integer `k`.

Cut `nums` into exactly `k` consecutive pieces (every element belongs to
one piece, and the pieces keep their left-to-right order). Each piece is
scored by

    value(piece) = sum(piece) * (sum(piece) + 1) / 2

where `sum(piece)` is the total of its elements. The score of a whole
cutting is the sum of its pieces' values.

Over all ways to make the cuts, return the smallest score a cutting can
achieve.

### Example 1

```text
Input: nums = [3,1,4,1,5], k = 2
Output: 57
Explanation:
    The best place for the single cut is after the 4: the pieces are
    [3,1,4] and [1,5].
    Their sums are 8 and 6, scoring 8 * 9 / 2 = 36 and 6 * 7 / 2 = 21.
    Together that is 36 + 21 = 57, and no other placement of the cut does
    better.
```

### Example 2

```text
Input: nums = [2,2,2,2], k = 2
Output: 20
Explanation:
    Cutting in the middle gives the pieces [2,2] and [2,2], each of sum 4
    and value 4 * 5 / 2 = 10, for a total of 20.
    Cutting after the first or third element instead yields pieces of sums
    2 and 6, scoring 3 and 21, which totals 39.
```

### Example 3

```text
Input: nums = [6,5,4], k = 3
Output: 46
Explanation:
    With k equal to the array length, every piece is a single element:
    [6], [5], [4].
    They score 21, 15, and 10, for a total of 46.
```

### Constraints

- `1 <= nums.length <= 5 * 10⁴`
- `1 <= nums[i] <= 10³`
- `1 <= k <= nums.length`

### Hint 1

Prefix sums let you evaluate any piece's value in constant time.

### Hint 2

A dynamic program over cut positions takes the form
`dp[i] = min(dp[j] + cost(j + 1, i))`; expand the cost algebraically and the
minimization turns into choosing among straight lines.

### Hint 3

Rather than tracking the piece count inside the dynamic program, charge a
penalty per piece and binary search for the penalty that yields exactly `k`.
