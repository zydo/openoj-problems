# Blending Triplets Toward the Goal

## Description

A **triplet** is an array of three integers. You are given a 2D integer
array `triplets`, where `triplets[i] = [ai, bi, ci]` describes the
`ith` triplet, along with a goal array `target = [x, y, z]`.

One blend picks two indices (**0-indexed**) `i` and `j` (`i != j`) and
overwrites `triplets[j]` with
`[max(ai, aj), max(bi, bj), max(ci, cj)]` — each slot becomes the
larger of the two values in that slot.

- For example, blending `triplets[i] = [2, 5, 3]` into
  `triplets[j] = [1, 7, 5]` turns the latter into
  `[max(2, 1), max(5, 7), max(3, 5)] = [2, 7, 5]`.

Apply any number of blends (possibly none). Return `true` if some
element of `triplets` can be made to equal the goal `[x, y, z]`, and
`false` otherwise.

### Example 1

```text
Input: triplets = [[6,1,1],[1,2,1],[1,1,4]], target = [6,2,4]
Output: true
Explanation: Blend the first triplet into the second, making it
[max(6,1), max(1,2), max(1,1)] = [6,2,1]. Blend that result into the
third: [max(6,1), max(2,1), max(1,4)] = [6,2,4], which is the goal.
```

### Example 2

```text
Input: triplets = [[9,1,1],[1,5,1],[1,1,2]], target = [1,5,2]
Output: true
Explanation: The triplet [9,1,1] can never take part — blending it in
would push the first slot to at least 9, past the goal's 1. The other
two blend into [max(1,1), max(5,1), max(1,2)] = [1,5,2], exactly the
goal.
```

### Example 3

```text
Input: triplets = [[2,2,2],[3,3,3]], target = [2,3,2]
Output: false
Explanation: [3,3,3] always overshoots the goal's first slot of 2, so
it is unusable, and [2,2,2] alone can never grow a middle value of 3.
```

### Constraints

- `1 <= triplets.length <= 10⁵`
- `triplets[i].length == target.length == 3`
- `1 <= ai, bi, ci, x, y, z <= 1000`

## Hints

### Hint 1

Blends only ever raise values, so any triplet that already exceeds the
goal in some slot is dead weight — it can never join.

### Hint 2

Among the usable triplets, each goal slot must be supplied by someone;
taking the componentwise max of the survivors answers that in one
pass.
