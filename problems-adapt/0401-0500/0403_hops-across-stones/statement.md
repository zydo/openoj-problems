# Hops Across Stones

## Description

`stones` gives the positions of stones laid along a line, strictly increasing,
with the first stone sitting at position 0. A marker starts on that first stone
and travels forward only, and every hop has to finish on a stone — coming down
anywhere else is not allowed.

The opening hop covers exactly one unit. Thereafter, if the hop just made
covered `k` units, the next one covers `k - 1`, `k`, or `k + 1` units, and it
must still be at least one unit long.

Return `true` if some run of hops finishes on the final stone of the list, and
`false` if none does. Stones in between may be flown over.

### Example 1

```text
Input: stones = [0,1,3,5,8,11,13,15]
Output: true
Explanation: Hops of 1, 2, 2, 3, 3, 4 visit 0, 1, 3, 5, 8, 11, 15. Each hop is
within one unit of the one before it, and the stone at 13 is simply flown over.
```

### Example 2

```text
Input: stones = [0,1,2,4,6,9,13,20]
Output: false
Explanation: Position 13 can only be reached by a hop of 4, so the hop leaving
it covers 3, 4, or 5 units and lands at 16, 17, or 18. The last stone stays out
of reach.
```

### Example 3

```text
Input: stones = [0,2,4]
Output: false
Explanation: The opening hop covers one unit, and nothing sits at position 1.
```

### Constraints

- `2 <= stones.length <= 2000`
- `0 <= stones[i] <= 2^31 - 1`
- `stones[0] == 0`
- The entries of `stones` increase strictly from left to right.

## Hints

### Hint 1

Standing on a particular stone does not by itself say what moves are available:
the three lengths you may pick next are decided by the length of the hop that
delivered you. Carry both facts as your state.

### Hint 2

Give every stone the set of hop lengths that are able to finish on it, seeded so
that the start admits exactly an opening hop of one. Sweep the stones left to
right; each recorded length offers three candidate landing positions, and a
position-to-index map says whether a candidate is really a stone. The final
stone's set decides the answer.

### Hint 3

A hop length climbs by at most one each time the marker lands, so after `i`
landings no length exceeds `i`. That caps each stone's set at `n` entries and
the whole table at `n²` — small enough at 2000 stones, and the reason a
brute-force search over hop choices is the wrong shape.
