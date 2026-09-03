# The Compounding Power Stream I

## Description

You are given an integer array `nums` and an integer `p`.

You are also given a 2D integer array `queries`, where each
`queries[i] = [valᵢ, kᵢ]`, and every `kᵢ` lands within `10` of the `k`
used by the query before it.

Process the queries in order. For each one:

- Add `valᵢ` to `nums` (it stays in the array for all later queries).
- Read off `x`, the `kᵢ`th largest value currently in `nums`.
- Replace `p` with `pˣ % (10⁹ + 7)`.

Return the array `ans` in which `ans[i]` is the value `p` holds once the
`i`th query has been processed.

### Example 1

```text
Input: nums = [5], p = 2, queries = [[1,1],[6,2]]
Output: [32,33554432]
Explanation:
    Query [1,1]: inserting 1 gives [5,1]. The 1st largest is 5, so
    p = 2⁵ = 32.
    Query [6,2]: inserting 6 gives [5,1,6]. The 2nd largest is 5, so
    p = 32⁵ = 33554432.
```

### Example 2

```text
Input: nums = [10], p = 3, queries = [[4,2],[2,3],[9,1]]
Output: [81,6561,322934415]
Explanation:
    Query [4,2]: inserting 4 gives [10,4]. The 2nd largest is 4, so
    p = 3⁴ = 81.
    Query [2,3]: inserting 2 gives [10,4,2]. The 3rd largest is 2, so
    p = 81² = 6561.
    Query [9,1]: inserting 9 gives [10,4,2,9]. The 1st largest is 10, so
    p = 6561¹⁰ mod (10⁹ + 7) = 322934415.
```

### Example 3

```text
Input: nums = [8,3], p = 5, queries = [[6,1],[8,2]]
Output: [390625,171376783]
Explanation:
    Query [6,1]: inserting 6 gives [8,3,6]. The 1st largest is 8, so
    p = 5⁸ = 390625.
    Query [8,2]: inserting 8 gives [8,3,6,8]. The 2nd largest is 8, so
    p = 390625⁸ mod (10⁹ + 7) = 171376783.
```

### Constraints

- `1 <= nums.length <= 2 * 10⁴`
- `1 <= nums[i] <= 10⁶`
- `1 <= p <= 10⁶`
- `1 <= queries.length <= 2 * 10⁴`
- `1 <= valᵢ <= 10⁶`
- `1 <= kᵢ <= n + i + 1` where `n` is the length of `nums`
- every `kᵢ` lands within `10` of the `k` used by the previous query

### Hint 1

Only the top `kᵢ` values matter: the `kᵢ`th largest is the smallest
member of that top group, so keep the group apart from the rest.

### Hint 2

Each query moves `k` by less than `10`, so rebalancing two ordered sides
(two heaps work well) shifts only a handful of elements per query.

### Hint 3

Apply the exponentiation with fast modular powering.
