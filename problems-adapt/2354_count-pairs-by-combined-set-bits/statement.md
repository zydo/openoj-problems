# Count Pairs by Combined Set Bits

## Description

You are given an array of positive integers `nums` and a positive integer
`k`.

Write `bits(x)` for the number of `1`-bits in the binary form of `x`. An
ordered pair of values `(a, b)` taken from `nums` is called rich when

```text
bits(a OR b) + bits(a AND b) >= k
```

where `OR` and `AND` are the bitwise operations.

Return the number of distinct rich pairs.

Pairs are between values, not positions: `(a, b)` and `(b, a)` are two
different pairs whenever `a != b`, the pair `(a, a)` counts once a value `a`
occurs in the array, and extra occurrences of a value add nothing.

### Example 1

```text
Input: nums = [2,3,5,3,2], k = 3
Output: 8
Explanation: The distinct values are 2, 3, and 5, with 2 = 10 (one set bit),
3 = 11 and 5 = 101 (two set bits each). A pair is rich when the two values
carry three or more set bits between them, which holds for every ordered
pair except (2, 2): that is 3 * 3 - 1 = 8 pairs.
```

### Example 2

```text
Input: nums = [6,9,4], k = 5
Output: 0
Explanation: 6 = 110 and 9 = 1001 carry two set bits each, and 4 = 100
carries one. The best any pair can do is 2 + 2 = 4, still short of 5.
```

### Example 3

```text
Input: nums = [7,8,12], k = 4
Output: 6
Explanation: 7 = 111 has three set bits, 12 = 1100 has two, 8 = 1000 has
one. Take the pair (7, 12): bits(7 OR 12) = bits(1111) = 4 and
bits(7 AND 12) = bits(100) = 1, a total of 5 — no larger than the 3 + 2
bits the two inputs already had. The rich pairs are (7, 7), (12, 12), and
(7, 12) in both orders: 6 in total.
```

### Constraints

- `1 <= nums.length <= 10⁵`
- `1 <= nums[i] <= 10⁹`
- `1 <= k <= 60`

## Hints

### Hint 1

For a single bit position, look at the four cases for whether `a` and `b`
have that bit set. Where does that bit land — in `a OR b`, in `a AND b`, or
counted by both totals put together?

### Hint 2

The condition ends up depending on nothing but the set-bit count of each
value on its own. How many different counts can a 30-bit value have?

### Hint 3

Bucket the distinct values by set-bit count, then count ordered pairs of
buckets whose counts reach `k`.
