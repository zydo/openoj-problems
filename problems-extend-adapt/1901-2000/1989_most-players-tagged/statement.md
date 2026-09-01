# Most Players Tagged

## Description

A lineup of `n` players stands in a row, described by the 0-indexed
array `team` of zeros and ones: a `1` marks a tagger, a `0` marks an
ordinary player. Everyone carries a reach of `dist` positions. A tagger
standing at index `i` can tag at most one ordinary player whose index
falls anywhere in `[i - dist, i + dist]`, and every player can be tagged
by at most one tagger.

Playing for the taggers, return the largest number of ordinary players
that can end up tagged when each tagger picks their target well.

### Example 1

```text
Input: team = [1,0,0,0,1], dist = 2
Output: 2
Explanation: The tagger at index `0` covers positions `-2` through `2`,
and the tagger at index `4` covers `2` through `6`. Pairing them with
the players at indices `1` and `3` tags two people, and a third is
impossible — there are only two taggers.
```

### Example 2

```text
Input: team = [0,1,0,1], dist = 1
Output: 2
Explanation: The tagger at index `1` covers positions `0` through `2`,
so it takes the player at index `0`; the player at index `2` then falls
to the tagger at index `3`. Both players end up tagged.
```

### Example 3

```text
Input: team = [1,1,0,0], dist = 1
Output: 1
Explanation: The tagger at index `1` reaches the player at index `2`.
The player at index `3` lies outside every tagger's reach, so one tag
is all the lineup can produce.
```

### Constraints

- `1 <= team.length <= 10⁵`
- `0 <= team[i] <= 1`
- `1 <= dist <= team.length`

## Hints

### Hint 1

Collect the tagger positions and the player positions separately; both
lists come out already sorted, which invites walking them together.

### Hint 2

Move through both lists from the left. A player left of the current
tagger's reach can never be caught — every later tagger stands even
further right — so drop them and move on.

### Hint 3

A player right of the current tagger's reach is safe from that tagger,
so this tagger is spent: advance to the next tagger. Whenever the
player does fall inside the reach, pair the two and advance both.
