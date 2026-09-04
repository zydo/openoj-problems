# The Potion Brewing Pipeline

## Description

Two integer arrays `skill` (length `n`) and `mana` (length `m`) describe a
potion line: `n` wizards who brew `m` potions strictly in the order listed.
Every potion must visit all `n` wizards one after another, and wizard `i`
spends exactly `skill[i] * mana[j]` time units working on potion `j`.

The line runs with no buffering. The instant a wizard finishes a potion,
that potion moves on to the next wizard — so the entire schedule is pinned
down by the moment each potion starts at wizard 0. Those start moments must
be chosen so that no handoff ever stalls: when a potion arrives at a wizard,
that wizard must have just finished the previous potion.

Return the earliest moment at which the last wizard finishes the last
potion.

### Example 1

```text
Input: skill = [2,3], mana = [4,1]
Output: 23
Explanation: Potion 0 starts at t = 0; wizard 0 finishes it at t = 8 and
wizard 1 at t = 20. Potion 1 cannot start before t = 18, because only then
does its arrival at wizard 1 (t = 18 + 1 * 2 = 20) coincide with wizard 1
finishing potion 0. Wizard 0 hands it on at t = 20 and wizard 1 completes
it at t = 23.
```

### Example 2

```text
Input: skill = [3,2,4], mana = [1,3,2]
Output: 38
Explanation: The potions start at t = 0, t = 3, and t = 20. The last potion
reaches wizard 2 exactly when wizard 2 finishes the second potion (t = 30),
then leaves the line at t = 20 + 2 * 9 = 38.
```

### Example 3

```text
Input: skill = [5], mana = [2,3,4]
Output: 45
Explanation: With a single wizard the potions are simply brewed back to
back: 5 * 2 + 5 * 3 + 5 * 4 = 45.
```

### Constraints

- `n == skill.length`
- `m == mana.length`
- `1 <= n, m <= 5000`
- `1 <= skill[i], mana[i] <= 5000`

## Hints

### Hint 1

Keep `f[i]`, the earliest moment wizard `i` is free after the most recent
potion; that is all the state carried between potions.

### Hint 2

For a potion carrying mana `x`, sweep the wizards left to right starting
from `now = f[0]`, advancing `now = max(now + skill[i - 1] * x, f[i])`. The
potion then finishes at wizard `n - 1` at time `now + skill[n - 1] * x`,
which becomes the new `f[n - 1]`.

### Hint 3

Refresh the remaining free times backwards with
`f[i] = f[i+1] - skill[i+1] * x` for `i` from `n - 2` down to `0`.
