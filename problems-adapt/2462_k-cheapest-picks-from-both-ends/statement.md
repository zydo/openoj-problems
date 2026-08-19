# K Cheapest Picks From Both Ends

## Description

You are given an integer array `costs` and two integers `k` and `window`.

Exactly `k` picks are made, one per round. In each round the eligible
elements are those sitting in the first `window` or the last `window`
positions of the elements still present — an element in both ranges counts
once, and once fewer than `2 * window` elements remain, every remaining
element is eligible. Among the eligible elements, the one with the smallest
value is picked and removed; when several share the smallest value, the one
with the smaller position goes first.

Return the sum of the values picked across all `k` rounds.

### Example 1

```text
Input: costs = [9,4,6,1,8,1,5,12,7], k = 3, window = 4
Output: 6
Explanation: The running sum starts at 0.
- Round 1: the first four are [9,4,6,1] and the last four are [1,5,12,7].
  The smallest value 1 appears at positions 3 and 5, so position 3 is picked.
  Sum = 1.
- Round 2: costs = [9,4,6,8,1,5,12,7]. The smallest eligible value is 1 at
  position 4. Sum = 2.
- Round 3: costs = [9,4,6,8,5,12,7]. The first four are [9,4,6,8] and the
  last four are [8,5,12,7]; the smallest is 4. Sum = 6.
```

### Example 2

```text
Input: costs = [6,1,4,2], k = 3, window = 2
Output: 7
Explanation: The running sum starts at 0.
- Round 1: the pools are [6,1] and [4,2]; pick 1. Sum = 1.
- Round 2: costs = [6,4,2]. The pools [6,4] and [4,2] now cover every
  remaining element; pick 2. Sum = 3.
- Round 3: costs = [6,4]. Pick 4. Sum = 7.
```

### Example 3

```text
Input: costs = [7,2,9,4], k = 2, window = 1
Output: 11
Explanation: With window = 1 only the two ends compete:
- Round 1: 7 against 4 — pick 4. Sum = 4.
- Round 2: costs = [7,2,9]. 7 against 9 — pick 7. Sum = 11.
The cheap middle element 2 is never reachable.
```

### Constraints

- `1 <= costs.length <= 10⁵`
- `1 <= costs[i] <= 10⁵`
- `1 <= k, window <= costs.length`

## Hints

### Hint 1

Each round's choice depends only on the cheapest element in each of the two
end groups — which structure answers "cheapest so far" in constant lookup
time?

### Hint 2

Keep one min-heap per end. A round compares the two tops and pops the winner.

### Hint 3

After a pick, the vacated slot at that end is filled from the untouched
middle, keeping each heap at `window` entries — until the middle runs out and
the heaps meet.
