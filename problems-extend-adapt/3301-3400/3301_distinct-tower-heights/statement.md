# Distinct Tower Heights

## Description

A row of towers is going up, and tower `i` may be built at any positive
integer height no greater than `maximumHeight[i]`. Every tower must end at
a different height — no two may share one. Assign each tower a height that
respects both rules while making the heights add up to as much as
possible, and return that largest total. When no assignment exists at all,
return `-1`.

### Example 1

```text
Input: maximumHeight = [3,7,5]
Output: 15
Explanation: The caps themselves are three different numbers, so each
tower can simply take its own cap: heights 3, 7 and 5 sum to 15.
```

### Example 2

```text
Input: maximumHeight = [4,4,4,4]
Output: 10
Explanation: All four towers are capped at 4, so the best they can share
out is 4, 3, 2 and 1, which sums to 10.
```

### Example 3

```text
Input: maximumHeight = [1,1]
Output: -1
Explanation: Both towers are capped at 1, and two towers may not stand at
the same height.
```

### Constraints

- `1 <= maximumHeight.length <= 10⁵`
- `1 <= maximumHeight[i] <= 10⁹`

## Hints

### Hint 1

Consider the caps from largest to smallest. In an optimal assignment, a
cap that is allowed to be tall should never be held back by a shorter
option wasted elsewhere.

### Hint 2

Walk the sorted caps and give each tower the largest height still
available: if the previous tower took `prev`, the next one can take at
most `min(cap, prev - 1)`. The first time that value drops under 1, the
whole arrangement is impossible.
