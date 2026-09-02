# GCD Pairs By Rank

## Description

Take an integer array `nums` and form every unordered pair of two distinct
positions. Each pair contributes one number: the greatest common divisor
of its two values. Collect all those divisors and sort them into one
ascending list, `gcdPairs`.

A batch of positions `queries` then asks about that list: for each
`queries[i]`, report the number sitting at index `queries[i]` of
`gcdPairs`. Gather the reports, in query order, into the answer array.

Here `gcd(a, b)` means the greatest common divisor of `a` and `b`.

### Example 1

```text
Input: nums = [4,6,8], queries = [0,1,2]
Output: [2,2,4]
Explanation: The three pair gcds are gcd(4,6) = 2, gcd(4,8) = 4, and
gcd(6,8) = 2. Sorted ascending, gcdPairs = [2,2,4]. Reading positions 0,
1, and 2 gives [2,2,4].
```

### Example 2

```text
Input: nums = [5,10,20,25], queries = [0,3,5]
Output: [5,5,10]
Explanation: The six pair gcds, sorted, are [5,5,5,5,5,10]. Positions 0,
3, and 5 hold 5, 5, and 10.
```

### Example 3

```text
Input: nums = [8,4,2], queries = [1]
Output: [2]
Explanation: The sorted pair gcds are [2,2,4]; position 1 holds 2.
```

### Constraints

- `2 <= n == nums.length <= 10⁵`
- `1 <= nums[i] <= 5 * 10⁴`
- `1 <= queries.length <= 10⁵`
- `0 <= queries[i] < n * (n - 1) / 2`

## Hints

### Hint 1

Building and sorting all the pairs is far too slow. Count, for every
candidate divisor `d`, how many pairs have gcd exactly `d`.

### Hint 2

Pairs sharing divisor `d` are easy to count from value frequencies;
subtracting the exact counts of every proper multiple of `d` (largest
first) turns that into the exact count for `d`.
