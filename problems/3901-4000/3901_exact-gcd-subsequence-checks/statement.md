# Exact GCD Subsequence Checks

## Description

You are given an integer array `nums` of length `n`, an integer `p`, and a
sequence of point updates `queries`, where `queries[i] = [index_i, value_i]`
rewrites `nums[index_i]` to `value_i`.

Call a non-empty subsequence of the current array _proper_ when it uses
strictly fewer than `n` elements — at least one slot of the array stays out —
and the greatest common divisor of its elements equals `p` exactly.

Apply the updates one at a time. After each rewrite, ask whether the current
array still holds a proper subsequence whose GCD is exactly `p`.

Return how many of the updates admit such a subsequence.

### Example 1

```text
Input: nums = [6,10,15], p = 5, queries = [[1,20],[2,30]]
Output: 1
Explanation:
Update nums[1] to 20: the array becomes [6,20,15], and the subsequence
[20,15] has GCD exactly 5, so this update counts.
Update nums[2] to 30: the array becomes [6,20,30]; each pair's GCD is 2, 6,
or 10 and no single element equals 5, so this update does not count.
The answer is 1.
```

### Example 2

```text
Input: nums = [8,4,2,16], p = 2, queries = [[3,3],[0,12]]
Output: 2
Explanation:
Update nums[3] to 3: the array becomes [8,4,2,3], and the single-element
subsequence [2] has GCD exactly 2, so this update counts.
Update nums[0] to 12: the array becomes [12,4,2,3], and [2] still works, so
this update counts too.
The answer is 2.
```

### Example 3

```text
Input: nums = [4,9,2], p = 6, queries = [[0,12],[2,3]]
Output: 0
Explanation:
Update nums[0] to 12: the array becomes [12,9,2]; no element equals 6 and
the pair GCDs are 3, 2, and 1, so this update does not count.
Update nums[2] to 3: the array becomes [12,9,3]; every pair's GCD is 3, so
this update does not count either.
The answer is 0.
```

### Constraints

- `2 <= n == nums.length <= 5 * 10⁴`
- `1 <= nums[i] <= 5 * 10⁴`
- `1 <= queries.length <= 5 * 10⁴`
- `queries[i] = [index_i, value_i]`
- `0 <= index_i <= n - 1`
- `1 <= value_i, p <= 5 * 10⁴`

## Hints

### Hint 1

Only multiples of `p` can ever sit in a wanted subsequence. Divide those
values by `p` and the goal becomes picking a proper subsequence with GCD
exactly one.

### Hint 2

A reduced selection has GCD one precisely when no single prime divides
every chosen value.

### Hint 3

So everything reduces to prime coverage: keep, for each prime, how many
active reduced values contain it. If some prime is present in all active
values, no selection succeeds.

### Hint 4

When every slot is active you must leave one out. A prime that misses
exactly one active slot pins that slot as the only one you cannot drop;
count the distinct pinned slots. The check passes exactly when no prime
covers everything and at least one slot stays unpinned.
