# Smallest Largest Daily Load

## Description

Items sit in a row, in the order given by the array `weights`, where
`weights[i]` is the weight of the `i`th item. You also get an integer `days`.

Every item must be assigned to a day. Items keep their order: each day receives
a consecutive run of items, and the days together cover the row exactly. You may
use at most `days` days, and the load of a day is the total weight assigned to
it.

Return the smallest possible value of the heaviest day's load.

### Example 1

```text
Input: weights = [4,7,2,9,5,3], days = 4
Output: 9
Explanation: Cap every day at 9 and split the row in order:
day 1: 4
day 2: 7, 2
day 3: 9
day 4: 5, 3
No cap of 8 works: after 4 alone, 7 alone, and 2 alone, the 9 would need a
fifth day.
```

### Example 2

```text
Input: weights = [6,1,5], days = 1
Output: 12
Explanation: One day carries everything, so its load is the whole sum.
```

### Example 3

```text
Input: weights = [2,8,3,5], days = 4
Output: 8
Explanation: Give each item its own day; the heaviest load is then the largest
single item, and no split can do better.
```

### Constraints

- `1 <= days <= weights.length <= 5 * 10⁴`
- `1 <= weights[i] <= 500`

## Hints

### Hint 1

Search the answer itself: write a check `fits(cap)` that reports whether the row
splits into at most `days` days with no day's load above `cap`.

### Hint 2

The check is monotone — any cap above a workable one also works — so bisect
between `max(weights)` and `sum(weights)`.

### Hint 3

`fits(cap)` is one greedy left-to-right pass: keep piling items onto the current
day until the next one would exceed `cap`, then open a new day.
