# Furthest Drift From Zero

## Description

A walk begins at 0 on a number line and follows the string `moves`, whose
every character is `'L'`, `'R'`, or `'_'`. Character `i` dictates what the
i-th step may do:

- step one unit to the left if `moves[i]` is `'L'` or `'_'`
- step one unit to the right if `moves[i]` is `'R'` or `'_'`

Every `'_'` is a free choice — you decide its direction as you take that
step. How far from 0 can the walk finish? Return the greatest distance
reachable after all the steps.

### Example 1

```text
Input: moves = "RR__LL"
Output: 2
Explanation: The committed steps balance out — two rights against two
lefts — so the play is to spend both free steps rightward: "RRRRLL"
ends at point 2, and no play reaches farther.
```

### Example 2

```text
Input: moves = "L_L_R"
Output: 3
Explanation: Taking both free steps to the left turns the string into
"LLLLLR", which ends at point -3, three units from the origin.
```

### Example 3

```text
Input: moves = "_"
Output: 1
Explanation: A single free step, taken in either direction.
```

### Constraints

- `1 <= moves.length <= 50`
- `moves` consists only of the characters `'L'`, `'R'`, and `'_'`.

## Hints

### Hint 1

In an optimal play every free step goes to the same side — a mixture only
lets some free steps cancel against the others.

### Hint 2

Count the committed `'L'`s and `'R'`s. Whichever side already leads,
spend every `'_'` on that side; the answer is the size of the lead plus
the count of free steps.
