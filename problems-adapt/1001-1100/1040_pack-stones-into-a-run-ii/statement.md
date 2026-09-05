# Pack the Stones Into a Run II

## Description

Stones rest at distinct positions on a number line, given as the integer
array `stones`.

Call a stone an outermost stone while its position is the smallest or the
largest among all the stones. One move picks up an outermost stone and
drops it onto an unoccupied position, with the requirement that the stone
must not be an outermost stone after it lands. To illustrate, when
`stones = [1,2,5]` the stone at `5` is stuck: landing on `0` would make
it the new minimum, landing on `3` would make it the new maximum, and
every other spot is either occupied or runs into one of those two
problems.

The game is over as soon as no legal move remains, which for this game
means the stones have come to occupy consecutive positions.

Return an array `answer` of length 2 where `answer[0]` is the fewest
moves a game can take and `answer[1]` is the most.

### Example 1

```text
Input: stones = [5,1,9]
Output: [2,3]
Explanation: Two moves suffice: move 1 -> 7, then 9 -> 6, leaving the
stones on 5,6,7. The longest game instead pries stones apart one slot at
a time and lasts 3 moves.
```

### Example 2

```text
Input: stones = [12,11,10,9,20]
Output: [2,7]
Explanation: Move 9 -> 14, then 20 -> 13, and the stones fill 10..14.
Stretching the game out as far as possible takes 7 moves.
```

### Example 3

```text
Input: stones = [100,3,1]
Output: [1,96]
Explanation: Dropping 100 onto 2 finishes immediately with 1,2,3. Played
for length instead, the game runs 96 moves.
```

### Constraints

- `3 <= stones.length <= 10^4`
- `1 <= stones[i] <= 10^9`
- The positions in `stones` are all distinct.

## Hints

### Hint 1

For the fewest moves, look for a stretch of `n` consecutive positions
that already holds as many stones as possible. For the most, one side's
head start must be sacrificed entirely — the far side can never be
reached — but every other empty position can be visited.
