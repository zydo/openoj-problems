# Maximum Clash-Free Damage

## Description

A mage is preparing a barrage from a spellbook, where every spell
carries a power rating. The ratings interact: unleashing any spell of
rating `x` disturbs the weave so badly that no spell rated `x - 2`,
`x - 1`, `x + 1`, or `x + 2` can be unleashed afterward. Spells sharing
an identical rating can all be unleashed together, and each individual
spell fires at most once.

Given an array `power` of spell ratings, choose spells to unleash so
that no unleashed spell's rating falls within 2 of another's, and
return the largest possible sum of unleashed ratings.

### Example 1

```text
Input: power = [2,2,2,5]
Output: 11
Explanation:
All three rating-2 spells fire together for 6, and rating 5 sits far
enough away to join them, for a total of 11.
```

### Example 2

```text
Input: power = [3,3,6,1]
Output: 12
Explanation:
The two rating-3 spells (6) and the rating-6 spell (6) can coexist,
while the rating-1 spell clashes with rating 3 — best total 12.
```

### Example 3

```text
Input: power = [1,2,3,4,5]
Output: 7
Explanation:
Ratings 2 and 5 are the most valuable clash-free combination.
```

### Constraints

- `1 <= power.length <= 10⁵`
- `1 <= power[i] <= 10⁹`

## Hints

### Hint 1

Whenever one spell of some rating is worth taking, every other spell of
that same rating is worth taking too — copies never clash with each
other.

### Hint 2

Collapse the input into distinct ratings with their multiplicities and
think about dynamic programming over the sorted distinct ratings.

### Hint 3

Walking the sorted distinct ratings, the best answer using a given
rating combines its full multiplicity with the best answer over ratings
at least 3 smaller.
