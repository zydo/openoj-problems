# Rebuild from Shifted Pairs

## Description

Start with a sorted-by-nothing array `arr` of `n` positive integers and a
positive integer `k`. Form two arrays from it: one holding every
`arr[i] - k`, the other holding every `arr[i] + k`. Then shuffle all `2n`
of those numbers together and throw away the knowledge of which came from
which side.

You are given that shuffled multiset as `nums`. Recover one array `arr` and
one positive `k` that could have produced it; when several pairs `(arr, k)`
qualify, return the answer produced by the smallest feasible `k`, which is
also the valid array whose sorted value sequence is lexicographically
smallest.

**Note:** The test cases guarantee that at least one valid `arr` exists.

### Example 1

```text
Input: nums = [2,2,8,8]
Output: [5,5]
Explanation: With arr = [5,5] and k = 3, the subtracted array is [2,2] and
the added array is [8,8]; together they are exactly nums. No smaller k
works, and with k = 3 the only possible arr is [5,5].
```

### Example 2

```text
Input: nums = [11,5,17,5,23,11]
Output: [8,8,20]
Explanation: With arr = [8,8,20] and k = 3, the subtracted values are
[5,5,17] and the added values are [11,11,23] — a perfect match for nums.
The two 8s show that repeated originals are allowed.
```

### Example 3

```text
Input: nums = [3,9,15,21,6,12]
Output: [6,9,18]
Explanation: With arr = [6,9,18] and k = 3, the subtracted values are
[3,6,15] and the added values are [9,12,21]. Larger candidates for k, such
as pairing 3 with 15, strand the remaining values with no partner.
```

### Constraints

- `2 * n == nums.length`
- `1 <= n <= 1000`
- `1 <= nums[i] <= 10⁹`
- The test cases guarantee that at least one valid `arr` exists.

## Hints

### Hint 1

Fix a candidate `k` first. Can you decide, for one fixed `k`, whether the
whole multiset splits into `(x - k, x + k)` pairs?

### Hint 2

After sorting, the smallest number in `nums` can only ever be a subtracted
value — no original is small enough to produce something below it when
`k` is positive.

### Hint 3

That observation limits the candidates: pair the minimum with each other
value in turn; whenever the difference is positive and even, half of it is
a `k` worth testing.

### Hint 4

Test a candidate `k` greedily on the sorted order: consume the smallest
unused value as the subtracted side and delete one copy of its partner `2k`
higher, using a hash map for the counts. The first `k` whose pass consumes
everything yields the required answer.
