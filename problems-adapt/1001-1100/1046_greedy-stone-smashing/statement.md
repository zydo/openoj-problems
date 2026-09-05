# Greedy Stone Smashing

## Description

`stones` records the weights of a pile of stones. The pile is worn down one
collision at a time, and while two or more stones remain the next collision is
forced:

- pull out the two heaviest stones, of weights `a` and `b` with `a >= b`;
- equal weights cancel — both stones are gone for good;
- unequal weights leave a fragment — the lighter stone disappears and the
  heavier one is returned to the pile weighing `a - b`.

Every collision removes at least one stone, so the pile eventually holds one
stone or none. Return the weight of the stone left standing, or `0` if the pile
ran out.

### Example 1

```text
Input: stones = [6,3,9,3,1]
Output: 2
Explanation: 9 and 6 leave a 3, giving [3,3,3,1]. Two of those 3s cancel,
giving [3,1]. Finally 3 against 1 leaves 2.
```

### Example 2

```text
Input: stones = [5,5,2,2]
Output: 0
Explanation: The two 5s cancel and then the two 2s do, so nothing survives.
```

### Example 3

```text
Input: stones = [12]
Output: 12
Explanation: A lone stone never collides with anything.
```

### Constraints

- `stones` holds between 1 and 30 weights
- each weight is an integer from 1 through 1000

## Hints

### Hint 1

Nothing has to be decided here — the rule names the two stones for you every
turn. All you need is a container that hands back its largest element quickly
and accepts the fragment back just as quickly.

### Hint 2

A max-heap does both in logarithmic time. Load every weight into it, then
repeat: take the top two, and push their difference back only when it is
nonzero. Stop once fewer than two stones are left, and report what is on top —
treating an empty heap as `0`.
