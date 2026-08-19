# Largest Polygon Perimeter

## Description

You are given an array `nums` of `n` positive integers.

Pick any `k >= 3` of them to serve as the side lengths of a polygon. A
choice of lengths works exactly when the longest chosen value is smaller
than the sum of all the others chosen with it — that condition is what
lets the sides close up.

The perimeter is the sum of the chosen lengths. Return the largest
achievable perimeter, or `-1` when no choice of sides can form a polygon.

### Example 1

```text
Input: nums = [4,4,4,4]
Output: 16
Explanation: All four sides can be used: 4 < 4 + 4 + 4, so the full sum
16 is a valid perimeter, and no smaller selection can beat it.
```

### Example 2

```text
Input: nums = [2,9,1,30,4,3]
Output: 19
Explanation: The 30 must be set aside — nothing else comes close to
outweighing it (2+9+1+4+3 = 19 < 30). The remaining five lengths satisfy
9 < 1+2+3+4 = 10, so they close into a pentagon of perimeter 19.
```

### Example 3

```text
Input: nums = [3,3,100]
Output: -1
Explanation: With 100 the others sum to only 6, and without it only two
sides remain — one short of a polygon. No valid figure exists.
```

### Constraints

- `3 <= n <= 10^5`
- `1 <= nums[i] <= 10^9`

## Hints

### Hint 1

Sort the values. If a particular value is to be the longest side, which
other values are the best companions for it?

### Hint 2

For a fixed longest side, every smaller value added to the selection only
helps the comparison — so the best selection around a longest side is all
values up to and including it.

### Hint 3

Walk candidate longest sides from the largest value down, carrying the sum
of everything kept so far; drop each candidate that its companions cannot
outweigh, and stop as soon as one closes — remembering that at least three
sides must remain.
