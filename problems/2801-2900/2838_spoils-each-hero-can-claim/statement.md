# Spoils Each Hero Can Claim

## Description

A battle pits `n` heroes against `m` monsters. You are given two 1-indexed
arrays of positive integers, `heroes` of length `n` and `monsters` of
length `m`: `heroes[i]` is the power of the `i`-th hero and `monsters[i]`
the power of the `i`-th monster. The `i`-th hero can defeat the `j`-th
monster exactly when `monsters[j] <= heroes[i]`.

A third 1-indexed array `coins` of length `m`, also positive integers,
says how many coins a hero pockets for defeating the `i`-th monster.

Return an array `ans` of length `n` in which `ans[i]` is the greatest
number of coins the `i`-th hero can collect in this battle.

Notes

- Defeating a monster never weakens a hero.
- Any number of heroes may defeat the same monster, but a given hero
  defeats any one monster at most once.

### Example 1

```text
Input: heroes = [3,7], monsters = [2,5,4], coins = [6,1,9]
Output: [6,16]
Explanation: The hero of power 3 handles only the monster of power 2,
worth 6 coins. The hero of power 7 defeats all three monsters, collecting
6 + 1 + 9 = 16 coins.
```

### Example 2

```text
Input: heroes = [9], monsters = [10], coins = [100]
Output: [0]
Explanation: The lone monster outpowers the lone hero, so nothing is
claimable at all.
```

### Example 3

```text
Input: heroes = [5,5], monsters = [5,1,3], coins = [4,8,2]
Output: [14,14]
Explanation: Each hero, at power 5, defeats every monster — the power-5
monster included, since equal power already suffices — pocketing
8 + 2 + 4 = 14 coins apiece.
```

### Constraints

- `1 <= n == heroes.length <= 10⁵`
- `1 <= m == monsters.length <= 10⁵`
- `coins.length == m`
- `1 <= heroes[i], monsters[i], coins[i] <= 10⁹`

## Hints

### Hint 1

Whatever a hero can beat, every monster of equal or smaller power comes
with it — a hero's defeatable set is a prefix by power.

### Hint 2

Sort the monsters by power, carrying each one's coins along with it.

### Hint 3

Build prefix sums of the reordered coins; then a single binary search per
hero — how many monsters sit at or below its power — reads its total
straight off those sums.
