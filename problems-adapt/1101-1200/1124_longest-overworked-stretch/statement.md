# Longest Overworked Stretch

## Description

The array `hours` lists how many hours a worker put in on each of `n`
consecutive days. A day counts as **heavy** when its entry is strictly greater
than `8`; every other day is **light**.

A block of consecutive days is called **overworked** when the heavy days inside
it strictly outnumber the light ones. Return how many days the longest
overworked block spans, or `0` if no block qualifies.

### Example 1

```text
Input: hours = [10,7,12,11,5,4]
Output: 5
Explanation: Days 1 through 5 hold three heavy days (10, 12, 11) against two
light ones. Taking day 6 as well levels the counts, so the block stops there.
```

### Example 2

```text
Input: hours = [3,8,8,2]
Output: 0
Explanation: An 8-hour day is not heavy, so no block contains a heavy day at
all.
```

### Example 3

```text
Input: hours = [4,3,9,10,2,1,1,12]
Output: 3
Explanation: Days 3 through 5 carry two heavy days (9 and 10) and one light
day. Widening that block in either direction loses the majority.
```

### Constraints

- `hours` holds at least `1` and at most `10^4` entries
- every entry lies in `0 <= hours[i] <= 16`

## Hints

### Hint 1

Score a heavy day `+1` and a light day `-1`. A block is overworked exactly when
its score adds up to a positive number, so you are looking for the longest
subarray with a positive sum.

### Hint 2

With running totals, "the block ending at `j` has a positive score" becomes
"`total[j]` exceeds the total just before the block starts". Each day shifts
the running total by exactly one, so among all valid starts the one that
maximises the length is the earliest position where the total was
`total[j] - 1`.

### Hint 3

Sweep once and keep a table from total value to the first index that produced
it. Never overwrite an entry — that is what keeps every stored index as far
left as it can be.
