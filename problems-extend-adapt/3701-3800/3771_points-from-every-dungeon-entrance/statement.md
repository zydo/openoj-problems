# Points From Every Dungeon Entrance

## Description

A positive integer `hp` and two positive, 1-indexed arrays `damage` and
`requirement` are given.

A dungeon holds `n` trap rooms numbered `1` through `n`. Walking into
room `i` first drains `damage[i]` health points; if the health left
afterwards is still at least `requirement[i]`, that room pays out one
point.

A run picks an entrance room `j` and walks forward through rooms
`j, j + 1, ..., n`, always starting from `hp` health. Let `score(j)` be
the number of points such a run collects.

Return `score(1) + score(2) + ... + score(n)` — the points banked by
entering at every possible entrance.

Rooms cannot be skipped, and a run goes on even once the health total
has dropped to zero or below.

### Example 1

```text
Input: hp = 8, damage = [2,4,3], requirement = [5,1,2]
Output: 4
Explanation: The per-run scores are score(1) = 2, score(2) = 1, and
score(3) = 1, for a total of 4. Walking through score(1): the entrance
room drains 2 leaving 6, which clears the requirement of 5 for a point;
the next room drains 4 leaving 2, clearing the requirement of 1 for a
second point; the last room drains 3 leaving -1, short of the required 2.
```

### Example 2

```text
Input: hp = 5, damage = [1,1,1], requirement = [10,1,1]
Output: 5
Explanation: Room 1's requirement of 10 is out of reach for every run,
so only rooms 2 and 3 ever pay. Runs from entrances 1 and 2 each earn 2
points, the run from entrance 3 earns 1, and 2 + 2 + 1 = 5.
```

### Constraints

- `1 <= hp <= 10⁹`
- `1 <= n == damage.length == requirement.length <= 10⁵`
- `1 <= damage[i], requirement[i] <= 10⁴`

## Hints

### Hint 1

Prefix sums over `damage` make any run's health arithmetic: the health
left after rooms `a+1..b` is `hp - (pref[b] - pref[a])`.

### Hint 2

Count pairs instead of runs. The answer is the number of start/room
pairs `(a, b)` whose health clears the requirement, out of the
`n * (n + 1) / 2` pairs there are.

### Hint 3

Rearranged, room `b` pays a point exactly when
`pref[a] >= requirement[b] - hp + pref[b]`.

### Hint 4

Sweep `b` left to right while holding the earlier prefix sums in a
Fenwick tree (or a sorted list), counting those strictly below the
threshold; subtract the failing pairs from `n * (n + 1) / 2`.
