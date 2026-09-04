# Sequences That Win The Duel

## Description

Alice and Bob play a dueling game that lasts `n` rounds. There are three
creatures — Flame (`'F'`), Tide (`'W'`), and Stone (`'E'`) — and in every
round each player summons one of them. A summon scores a point for its
player exactly when it beats the opposing summon:

- Flame beats Stone — flame scorches stone.
- Tide beats Flame — tide quenches flame.
- Stone beats Tide — stone dams the tide.

Two matching summons cancel out and neither player scores.

Alice's summons are fixed in advance: you are given a string `s` of length
`n`, where `s[i]` is the creature Alice summons in round `i`. Bob answers
with a sequence of creatures of his own choosing, subject to one house
rule — he never summons the same creature in two consecutive rounds.

Bob wins the duel if, after all `n` rounds, his score is strictly greater
than Alice's. Return how many distinct summon sequences for Bob win the
duel, modulo 10⁹ + 7.

### Example 1

```text
Input: s = "EFE"
Output: 5
Explanation: Bob wins with "FWF", "FWE", "FEF", "EWF", or "EWE". For
instance, "FWE" gives Bob 2 points — flame beats Alice's stone, then tide
beats Alice's flame — against 1 for Alice, since her tide beats Bob's
stone in the last round. The legal sequence "FEW" still loses: Bob takes
the first round, but Alice takes rounds 2 and 3.
```

### Example 2

```text
Input: s = "WWEF"
Output: 9
Explanation: The nine winning sequences are "FWFW", "FEFW", "WEFW",
"WEFE", "EFEW", "EWFW", "EWFE", "EWEF", and "EWEW".
```

### Constraints

- `1 <= s.length <= 1000`
- `s[i]` is `'F'`, `'W'`, or `'E'`.

## Hints

### Hint 1

Sweep the rounds once, carrying exactly the state a prefix needs: the
creature Bob summoned last (the house rule depends on it) and the running
difference between Bob's and Alice's points.

### Hint 2

Let `dp[i][last][d]` be the number of ways Bob can answer the first `i`
rounds, ending with creature `last` while holding a point difference of
exactly `d` (Bob minus Alice, possibly negative). To extend a state to
round `i + 1`, try each creature except `last` and move `d` by the
outcome of that pairing against `s[i]`.

### Hint 3

Offset the difference index by `n` so negative leads index cleanly. The
answer is the sum of the final layer over every last creature and every
positive difference.
