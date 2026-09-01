# Mailbox Placement Cost

## Description

Houses stand along one street, `houses[i]` giving the position of the
`i`-th house, and an integer `k` says how many mailboxes may be
installed. Place the `k` mailboxes anywhere along the street; every
household then walks to its nearest mailbox.

Return the smallest possible total of those walking distances, over all
placements. The answer is guaranteed to fit in a 32-bit integer.

### Example 1

![diagram](figures/1478-1.svg)

```text
Input: houses = [1,4,8,10,20], k = 3
Output: 5
Explanation: Install the mailboxes at 3, 9 and 20. Each house reaches
its nearest mailbox for a total of
|3-1| + |4-3| + |9-8| + |10-9| + |20-20| = 5, and no placement does
better.
```

### Example 2

![diagram](figures/1478-2.svg)

```text
Input: houses = [2,3,5,12,18], k = 2
Output: 9
Explanation: Install the mailboxes at 3 and 14, giving
|2-3| + |3-3| + |5-3| + |12-14| + |18-14| = 9, the smallest possible
total.
```

### Constraints

- `1 <= k <= houses.length <= 100`
- `1 <= houses[i] <= 10⁴`
- All the positions in `houses` are distinct.

## Hints

### Hint 1

Serving everyone with a single mailbox works best from the median of
the house positions.

### Hint 2

Generalize with dynamic programming: after sorting, hand each mailbox
one contiguous run of houses and price the run by its median.
