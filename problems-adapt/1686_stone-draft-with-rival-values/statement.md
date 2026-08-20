# Stone Draft with Rival Values

## Description

Alice and Bob alternate taking stones from a shared pile, **Alice moving
first**, until nothing is left. Every stone carries two numbers: its
worth to Alice and its worth to Bob. A player who takes a stone banks
the amount it is worth to them.

You are given `aliceValues` and `bobValues`, both of length `n`, where
`aliceValues[i]` is the worth of stone `i` to Alice and `bobValues[i]`
its worth to Bob. Both players see both value lists and play perfectly.
Whoever banks more wins; equal banks make a draw.

Report the outcome: `1` if Alice finishes ahead, `-1` if Bob does, `0`
for a draw.

### Example 1

```text
Input: aliceValues = [2,5], bobValues = [3,1]
Output: 1
Explanation: Alice opens on stone 1, banking 5. Bob is left with stone 0
and banks 3. Alice wins 5 to 3.
```

### Example 2

```text
Input: aliceValues = [3,1], bobValues = [1,4]
Output: 0
Explanation: Stone 1 is worth a mere 1 to Alice, but leaving it for Bob
would hand him 4, so Alice takes it anyway. Bob answers with stone 0 and
his 1. Both bank 1: a draw.
```

### Example 3

```text
Input: aliceValues = [1,2,3], bobValues = [4,5,9]
Output: -1
Explanation: Play runs stone 2, stone 1, stone 0: Alice banks 3 then 1
for a total of 4, while Bob banks 5. Bob wins by one.
```

### Constraints

- `n == aliceValues.length == bobValues.length`
- `1 <= n <= 10⁵`
- `1 <= aliceValues[i], bobValues[i] <= 100`

## Hints

### Hint 1

Taking a stone does two things at once: it banks your worth for it, and
it starves the rival of the worth the stone carried for them. The pull
of a stone on whoever moves is therefore more than either face value.

### Hint 2

Set two candidate stones side by side and compare taking them in either
order. Which order serves the mover better turns on the stones' two
worths added together — an exchange argument waiting to happen.

### Hint 3

So lay the stones out by that combined worth, largest first, and let the
players alternate down the line. Alice's banked total minus Bob's gives
the verdict, and its sign is all you need.
