# Sightlines in a Queue

## Description

`n` people stand in a row, numbered `0` to `n - 1` from left to right. The
0-indexed array `heights` of distinct integers gives each person's height:
`heights[i]` belongs to person `i`.

Person `i` has a clear view of person `j` somewhere to the right when nobody
standing between them towers over either endpoint — formally, when `i < j`
and
`min(heights[i], heights[j]) > max(heights[i+1], heights[i+2], ..., heights[j-1])`.

Return an array `answer` of length `n`, where `answer[i]` counts how many
people person `i` can see down the row.

### Example 1

```text
Input: heights = [6,2,9,4,7,3]
Output: [2,1,2,1,1,0]
Explanation: Person 0 sees person 1 and then person 2 — the height-9
person, who also blocks everyone beyond. Person 2 looks over person 3 to
see person 4 as well. Persons 3 and 4 each see just their next neighbor,
and person 5, at the end, sees nobody.
```

### Example 2

```text
Input: heights = [4,9,7,6,10]
Output: [1,2,2,1,0]
Explanation: Person 1 (height 9) sees persons 2 and 4 — person 3 hides
behind person 2 from that angle. Person 4's height 10 lets nobody past
person 3 be seen by anyone further left except through it.
```

### Example 3

```text
Input: heights = [3,1,2]
Output: [2,1,0]
Explanation: Person 0 looks over person 1 to see person 2 as well.
```

### Constraints

- `n == heights.length`
- `1 <= n <= 10^5`
- `1 <= heights[i] <= 10^5`
- Every height is unique.

## Hints

### Hint 1

Testing every pair is quadratic — far too slow at `n = 10^5`. A single
right-to-left pass has to extract each count.

### Hint 2

Sweep from the end toward the front, maintaining the heights seen so far in
a stack that increases from top to bottom.

### Hint 3

When person `i` arrives, pop and count every shorter person on the stack —
exactly the people `i` can see — and if anyone remains, add one more: that
top person is the first taller one, visible over all the popped heads.

### Hint 4

Push `heights[i]` on the stack before moving left, so people further back
can count this person too.
