# Best Jump-Chain Gain

## Description

A line of `n` enchanters stands indexed `0` through `n - 1`, and
enchanter `i` carries `energy[i]`. The values may be negative — some
enchanters drain you instead of powering you up.

A curse dictates the itinerary. Once you draw from enchanter `i`, you
are flung to enchanter `i + k`, then to `i + 2k`, and so on until no
such enchanter remains. You choose only the starting enchanter; the
curse forces every hop after that, and drawing from everyone along the
route is compulsory, drain or not.

Given `energy` and `k`, return the largest total you can end up with.

### Example 1

```text
Input: energy = [4,-3,2,7,-1], k = 2
Output: 7
Explanation:
Starting at index 3 collects that enchanter's 7 alone; earlier starts
drag negatives in behind them — 0, then 2, then 4, gathers only
4 + 2 + (-1) = 5.
```

### Example 2

```text
Input: energy = [-5,-2,-9], k = 1
Output: -9
Explanation:
Every start is forced to walk all the way to the end. Opening at the
last enchanter loses only 9, the least any start can lose.
```

### Example 3

```text
Input: energy = [3,-8,5], k = 2
Output: 8
Explanation:
Starting at index 0, the curse visits 0 and then 2, collecting
3 + 5 = 8.
```

### Constraints

- `1 <= energy.length <= 10⁵`
- `-1000 <= energy[i] <= 1000`
- `1 <= k <= energy.length - 1`

## Hints

### Hint 1

The hops are forced, so a start's total is decided the moment you pick
it. Write `gain[i]` for the total collected by the journey that begins
at `i`.

### Hint 2

The journey from `i` is `energy[i]` plus the journey from `i + k`. One
right-to-left pass fills every `gain[i]` as a suffix sum along its
chain, and the answer is the largest entry.
