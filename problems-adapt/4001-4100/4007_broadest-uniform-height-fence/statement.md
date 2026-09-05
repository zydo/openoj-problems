# Broadest Uniform-Height Fence

## Description

You have a collection of wooden planks, given as an integer array `planks`
where `planks[i]` is the height of the `i`th plank; every plank is 1 unit
wide.

You want to build a fence out of planks that all share one common height.
Each original plank may either stand on its own, or be welded together with
exactly one other distinct original plank into a single plank whose height
is the sum of the two. An original plank can be used in at most one of
these roles, and using every plank is not required.

Return the greatest width the fence can reach.

### Example 1

```text
Input: planks = [2,4,1,3,5,3,6,1,2]
Output: 4
Explanation: Height 5 gives the widest fence: the one original plank of
height 5 stands as is, one height-1 plank welds to the height-4 plank, and
the two height-2 planks each weld to one of the two height-3 planks —
four planks of height 5 in total.
```

### Example 2

```text
Input: planks = [1,5,9]
Output: 1
Explanation: No two of these planks weld into a third plank's height, and
no two share a height, so the widest fence is a single plank.
```

### Constraints

- `1 <= planks.length <= 1000`
- `1 <= planks[i] <= 10⁹`

## Hints

### Hint 1

Fix a target fence height `h`. Every original plank already at height `h`
can join the fence as is.

### Hint 2

A plank shorter than `h`, at height `x`, can only join by welding to
another plank of height `h - x`.

### Hint 3

Using how often each height occurs, the number of disjoint such pairs is
`min(freq[x], freq[h - x])` — halved when `x` equals `h - x`, since then
both halves of a pair come from the same height bucket.

### Hint 4

Only heights that are either an original plank's height or the sum of two
original planks' heights can ever be a useful target. Check the total —
standalone planks plus welded pairs — at every such height and keep the
largest.
