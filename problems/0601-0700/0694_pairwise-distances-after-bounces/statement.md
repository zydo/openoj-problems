# Pairwise Distances After Bounces

## Description

Particles sit on an infinite line at the distinct integer positions given by
`nums`. Each particle then moves one unit per second in the direction given
by the string `s`: `'L'` sends particle `i` toward negative coordinates and
`'R'` toward positive ones.

When particles meet, they bounce: each instantly reverses direction and
carries on, losing no time. Bouncing happens both when two particles occupy
the same point and when they cross while swapping adjacent points.

After `d` seconds, add up the distances between every unordered pair of
particles. Report the total modulo `10⁹ + 7`, since it can be huge.

### Example 1

```text
Input: nums = [-1,1,3], s = "RLL", d = 2
Output: 4
Explanation: After 1 second the particles sit at 0, 0 and 2; the two at 0
bounce and head back the way they came. After 2 seconds they sit at -1, 1
and 1 (the last two have just bounced at 1). The pairwise distances are
|-1 - 1| = 2, |-1 - 1| = 2 and |1 - 1| = 0, totalling 4.
```

### Example 2

```text
Input: nums = [0,4], s = "RR", d = 3
Output: 4
Explanation: Both particles head right, never meet, and end at 3 and 7,
which are 4 apart.
```

### Example 3

```text
Input: nums = [2,5,9], s = "RLR", d = 0
Output: 14
Explanation: No time passes, so the distances are |2 - 5| = 3, |2 - 9| = 7
and |5 - 9| = 4, totalling 14.
```

### Constraints

- `2 <= nums.length <= 10⁵`
- `-2 * 10⁹ <= nums[i] <= 2 * 10⁹`
- `0 <= d <= 10⁹`
- `nums.length == s.length`
- `s` contains only the characters `'L'` and `'R'`
- All positions in `nums` are distinct.

## Hints

### Hint 1

A bounce trades the two particles' identities. If nobody had identities at
all, would anything about the multiset of final positions change?

### Hint 2

With bounces out of the picture, each particle's final point is its start
plus or minus `d` — so the whole simulation collapses to shifting values.

### Hint 3

For the sum of pairwise distances, sort the final points: each point paired
against everything to its left contributes `point · (its rank) − (sum of the
points to its left)`.
