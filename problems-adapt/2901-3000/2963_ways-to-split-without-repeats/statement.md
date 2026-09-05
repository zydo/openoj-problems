# Ways To Split Without Repeats

## Description

Cut a 0-indexed array `nums` of positive integers into one or more
contiguous pieces. The cut is clean when no value occurs in two different
pieces — once a number lands in some piece, every other copy of it has to
live in that same piece.

Count the clean ways to split `nums`. The total can be enormous, so
return it modulo 10⁹ + 7.

### Example 1

```text
Input: nums = [3,1,4,1,5]
Output: 4
Explanation: The value 1 appears at indices 1 and 3, so one piece has
to span both — no cut may fall inside indices 1..3. Cuts can only go
between the 3 and the first 1 (after index 0) or between the second 1
and the 5 (after index 3). Each free gap is chosen independently, for
2 × 2 = 4 splits: ([3],[1,4,1],[5]), ([3],[1,4,1,5]), ([3,1,4,1],[5])
and ([3,1,4,1,5]).
```

### Example 2

```text
Input: nums = [6,6,6,6]
Output: 1
Explanation: Any boundary would separate equal 6s into two pieces, so
the only clean split keeps the whole array together.
```

### Example 3

```text
Input: nums = [10,20,30]
Output: 4
Explanation: Every value is distinct, so both gaps are free and
2² = 4 splits exist: ([10],[20],[30]), ([10],[20,30]), ([10,20],[30])
and ([10,20,30]).
```

### Constraints

- `1 <= nums.length <= 10⁵`
- `1 <= nums[i] <= 10⁹`

## Hints

### Hint 1

A piece that contains a value must contain every occurrence of it.

### Hint 2

A gap is safe to cut exactly when every value seen so far has already
shown its final occurrence. A running "furthest last occurrence" marker
finds those gaps in one pass.

### Hint 3

Every safe gap is an independent cut-or-no-cut decision. With g safe
gaps, how many splits is that, modulo 10⁹ + 7?
