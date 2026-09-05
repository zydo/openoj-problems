# Even-Gap Range Queries

## Description

Call a sequence of numbers **even-gapped** when it has at least two
elements and the gap between each neighboring pair is the same. Written
out, a sequence `s` is even-gapped exactly when
`s[i+1] - s[i] == s[1] - s[0]` for every valid `i`.

For instance, all of these are even-gapped:

```text
2, 6, 10, 14
8, 8, 8, 8
5, 1, -3, -7
```

This one is **not**, because the gaps differ:

```text
4, 4, 6, 9
```

You are given an array `nums` of `n` integers and two arrays `l` and `r`,
each of `m` integers, describing `m` range queries; query `i` covers the
index range `[l[i], r[i]]`, all of them 0-indexed.

Return a boolean array `answer`, where `answer[i]` says whether the slice
`nums[l[i]], nums[l[i]+1], ..., nums[r[i]]` can be reordered into an
even-gapped sequence.

### Example 1

```text
Input: nums = [7,3,11,9,5,30,2,13], l = [0,0,2], r = [2,4,4]
Output: [true,true,false]
Explanation:
Query 0 covers [7,3,11], which reorders to [3,7,11] — a constant gap of 4.
Query 1 covers [7,3,11,9,5], which reorders to [3,5,7,9,11] — a constant
gap of 2.
Query 2 covers [11,9,5]; sorted, that is [5,9,11] with gaps 4 and 2, so
no ordering has constant gaps.
```

### Constraints

- `n == nums.length`
- `m == l.length == r.length`
- `2 <= n <= 500`
- `1 <= m <= 500`
- `0 <= l[i] < r[i] < n`
- `-10^5 <= nums[i] <= 10^5`

## Hints

### Hint 1

Testing one fixed ordering is easy: walk it once and confirm every
neighboring gap equals the first one.

### Hint 2

A multiset of numbers can be arranged into constant gaps exactly when its
sorted order already has constant gaps, so sort each queried slice before
testing.

### Hint 3

Answer the queries independently: pull out the slice, sort it, run the
gap check.
