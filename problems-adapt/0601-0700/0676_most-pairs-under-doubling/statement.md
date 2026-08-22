# Most Pairs Under Doubling

## Description

You are given an integer array `nums`. Every position starts out unused, and
you may repeat this move as often as you like:

- Choose two distinct unused positions `i` and `j` with `2 * nums[i] <= nums[j]`,
  and spend both.

Return the largest number of positions you can spend.

### Example 1

```text
Input: nums = [4,9,3,6]
Output: 4
Explanation: Pair the 3 with the 6 (2*3 <= 6) and the 4 with the 9 (2*4 <= 8
<= 9). All four positions are spent.
```

### Example 2

```text
Input: nums = [6,4,7]
Output: 0
Explanation: No value is at least twice another: 2*4 = 8 exceeds both 6 and
7. No move is legal, so nothing can be spent.
```

### Example 3

```text
Input: nums = [2,10,4,7,3]
Output: 4
Explanation: Pair 2 with 7 (2*2 <= 7) and 3 with 10 (2*3 <= 10). The middle
value 4 has no partner left, so four of the five positions are spent.
```

### Constraints

- `1 <= nums.length <= 10⁵`
- `1 <= nums[i] <= 10⁹`

## Hints

### Hint 1

Sort first. If `p` pairs are formed, the cheap side of those pairs can be
taken as the `p` smallest values and the dear side as the `p` largest — any
other choice squanders large values on easy pairs.

### Hint 2

With that settled, pair in order: the smallest remaining cheap value with
the smallest dear value that covers it. Skipping ahead never helps — a value
that fits under a larger partner also fits under a smaller one.

### Hint 3

At most half the positions can be on the cheap side, so the dear pointer can
start at the midpoint of the sorted array.

### Hint 4

Each successful pairing advances the cheap pointer; the answer is twice the
number of advances.
