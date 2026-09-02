# Health to Clear the Gauntlet

## Description

A gauntlet consists of `n` chambers numbered `0` to `n - 1`, taken strictly
in order. The array `damage` gives the toll of each chamber: clearing
chamber `i` drains exactly `damage[i]` health from you.

You also carry one one-shot barrier with strength `armor`. At most once
during the run, in whatever chamber you choose, you can raise it; it
absorbs up to `armor` points of that chamber's damage.

Your health has to stay above `0` throughout the run — dipping to zero or
below ends the attempt.

What is the least starting health from which the gauntlet can be cleared?

### Example 1

```text
Input: damage = [3,1,4,2,5], armor = 3
Output: 13
Explanation: Total toll is 15. Raise the barrier in the last chamber:
it absorbs 3 of that chamber's 5 damage, so only 12 damage ever lands
and 13 health leaves you with 1 after the final chamber.
```

### Example 2

```text
Input: damage = [8], armor = 10
Output: 1
Explanation: The single chamber's whole toll of 8 is absorbed by the
barrier (8 is within its strength 10), so 1 starting health suffices.
```

### Example 3

```text
Input: damage = [0, 0, 7], armor = 5
Output: 3
Explanation: Raise the barrier in the final chamber to absorb 5 of its
7 damage; starting from 3 health you finish the run at exactly 1.
```

### Example 4

```text
Input: damage = [5, 0, 5, 0], armor = 0
Output: 11
Explanation: The barrier absorbs nothing, so all 10 damage lands and
11 health is needed to finish above zero.
```

### Constraints

- `n == damage.length`
- `1 <= n <= 10⁵`
- `0 <= damage[i] <= 10⁵`
- `0 <= armor <= 10⁵`

## Hints

### Hint 1

Every chamber's toll must be paid from your health no matter what. The
only choice is where the single barrier goes — what does placing it in a
given chamber actually save you?

### Hint 2

The barrier saves `min(armor, damage[i])` in chamber `i`. Which chamber
maximizes that saving?
