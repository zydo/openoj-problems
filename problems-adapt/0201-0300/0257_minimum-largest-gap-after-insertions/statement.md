# Minimum Largest Gap After Insertions

## Description

An integer array `positions` lists points sitting on a line, given in strictly
increasing order. You may drop `k` further points onto that line, each anywhere
you please — coordinates need not be integers, and several may share a spot.

Once the `k` points are placed, look at the distances between neighbouring
points and take the largest of them. Choose the placement that makes this
largest distance as small as it can be, and return that value.

A returned value is accepted when it differs from the true one by less than
`10⁻⁶`.

### Example 1

```text
Input: positions = [0,1,2,3,4,5,6,7,8,60], k = 4
Output: 10.40000
Explanation: Everything to the left is already tightly packed; only the run of
52 from 8 to 60 is worth attention. Four points cut it into five equal stretches
of 10.4 each, which beats any uneven cut and any placement that wastes a point
on the short runs.
```

### Example 2

```text
Input: positions = [0,6,12,18,24,30,36,42,48,54], k = 9
Output: 3.00000
Explanation: There are nine equal runs of 6 and nine points to spend, so every
run is halved and the largest distance drops to 3. Doubling up anywhere would
leave some run of 6 untouched.
```

### Example 3

```text
Input: positions = [3,5,9,10,14,15,21,22,30,31], k = 2
Output: 4.00000
Explanation: The runs measure 2, 4, 1, 4, 1, 6, 1, 8, 1. Halving the 8 and
halving the 6 leaves 4 as the largest, and two points are not enough to bring
every run below 4, since the two runs of 4 would then need cutting as well.
```

### Constraints

- `10 <= positions.length <= 2000`
- `0 <= positions[i] <= 10⁸`
- the entries of `positions` strictly increase
- `1 <= k <= 10⁶`

## Hints

### Hint 1

Instead of searching for a placement, search for the answer itself. Ask a
yes-or-no question about a candidate distance `D`: can `k` points hold every
neighbouring distance down to `D` or less?

### Hint 2

That question splits across the runs between consecutive given points, because
a point dropped inside one run never helps another. A run of length `g` has to
be chopped into pieces no longer than `D`, which takes as few as `⌈g / D⌉ - 1`
extra points, and the candidate survives when those counts add up to `k` or
fewer.

### Hint 3

Raising `D` can only lower each of those counts, so the yes answers form the
upper stretch of the number line and the boundary can be found by repeated
halving. Start from `0` and the widest existing run — the latter always answers
yes, since it needs no points at all.
