# Two Prize Windows

## Description

Prizes sit at various spots on a number line. You are given the array
`prizePositions`, listed in non-decreasing order, where
`prizePositions[i]` is the location of the i-th prize — several prizes
may share one location — along with an integer `k`.

You may lay down two segments. Each segment starts at an integer point
`a` and reaches to `a + k`, covering exactly `k` units of the line. You
collect every prize whose location falls inside at least one of your two
segments, endpoints included, and the two segments are free to overlap.

Return the largest number of prizes a pair of segments chosen this way
can collect.

### Example 1

```text
Input: prizePositions = [2,2,4,6,8,8], k = 2
Output: 6
Explanation: Stretch the first segment from 2 to 4 to take the three
prizes at 2, 2, and 4, and the second from 6 to 8 to take the three at
6, 8, and 8 — every prize on the line is collected.
```

### Example 2

```text
Input: prizePositions = [5,5,7,9,9,11], k = 0
Output: 4
Explanation: A zero-length segment covers a single point, so aim the two
at 5 and 9, where prizes are stacked, and collect two from each.
```

### Example 3

```text
Input: prizePositions = [1,3,5,7], k = 10
Output: 4
Explanation: One segment reaching from 1 to 11 already spans every prize,
so the pair collects all four of them.
```

### Constraints

- `1 <= prizePositions.length <= 10⁵`
- `1 <= prizePositions[i] <= 10⁹`
- `0 <= k <= 10⁹`
- `prizePositions` is sorted in non-decreasing order.

## Hints

### Hint 1

Start with a single segment: sliding a width-`k` window along the sorted
positions reveals the best count any one segment can gather.

### Hint 2

Any pair of segments splits the prizes into a left part and a right part
at some point of the line — for each split point, add the best
one-segment take on each side and keep the largest total.
