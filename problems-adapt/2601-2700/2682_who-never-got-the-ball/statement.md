# Who Never Got the Ball

## Description

Some friends sit around a circle, numbered `1` through `n` in clockwise
order — stepping clockwise from friend `i` lands on friend `i + 1` (wrapping
from friend `n` back to friend `1`). They play a passing game with these
rules:

- Friend `1` starts out holding the ball.
- On the first turn, the holder sends the ball `k` seats clockwise.
- On the second turn, the new holder sends it `2 * k` seats clockwise.
- In general, turn `i` moves the ball `i * k` seats clockwise from wherever
  it currently is.

The game stops the moment some friend receives the ball for the second
time. Everyone who never received it counts as a loser.

Given `n` and `k`, return the losers as an array `answer` sorted in
increasing order.

### Example 1

```text
Input: n = 6, k = 1
Output: [3,5,6]
Explanation: Friend 1 passes 1 seat to friend 2, friend 2 passes 2 seats to
friend 4, and friend 4 passes 3 seats to friend 1 — who has now had the
ball twice, so the game ends. Friends 3, 5, and 6 were never reached.
```

### Example 2

```text
Input: n = 3, k = 3
Output: [2,3]
Explanation: The very first pass travels 3 seats, which is once around the
whole circle, so the ball returns to friend 1 and the game ends
immediately.
```

### Example 3

```text
Input: n = 7, k = 5
Output: [4,5,7]
Explanation: The ball travels 1 -> 6 -> 2 -> 3, and the fourth pass lands
back on friend 2. Friends 4, 5, and 7 never touched it.
```

### Example 4

```text
Input: n = 5, k = 4
Output: [2,4]
Explanation: The ball travels 1 -> 5 -> 3, and the third pass lands back on
friend 1. Friends 2 and 4 never touched it.
```

### Constraints

- `1 <= k <= n <= 50`

## Hints

### Hint 1

Nothing needs to be clever here — replay the passes exactly as described,
tracking who has held the ball, and stop at the first repeat.
