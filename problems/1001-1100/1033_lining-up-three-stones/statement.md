# Lining Up Three Stones

## Description

Three stones sit on distinct positions of a number line, given as the
integers `a`, `b`, and `c`. One move picks up a stone occupying an end of
the current spread — the lowest or the highest position — and sets it
down on an empty position strictly between the two outermost stones,
never onto the occupied middle one.

Once the three positions are consecutive, no end stone has a legal
landing spot, so the game is over.

Return the two extremes of play as a pair `[fewest, most]`: the smallest
number of moves that can finish the game, and the largest number of
moves the rules allow before it finishes.

### Example 1

```text
Input: a = 7, b = 10, c = 9
Output: [1,1]
Explanation: The stones at 7, 9, 10 are one move from done however you
play — shifting the 7 into the empty slot at 8 lands 8, 9, 10.
```

### Example 2

```text
Input: a = 2, b = 3, c = 4
Output: [0,0]
Explanation: The positions are already consecutive, so no move is even
legal.
```

### Example 3

```text
Input: a = 1, b = 20, c = 10
Output: [2,17]
Explanation: Eight empty slots lie between 1 and 10 and nine lie between
10 and 20. Parking an end stone beside the middle one and then closing
the last gap takes two moves; stretching play out one step at a time
lasts all 17.
```

### Constraints

- `1 <= a, b, c <= 100`
- `a`, `b`, and `c` are pairwise different.

## Hints

### Hint 1

Sort the positions and read the two gaps of empty slots between
neighbors. The fewest moves is at most 2 — work out when it is exactly
0 and exactly 1. For the most, notice a move can shave exactly 1 off the
spread whenever you want, so play can last precisely as many moves as
there are empty slots.
