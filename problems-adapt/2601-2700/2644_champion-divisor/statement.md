# Champion Divisor

## Description

Two integer arrays, `nums` and `divisors`, are handed to you.

Score each entry `divisors[i]` by counting how many elements of `nums` it
divides evenly.

Hand back the `divisors[i]` earning the highest score. When several
divisors share the top score, answer with the smallest of them.

### Example 1

```text
Input: nums = [12,18,7], divisors = [6,3,4]
Output: 3
Explanation:
6 divides 12 and 18, so its score is 2.
3 divides 12 and 18 as well, so its score is also 2.
4 divides none of the three values, so its score is 0.
The top score of 2 belongs to both 6 and 3, and the smaller of them is 3.
```

### Example 2

```text
Input: nums = [6,10,15,30], divisors = [5,6,30]
Output: 5
Explanation:
5 divides 10, 15, and 30 — a score of 3, the best of the three.
6 divides 6 and 30, scoring 2.
30 divides only 30, scoring 1.
```

### Example 3

```text
Input: nums = [2,3], divisors = [7,11,5]
Output: 5
Explanation: No divisor splits any element of nums, so all three score 0
and the smallest divisor, 5, is returned.
```

### Constraints

- `1 <= nums.length, divisors.length <= 1000`
- `1 <= nums[i], divisors[i] <= 10⁹`

## Hints

### Hint 1

A straightforward count of divisible pairs for every divisor is fast
enough here.

### Hint 2

Once every divisor has its count, pick the largest; break ties by taking
the smallest divisor among the leaders.
