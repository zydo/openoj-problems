# Best K Cards From The Ends

## Description

A row of cards lies face up, each showing a number of points; the points are
given in the integer array `cardPoints`, one entry per card.

Repeatedly, you may remove the leftmost or the rightmost card of the row and
add its points to your tally. You must remove exactly `k` cards in total.

Given `cardPoints` and the integer `k`, return the largest tally reachable.

### Example 1

```text
Input: cardPoints = [3,1,4,1,5,9,2], k = 3
Output: 16
Explanation: The best play takes the three rightmost cards, 2, then 9, then 5,
for 5 + 9 + 2 = 16.
```

### Example 2

```text
Input: cardPoints = [8,1,1,9], k = 2
Output: 17
Explanation: Take 8 from the left end and 9 from the right end. The best pick
here draws one card from each side.
```

### Example 3

```text
Input: cardPoints = [4,8,15,16], k = 4
Output: 43
Explanation: Every card must be taken, so the tally is the sum of the whole
row.
```

### Constraints

- `1 <= cardPoints.length <= 10^5`
- `1 <= cardPoints[i] <= 10^4`
- `1 <= k <= cardPoints.length`

## Hints

### Hint 1

Fix how many cards you take from the left, say `x`; the rest, `k - x`, must
come from the right. What does that leave in the row?

### Hint 2

The leftovers always form one unbroken middle stretch of length `n - k`. So
the tally is the row's total minus the sum of that stretch, and maximizing the
tally means finding the cheapest stretch of that length.

### Hint 3

A stretch of fixed length can be slid along the row one card at a time, each
slide swapping one card for another — a running sum needs no recomputation.
