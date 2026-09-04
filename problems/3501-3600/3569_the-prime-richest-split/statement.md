# The Prime-Richest Split

## Description

You start from an integer array `nums` of length `n` and a list of
updates `queries`, where `queries[i] = [idx, val]`. Updates stack up —
each one rewrites the array that every later update works from.

For an update, first set `nums[idx] = val`. Then choose a cut position
`k` with `1 <= k < n`, splitting the array into the non-empty prefix
`nums[0..k-1]` and the non-empty suffix `nums[k..n-1]`. The cut scores
the number of distinct prime values appearing in the prefix plus the
number appearing in the suffix, and you want the cut with the largest
score.

Return, in order, the best score achievable after each update.

### Example 1

```text
Input: nums = [2,1,2,3], queries = [[1,5],[3,4]]
Output: [4,3]
Explanation:
After the first update, nums = [2,5,2,3]. Cutting at k = 2 gives prefix
[2,5] with two distinct primes and suffix [2,3] with two more — a score
of 4, the 2 being counted on both sides.
After the second update, nums = [2,5,2,4]. The prime 5 is gone; the best
cut is still k = 2, scoring prefix [2,5] = 2 plus suffix [2] = 1, so 3.
```

### Example 2

```text
Input: nums = [4,6,8], queries = [[2,3],[0,9]]
Output: [1,1]
Explanation:
The array begins prime-free. The first update makes nums = [4,6,3]:
wherever the cut goes, the lone 3 sits on one side of it, so the score
is 1. Swapping the 4 for a 9 afterwards leaves that one prime alone,
and the score stays 1.
```

### Example 3

```text
Input: nums = [2,9,2,3], queries = [[1,3],[3,9]]
Output: [4,3]
Explanation:
After the first update, nums = [2,3,2,3]: both 2 and 3 straddle the cut
at k = 2, so each side holds two distinct primes and the score is 4.
After the second update, nums = [2,3,2,9]: only the 2 straddles any cut,
and the best score drops to 3.
```

### Constraints

- `2 <= n == nums.length <= 5 * 10⁴`
- `1 <= queries.length <= 5 * 10⁴`
- `1 <= nums[i] <= 10⁵`
- `queries[i] = [idx, val]` with `0 <= idx < n` and `1 <= val <= 10⁵`

## Hints

### Hint 1

Sieve the primality of every value up to the bound once, so each later
check is a lookup rather than a factorization.

### Hint 2

Keep the sorted occurrence positions of each prime value. A value lands
on both sides of cut `k` exactly when its first occurrence is left of
the cut and its last is at the cut or right of it — so the answer for a
query is the number of distinct primes present plus the largest number
of values straddling a single cut.

### Hint 3

An update only reshapes the spans of two values. Install each span as a
`+1` event just after its first occurrence and a `-1` event just after
its last, and a max-prefix segment tree over the cut positions keeps the
deepest straddle under point updates in logarithmic time.
