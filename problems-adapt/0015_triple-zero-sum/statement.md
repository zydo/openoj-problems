# Triple Zero Sum

## Description

You are given an integer array `nums`. Collect every triple of values taken
from three different positions whose sum is zero.

Triples are reported as value triples, so two ways of picking the same three
values count once — no repeated triples in the answer.

For a deterministic answer, report each triple with its values in ascending
order, and the list of triples itself in ascending lexicographic order.

### Example 1

```text
Input: nums = [3,-4,2,6,-6,3,-2,4]
Output: [[-6,2,4],[-6,3,3],[-4,-2,6]]
Explanation: -6 pairs with 2 and 4 in one triple and with both 3s in another,
while -4 takes -2 and 6 in the third. The two 3s occupy different positions,
so they may join the same triple.
```

### Example 2

```text
Input: nums = [4,7,9]
Output: []
Explanation: Every value is positive, so no triple can reach zero.
```

### Example 3

```text
Input: nums = [3,-6,3]
Output: [[-6,3,3]]
Explanation: Both 3s may be used — different positions — and with -6 they sum
to zero.
```

### Constraints

- `3 <= nums.length <= 3000`
- `-10⁵ <= nums[i] <= 10⁵`

## Hints

### Hint 1

Three values `x`, `y`, `z` with `x + y + z = 0`: pin one of them and the hunt
for the remaining two is a pair-sum on the rest of the array.

### Hint 2

Sorting first lets each pinned value be followed by a two-pointer sweep that
finds its pairs in linear time.

### Hint 3

Equal values are what create repeated triples. The sorted order lets you step
past runs of equal values — at the pinned index and at both pointers — so each
triple is emitted exactly once.
