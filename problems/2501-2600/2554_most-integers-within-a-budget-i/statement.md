# Most Integers Within a Budget I

## Description

You are given an integer array `banned` and two integers `n` and `maxSum`.
Assemble a set of integers that obeys all of these rules:

- every integer you take must fall between 1 and `n` inclusive;
- no integer may appear in the set more than once;
- an integer listed in `banned` may not be taken at all;
- the sum of the integers you take must not go over `maxSum`.

Return the largest number of integers a set built this way can contain.

### Example 1

```text
Input: banned = [3,7], n = 9, maxSum = 12
Output: 4
Explanation: The integers 1, 2, 4, and 5 are all allowed and total
exactly 12, which fits the budget. The next candidate, 6, would push the
total to 18, and every value after it is larger still.
```

### Example 2

```text
Input: banned = [1], n = 4, maxSum = 2
Output: 1
Explanation: Integer 1 is banned, and both 3 and 4 cost more on their own
than the budget of 2 allows, so the single integer 2 is all you can take.
```

### Example 3

```text
Input: banned = [5,2,5,9], n = 6, maxSum = 20
Output: 4
Explanation: The entry 9 lies outside [1, 6], so it rules nothing out.
Taking 1, 3, 4, and 6 while skipping the banned 2 and 5 totals 14; the
remaining candidates are banned or already taken, so four is the cap.
```

### Constraints

- `1 <= banned.length <= 10⁴`
- `1 <= banned[i], n <= 10⁴`
- `1 <= maxSum <= 10⁹`

## Hints

### Hint 1

Entries of `banned` larger than `n` can be dropped immediately; collect
the rest into a set for cheap lookups.

### Hint 2

Sweep the candidates upward from 1 through `n`, taking every one that is
not in the banned set.

### Hint 3

Stop the sweep the first time a candidate would push the running total
past `maxSum` — every later candidate costs at least as much, so nothing
further can fit.
