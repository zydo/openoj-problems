# Richest Two-Lane Ride

## Description

A vehicle travels along a two-lane road laid out in one-mile stretches. You
are given two integer arrays `lane1` and `lane2` of equal length, where
`lane1[i]` and `lane2[i]` are the fare for stretch `i` in the respective
lane — a positive entry is collected, a negative entry is a toll paid.

A ride starts at any stretch, always beginning in lane 1, and covers one or
more consecutive stretches before leaving the road. Each stretch driven
adds that lane's fare to the ride's total, and the vehicle may cross
between the lanes at most twice — including right at entry or just before
leaving.

Return the largest total a single ride can achieve.

### Example 1

```text
Input: lane1 = [2,-3,-9,4], lane2 = [-4,8,1,2]
Output: 15
Explanation: Drive stretch 0 in lane 1, cross to lane 2 for stretches 1 and
2, then cross back for stretch 3. The ride collects 2 + 8 + 1 + 4 = 15.
```

### Example 2

```text
Input: lane1 = [3,-1,-2,-2], lane2 = [0,5,6,-7]
Output: 14
Explanation: Enter at stretch 0 in lane 1, cross to lane 2 immediately
after, and leave the road before stretch 3. The ride collects
3 + 5 + 6 = 14.
```

### Example 3

```text
Input: lane1 = [-6,-5,-4], lane2 = [-2,3,4]
Output: 7
Explanation: Both lanes lose money at stretch 0, so the ride starts at
stretch 1 and crosses to lane 2 at once. It stays there, collecting
3 + 4 = 7.
```

### Example 4

```text
Input: lane1 = [-2,-7,-6], lane2 = [7,-1,6]
Output: 12
Explanation: Entering at stretch 0 and crossing immediately makes the whole
road one lane-2 ride. The toll at stretch 1 is worth paying for the 7 and 6
around it: 7 - 1 + 6 = 12.
```

### Example 5

```text
Input: lane1 = [-9], lane2 = [-3]
Output: -3
Explanation: Every ride covers at least one stretch, so the best available
is a single losing stretch in lane 2.
```

### Constraints

- `1 <= lane1.length == lane2.length <= 10⁵`
- `-10⁹ <= lane1[i], lane2[i] <= 10⁹`

## Hints

### Hint 1

At every stretch the vehicle sits in exactly one lane with some number of
crossings left — that pair is the whole state.

### Hint 2

Between neighboring stretches only three things can happen: stay, cross, or
(relevant only at the start) begin a brand-new ride.

### Hint 3

Let the ride end anywhere, so the answer is the largest value any state
ever reaches, not the value at the last stretch.
