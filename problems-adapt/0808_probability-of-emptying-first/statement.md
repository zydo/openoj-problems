# Probability of Emptying First

## Description

Two piles, `A` and `B`, each begin holding `n` units. A step draws one of four
moves, uniformly at random and independently of every earlier draw:

- take `100` units from `A` and `0` from `B`
- take `75` from `A` and `25` from `B`
- take `50` from `A` and `50` from `B`
- take `25` from `A` and `75` from `B`

Both halves of a move happen together, and a half that asks for more than its
pile still holds takes whatever is left there and no more. Note that the list
is deliberately lopsided: nothing in it leaves `A` alone while stripping `100`
from `B`.

Steps repeat until a step finishes with at least one pile at zero, and the
run stops there. Return the chance that `A` is the pile that ran out, scoring
a step that empties both piles at once as half a success.

A returned value is accepted when it lies within `10^-5` of the true one.

### Example 1

```text
Input: n = 20
Output: 0.62500
Explanation: Every move takes at least 25 from A, so the run lasts one step.
The first move empties A alone; each of the other three drains both piles at
once, since B holds less than the 25 or more asked of it. That is
0.25 * (1 + 0.5 + 0.5 + 0.5).
```

### Example 2

```text
Input: n = 200
Output: 0.79688
Explanation: Runs of up to eight steps are possible here, and summing over all
of them gives 0.796875.
```

### Example 3

```text
Input: n = 3000
Output: 0.99975
Explanation: A drains faster on average, so with piles this deep it is nearly
certain to finish first.
```

### Constraints

- `n` is an integer with `0 <= n <= 10^9`

## Hints

### Hint 1

Every quantity in the problem — the starting size and all eight amounts — is a
multiple of `25`. Rescale, and a state is a pair of small counts rather than a
pair of volumes.

### Hint 2

From a state, the answer is the average of the answers of the four states one
move away, with piles that have gone to zero (or below) resolved directly:
`A` alone gives `1`, `B` alone gives `0`, both together give `0.5`. Two
coordinates and repeated subproblems point at a table.

### Hint 3

The four moves take an average of `62.5` from `A` and `37.5` from `B`, so the
probability climbs toward `1` as the piles grow. Past a few thousand units the
gap to `1` is smaller than the tolerance, which caps the table you actually
have to build.
