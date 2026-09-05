# Least Starting Power to Clear the Monsters

## Description

You are given an integer array `monsters`, where `monsters[i]` is the
strength of the `i`th monster, faced in order from left to right.

You are also given a 2D integer array `boosts`, where each
`boosts[i] = [li, ri, vi]` grants a temporary bonus of `vi` while fighting
any monster whose index falls in `[li, ri]`. Ranges may overlap, and their
bonuses stack additively.

Starting from some non-negative initial strength, fight the monsters one at
a time:

- Let `bonus` be the sum of every boost covering the current monster's
  index.
- The monster can be defeated only if current strength plus `bonus` is at
  least the monster's strength.
- Defeating a monster then subtracts its strength from your current
  strength, clamped up to `0` if it would go negative. The temporary bonus
  never actually adds to your strength — it only decides whether a fight
  can be won.

Return the smallest initial strength that clears every monster.

### Example 1

```text
Input: monsters = [4,9,12], boosts = [[1,1,8]]
Output: 25
Explanation: Starting at 25: monster 0 needs 4 with no boost, leaving 21;
monster 1 needs 9, boosted by 8 to an effective 17, so 21 clears it,
leaving 12; monster 2 needs 12 with no boost, and 12 exactly clears it. 25
is the least starting value for which every step stays non-negative going
in.
```

### Example 2

```text
Input: monsters = [4,9,12], boosts = [[1,2,8],[1,2,4]]
Output: 4
Explanation: Starting at 4: monster 0 needs 4 with no boost, leaving 0;
monsters 1 and 2 both fall under the two overlapping boosts, an effective
+12, so a strength of 0 clears both — 0 + 12 covers 9, and again covers
12. Strength never has to be more than 4 to start.
```

### Constraints

- `1 <= monsters.length <= 5 * 10⁴`
- `1 <= monsters[i] <= 10⁹`
- `0 <= boosts.length <= 5 * 10⁴`
- `boosts[i] == [li, ri, vi]`
- `0 <= li <= ri < monsters.length`
- `1 <= vi <= 10⁹`

## Hints

### Hint 1

A difference array turns the range updates in `boosts` into the total
temporary bonus active at each monster in one linear pass.

### Hint 2

Just before facing monster `i`, current strength equals
`max(0, initialStrength - prefixSum)`, where `prefixSum` is the combined
strength of every monster already defeated.

### Hint 3

Whenever `bonus[i]` falls short of `monsters[i]`, the initial strength must
be at least `prefixSum + monsters[i] - bonus[i]`; the answer is the largest
such requirement over every monster.
