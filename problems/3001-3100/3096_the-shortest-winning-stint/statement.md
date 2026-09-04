# The Shortest Winning Stint

## Description

Alice and Bob play through the same `n` levels one after the other. The
binary array `possible` of length `n` says in advance how each level
treats whoever attempts it: `possible[i] == 1` marks a level that can
always be cleared, and `possible[i] == 0` marks a level neither player can
clear. Clearing a level earns its player 1 point, and failing it costs
that player 1 point.

Alice opens with an unbroken run of levels beginning at level 0, and Bob
then plays every level she leaves behind him. Each wants the larger final
score, so Alice looks for the shortest opening run that leaves her
strictly ahead of Bob once all `n` levels are played. Report that length,
or -1 if no run length can put her in front. Both players must play at
least one level.

### Example 1

```text
Input: possible = [1,0,0,1,1,0]
Output: 1
Explanation: Opening with just level 0 gives Alice 1 point. Bob then
fails levels 1 and 2, clears levels 3 and 4, and fails level 5, ending on
-1 - 1 + 1 + 1 - 1 = -1 points. Alice is already ahead, so a run of one
level is all she needs.
```

### Example 2

```text
Input: possible = [1,1,0,0,1,1]
Output: 2
Explanation: A one-level run leaves the game level: Alice holds 1 point
while Bob's five remaining levels net him +1 - 1 - 1 + 1 + 1 = 1 point as
well. After two levels Alice has 1 + 1 = 2 points against Bob's
-1 - 1 + 1 + 1 = 0, which is the first split that puts her strictly in
front.
```

### Example 3

```text
Input: possible = [0,1,1,0]
Output: 3
Explanation: Level 0 is unwinnable, so Alice's score starts at -1 and a
one-level run trails Bob's 1 + 1 - 1 = 1. Taking level 1 as well squares
the match at 0 - 0. Only after clearing level 2 does Alice reach
-1 + 1 + 1 = 1 point against Bob's -1, and that run of 3 levels is her
first winning split.
```

### Example 4

```text
Input: possible = [0,1]
Output: -1
Explanation: The only way to split two levels is one apiece. Alice fails
level 0 for -1 point while Bob clears level 1 for 1 point, so Alice can
never finish ahead.
```

### Constraints

- `2 <= n == possible.length <= 10⁵`
- `possible[i]` is either 0 or 1.

## Hints

### Hint 1

Turn every entry into a signed score — 1 for a clearable level, -1 for an
impossible one — and restate the whole question in terms of prefix sums of
that array.

### Hint 2

An opening run of length t wins exactly when its signed total is strictly
larger than the signed total of the remainder, which is the same as twice
the first t signed values exceeding the overall total. Sweep t upward
without ever consuming the last level, and keep the first t that wins.
