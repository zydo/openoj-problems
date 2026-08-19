# Rebuild From Subset Sums

## Description

Some array of `n` integers was lost. All that remains is `sums`, the
multiset of its `2ⁿ` subset sums, listed in no particular order and with
repetitions where different subsets share a sum. The empty subset
contributes `0`.

Reconstruct any length-`n` array whose subset sums are exactly `sums`, and
return it.

A subset of an array keeps zero or more of its elements; the sum of a
subset is the total of the elements it keeps. The input is guaranteed to
come from at least one real array, and when several arrays fit, any of them
is accepted.

### Example 1

```text
Input: n = 2, sums = [5,-2,3,0]
Output: [-2,5]
Explanation: The subsets of [-2,5] give sums 0 (neither), -2, 5, and 3
(both). The list [-5,2] would not work: its sums are 0, -5, 2, -3.
```

### Example 2

```text
Input: n = 3, sums = [0,8,4,0,8,4,4,4]
Output: [0,4,4]
Explanation: One element is 0, so several subsets collide on the same sum —
the multiset has repeated values, and [0,4,4] accounts for all of them.
```

### Example 3

```text
Input: n = 3, sums = [-6,-3,1,0,-5,-1,-4,2]
Output: [-1,2,-5]
Explanation: All subsets of [-1,2,-5] together produce exactly these eight
values, negatives included.
```

### Constraints

- `1 <= n <= 15`
- `sums.length == 2ⁿ`
- `-10⁴ <= sums[i] <= 10⁴`
- `sums` is the multiset of subset sums of at least one array

## Hints

### Hint 1

Sort the sums. The gap between the two largest values must be the absolute
value of some element — why?

### Hint 2

That element splits every sum `x` from its partner `x + gap` (the same
subset, with the element added or removed). Peeling off those pairs leaves
subset sums of the remaining `n - 1` elements, so the reconstruction can
recurse.
