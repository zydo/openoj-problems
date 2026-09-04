# The Compounding Power Stream II

## Description

You are given an integer array `nums` and an integer `p`.

You are also given a 2D integer array `queries`, where every
`queries[i] = [valᵢ, kᵢ]`.

Process the queries in order. For each one:

- Add `valᵢ` to `nums` (it stays in the array for all later queries).
- Read off `x`, the `kᵢ`th largest value currently in `nums`.
- Replace `p` with `pˣ % (10⁹ + 7)`.

Return the array `ans` in which `ans[i]` is the value `p` holds once the
`i`th query has been processed.

### Example 1

```text
Input: nums = [3], p = 2, queries = [[5,1],[2,2]]
Output: [32,32768]
Explanation:
    Query [5,1]: inserting 5 gives [3,5]. The 1st largest is 5, so
    p = 2⁵ = 32.
    Query [2,2]: inserting 2 gives [2,3,5]. The 2nd largest is 3, so
    p = 32³ = 32768.
```

### Example 2

```text
Input: nums = [4,9], p = 3, queries = [[6,2],[1,3]]
Output: [729,429534507]
Explanation:
    Query [6,2]: inserting 6 gives [4,6,9]. The 2nd largest is 6, so
    p = 3⁶ = 729.
    Query [1,3]: inserting 1 gives [1,4,6,9]. The 3rd largest is 4, so
    p = 729⁴ mod (10⁹ + 7) = 429534507.
```

### Example 3

```text
Input: nums = [10], p = 5, queries = [[7,2]]
Output: [78125]
Explanation:
    Query [7,2]: inserting 7 gives [7,10]. The 2nd largest is 7, so
    p = 5⁷ = 78125.
```

### Constraints

- `1 <= nums.length <= 2 * 10⁴`
- `1 <= nums[i] <= 10⁹`
- `1 <= p <= 10⁹`
- `1 <= queries.length <= 2 * 10⁴`
- `1 <= valᵢ <= 10⁹`
- `1 <= kᵢ <= n + i + 1`, where `n` is the length of `nums` and `i` is the
  query's zero-based index

### Hint 1

Being the `k`th largest is the same as occupying rank `size - k + 1` when
the values are listed in increasing order.

### Hint 2

Compress the value coordinates and keep occurrence counts in a Fenwick tree;
the tree then walks down to the value holding any requested rank.

### Hint 3

Raise `p` to the drawn exponent with binary exponentiation under the
modulus.
