# Equalize Circular Window Sums

## Description

You are given an integer array `arr` of length `n`, treated as a ring: the
position after the last is the first, and the position before the first is
the last.

One operation picks a single element and raises or lowers its value by 1.
You may apply as many operations as you want.

There are `n` windows of `k` consecutive positions on the ring, one starting
at each position. Return the least number of operations needed to make all
of these window sums equal.

### Example 1

```text
Input: arr = [2,7,1,7], k = 2
Output: 1
Explanation: Raising the 1 to a 2 leaves [2,7,2,7], and every window of 2
consecutive positions sums to 9.
```

### Example 2

```text
Input: arr = [3,1,4,1,5], k = 2
Output: 7
Explanation: Move every element to 3: the 4 comes down by 1, the 5 by 2, and
each 1 climbs by 2, for a total of 1 + 2 + 2 + 2 = 7. The array [3,3,3,3,3]
has every window of 2 summing to 6.
```

### Example 3

```text
Input: arr = [6,2,6,2], k = 3
Output: 8
Explanation: With k = 3 on a ring of 4 positions, every window misses just
one element, so all four values must finish equal. Raising both 2s to 6
costs 8 and gives [6,6,6,6], where every window sums to 18.
```

### Constraints

- `1 <= k <= arr.length <= 10⁵`
- `1 <= arr[i] <= 10⁹`

## Hints

### Hint 1

Two windows starting at neighbouring positions share `k - 1` elements. If
their sums are equal, the shared part cancels and one relation between two
single elements survives. Which two?

### Hint 2

Chaining that relation around the ring forces whole classes of positions to
carry one constant value each — the classes turn out to be residue classes
modulo a divisor of both `n` and `k`. Meeting that condition is not just
necessary; it already makes every window sum equal.

### Hint 3

Inside one class, unit steps can move the members to any common target, and
the total distance is smallest when the target is the median of the class.
Classes never interact, so their costs simply add.
