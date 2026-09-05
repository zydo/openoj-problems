# Ball Gathering Costs

## Description

A row holds `n` boxes, described by a binary string `boxes` of length
`n`: position `i` is '1' when the `i`th box currently holds a single
ball and '0' when that box is empty.

One operation slides one ball from its box into a neighboring box —
box `i` neighbors box `j` exactly when `abs(i - j) == 1`. Balls may
pile up: nothing forbids several occupying the same box afterward.

Report an array `answer` of length `n` in which `answer[i]` is the
fewest operations that gather every ball into the `i`th box. Every
entry is judged against the same starting arrangement — no balls
actually move between one evaluation and the next.

### Example 1

```text
Input: boxes = "1010"
Output: [2,2,2,4]
Explanation: Boxes 0 and 2 hold the balls.
1) Box 0: the ball in box 2 reaches it in two hops.
2) Box 1: both balls are one hop away, so 1 + 1 = 2.
3) Box 2: its own ball stays put; the ball in box 0 takes two hops.
4) Box 3: the ball in box 0 needs three hops and the ball in box 2
   one more, so 3 + 1 = 4.
```

### Example 2

```text
Input: boxes = "0111"
Output: [6,3,2,3]
```

### Example 3

```text
Input: boxes = "10010"
Output: [3,3,3,3,5]
```

### Constraints

- `n == boxes.length`
- `1 <= n <= 2000`
- Every character of `boxes` is '0' or '1'.

## Hints

### Hint 1

Relocating a ball from box `i` to box `j` takes exactly `abs(i - j)`
operations, since each hop moves it a single position.

### Hint 2

The balls are independent — the cost of gathering them all at one box
is just the total of their individual distances to it.

### Hint 3

A running sweep can maintain the distance total: shifting the target
box one step right adds one per ball already passed and drops one per
ball still ahead, so two passes over the row fill the whole answer.
