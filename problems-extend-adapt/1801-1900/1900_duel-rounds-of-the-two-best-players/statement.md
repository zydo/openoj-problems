# Duel Rounds of the Two Best Players

## Description

`n` players enter a knockout tournament. They stand in one row, and
their numbers `1` through `n` match their starting positions (player
`1` stands first, player `2` second, and so on).

Play is organized into rounds numbered from `1`. Within a round, the
`i`-th player from the front of the row is drawn against the `i`-th
player from the back, and only the winner of each pairing moves on. If
the row currently holds an odd number of players, the middle player
sits the round out and advances without playing.

- For instance, with the row `3, 5, 6, 9, 12`
    - Player `3` is drawn against player `12`.
    - Player `5` is drawn against player `9`.
    - Player `6` is the middle player and advances untouched.

After a round finishes, the survivors line up again in ascending order
of their numbers.

Players `firstPlayer` and `secondPlayer` are stronger than everyone
else in the field: each is certain to win every match they play until
the round in which they are drawn against each other. When two ordinary
players are paired, however, either one may come out on top — you are
free to decide which.

Return an array holding two round numbers: the earliest round and the
latest round in which `firstPlayer` and `secondPlayer` can be made to
meet, taken over all ways the ordinary pairings can be decided.

### Example 1

```text
Input: n = 11, firstPlayer = 3, secondPlayer = 7
Output: [2,4]
Explanation:
A schedule that settles the duel as early as possible:
Round 1: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11
Round 2: 2, 3, 4, 6, 7, 11
In that second row the pairing (3, 7) occurs, so the duel happens in
round 2. A schedule that stalls it instead:
Round 1: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11
Round 2: 3, 6, 7, 8, 10, 11
Round 3: 3, 7, 10
Round 4: 3, 7
Here the two favorites stay unpaired until round 4.
```

### Example 2

```text
Input: n = 9, firstPlayer = 2, secondPlayer = 8
Output: [1,1]
Explanation: The favorites occupy positions whose numbers sum to
n + 1, so they are drawn against each other immediately, in round 1.
No scheduling of the other matches can change that.
```

### Example 3

```text
Input: n = 22, firstPlayer = 1, secondPlayer = 6
Output: [3,5]
Explanation: Favorable outcomes elsewhere in the row let the two
favorites descend to a pairing by round 3, while the most delaying
choices keep pushing their meeting back to round 5.
```

### Constraints

- `2 <= n <= 28`
- `1 <= firstPlayer < secondPlayer <= n`

## Hints

### Hint 1

Between rounds, all that matters is where the two favorites sit and how
long the row is: their own pairings are forced wins, the middle player
always advances, and every other pair contributes either its front or
its back member. Enumerate those free choices with a bitmask.

### Hint 2

The same (positions, row length) situation reappears across branches,
so compute each state once and remember its answer instead of
resimulating it.
