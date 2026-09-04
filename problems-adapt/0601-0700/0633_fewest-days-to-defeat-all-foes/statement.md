# Fewest Days to Defeat All Foes

## Description

You are given an integer array `power`, where `power[i]` is the strength of the
`i`th foe. You begin with `0` energy, and your daily energy gain starts at `1`:
each day your energy rises by the current gain amount.

Once your energy has reached a foe's strength you may defeat that foe on the
same day, and defeating a foe does two things:

- your energy drops back to `0`, and
- your daily gain permanently rises by `1`.

You choose which foe (if any) to fight each day. Return the fewest number of
days in which every foe can be defeated.

### Example 1

```text
Input: power = [2,7,1]
Output: 5
Explanation: Fight weakest first. Day 1: energy 1 defeats the strength-1 foe;
gain rises to 2. Day 2: energy 2 defeats the strength-2 foe; gain rises to 3.
Days 3-5: energy climbs 3, 6, 9 and defeats the strength-7 foe on day 5.
```

### Example 2

```text
Input: power = [5]
Output: 5
Explanation: With no earlier kills the gain stays 1, so energy equals the day
number: day 5 is the first day it reaches 5.
```

### Example 3

```text
Input: power = [1,1,1,1]
Output: 4
Explanation: One foe falls each day — the gain grows faster than these foes
can resist it.
```

### Constraints

- `1 <= power.length <= 17`
- `1 <= power[i] <= 10⁹`

## Hints

### Hint 1

At any moment the only thing that matters about the past is _which_ foes are
already defeated — the gain follows from the count, and energy always restarts
at zero.

### Hint 2

With at most 17 foes, every subset of defeated foes is encodable in one integer.

### Hint 3

Let `dp[mask]` be the fewest days to have defeated exactly the foes in `mask`;
from there, defeating a remaining foe of strength `p` costs `ceil(p / gain)`
days at the mask's gain.
