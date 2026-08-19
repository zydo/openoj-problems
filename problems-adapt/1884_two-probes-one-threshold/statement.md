# Two Probes, One Threshold

## Description

A tower has `n` floors labeled `1` to `n`, and you are holding two
identical fragile probes.

There is a threshold floor `f` with `0 <= f <= n` about which you know
only this: a probe released from any floor above `f` shatters, while a
probe released from floor `f` or lower survives and may be reused. A
shattered probe is gone for good.

Each move releases one surviving probe from a floor of your choice.
Return the **minimum number of moves** that suffices to determine `f`
with certainty, no matter which value `f` has.

### Example 1

```text
Input: n = 21
Output: 6
Explanation: Release the first probe from floor 6, then 11, then 15, 18,
20, 21 — six releases, each step one floor shorter. If it ever shatters,
the floors just below are few enough for the surviving probe to sweep one
by one within the moves already spent; if it survives all six, f is pinned
down as 21.
```

### Example 2

```text
Input: n = 25
Output: 7
Explanation: Six moves cover at most 1+2+3+4+5+6 = 21 floors, which is not
enough; seven cover 28, which is.
```

### Example 3

```text
Input: n = 6000
Output: 110
Explanation: 109 moves distinguish at most 109·110/2 = 5995 floors; 110
moves distinguish 6105, comfortably past 6000.
```

### Constraints

- `1 <= n <= 10^4`

### Follow-up

The reference method accumulates `1 + 2 + 3 + …` until it reaches `n`.
Can you produce the answer in `O(1)` from a closed formula?

## Hints

### Hint 1

Reason backwards from a move budget rather than forwards from the floors:
with `m` moves and two probes, how tall a tower can you always resolve?
The first release should split the floors so that both possible outcomes
leave work that fits in the moves remaining.

### Hint 2

Let `cover(m)` be the tallest tower resolvable with `m` moves and two
probes. A shatter at the right floor leaves `m - 1` moves and one probe —
at most `m - 1` floors below to sweep linearly; survival leaves `m - 1`
moves and both probes above. So `cover(m) = cover(m-1) + m`.

### Hint 3

Unrolling gives `cover(m) = m(m+1)/2`, so the answer is the least `m`
with `m(m+1)/2 >= n` — reachable by iteration, binary search, or the
quadratic formula.
