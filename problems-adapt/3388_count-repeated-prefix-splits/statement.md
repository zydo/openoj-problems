# Count Repeated-Prefix Splits

## Description

You are given an integer array `nums`.

Cut `nums` at two boundaries to obtain three consecutive, non-empty pieces
`a`, `b`, `c` that join back into `nums` in that order. The cut counts when a
piece repeats at the front of the piece that follows it:

- `a` is a prefix of `b` — the entries of `a` equal the first `a.length`
  entries of `b`, or
- `b` is a prefix of `c` in the same sense.

Two cuts are different whenever either boundary differs. Return how many cuts
count.

### Example 1

```text
Input: nums = [2,1,2,2]
Output: 1
Explanation: The single cut that counts is [2,1] + [2] + [2]. The middle
piece equals the start of the final piece.
```

### Example 2

```text
Input: nums = [3,3,1,3,3]
Output: 4
Explanation: The cuts that count are [3] + [3] + [1,3,3], [3] + [3,1] + [3,3],
[3] + [3,1,3] + [3], and [3,3,1] + [3] + [3]. The first three place a single
3 at the head of the middle piece; the last has the middle piece repeating at
the head of the final one.
```

### Example 3

```text
Input: nums = [4,5,6,7]
Output: 0
Explanation: No piece begins with the piece in front of it, so nothing counts.
```

### Constraints

- `1 <= nums.length <= 5000`
- `0 <= nums[i] <= 50`

## Hints

### Hint 1

The two boundaries fix everything: with cuts after `i` and after `j`, the
pieces are `nums[0:i]`, `nums[i:j]`, `nums[j:n]`, where `1 <= i < j < n`.

### Hint 2

Both counting rules ask "does one stretch of entries equal the start of
another?" Rephrase each as a query about two suffixes of `nums` and precompute
the answers for all pairs at once.

### Hint 3

When `a` is a prefix of `b`, every boundary from `2*i` onward also counts, so
add them in bulk; sweep the remaining `j` values individually, and never count
a cut under both rules.
