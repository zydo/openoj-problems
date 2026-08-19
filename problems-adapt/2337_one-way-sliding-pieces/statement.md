# One-Way Sliding Pieces

## Description

You are given two strings `start` and `target` of the same length, built from
the characters `'L'`, `'R'`, and `'_'`:

- `'L'` and `'R'` mark pieces on a track. A piece `'L'` can slide exactly one
  step left, but only when the cell directly to its left holds a blank; a
  piece `'R'` can slide exactly one step right, under the mirrored condition.
- `'_'` marks a blank cell, which a sliding piece moves into.

Pieces may be moved as many times as you like, one step at a time.

Return `true` if some sequence of slides turns `start` into `target`, and
`false` otherwise.

### Example 1

```text
Input: start = "__LR___", target = "L_____R"
Output: true
Explanation: Slide the L twice: __LR___ -> _L_R___ -> L__R___. Then slide
the R three times: L__R___ -> L___R__ -> L____R_ -> L_____R. Every move goes
in its piece's allowed direction, so the target is reached.
```

### Example 2

```text
Input: start = "_RL_", target = "LR__"
Output: false
Explanation: In start the R stands to the left of the L, while in target it
stands to the right. Pieces cannot pass through one another, so their
left-to-right order can never change.
```

### Example 3

```text
Input: start = "L__R", target = "__LR"
Output: false
Explanation: The R already sits where target wants it, but the L would have
to travel two steps to the right, and an L only ever moves left.
```

### Constraints

- `start.length == target.length`
- `1 <= start.length <= 10⁵`
- Every character of both strings is `'L'`, `'R'`, or `'_'`.

## Hints

### Hint 1

No matter how the slides are ordered, ask whether two pieces can ever swap
places in the left-to-right ordering.

### Hint 2

Delete the blanks from both strings. What must the two remaining sequences
look like relative to each other?

### Hint 3

An L only ever loses ground to the left and an R only ever gains it to the
right, so compare the position of the k-th piece in each string.
