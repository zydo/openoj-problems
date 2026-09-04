# Most Flavors Kept

## Description

A row of candies stretches out in front of you; the one at index `i` has
flavor `candies[i]`. You must hand `k` consecutive candies from this row
to a sibling, and whatever you hand over is gone from your own stash.
Choosing which stretch to give up is up to you.

What is the largest number of distinct flavors you can still have after
the handover?

### Example 1

```text
Input: candies = [4,1,4,2,3,3], k = 2
Output: 3
Explanation:
Hand over the two consecutive candies at indices 1 and 2, flavors
[1,4]. You keep [4,2,3,3], which carries the 3 distinct flavors 2, 3,
and 4.
```

### Example 2

```text
Input: candies = [5,5,5,1], k = 3
Output: 1
Explanation:
Any block of three consecutive candies contains at most one flavor-1
candy. Handing over indices 1 through 3 (flavors [5,5,1]) leaves you the
candy [5], so one distinct flavor survives.
```

### Example 3

```text
Input: candies = [7,8,7], k = 0
Output: 2
Explanation:
With nothing to hand over, you keep the whole row — the distinct flavors
7 and 8, so 2.
```

### Constraints

- `0 <= candies.length <= 10⁵`
- `1 <= candies[i] <= 10⁵`
- `0 <= k <= candies.length`

## Hints

### Hint 1

Reframe the question: for every block of `k` consecutive candies, count
the flavors that survive outside that block, and maximize over blocks.

### Hint 2

Adjacent blocks share all but one candy on each side — reuse work between
them instead of recounting.

### Hint 3

Sweep a fixed-length window across the row, keeping a per-flavor count of
what lies outside it, and adjust the distinct tally as candies enter and
leave the window.
