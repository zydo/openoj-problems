# Equal Card Groups

## Description

Each integer in `deck` labels a card. Determine whether all cards can be
separated into one or more groups of the same size `x`, where `x > 1`.

Every group must contain cards with one identical label, every card must be
used exactly once, and the same group size `x` must work for every label.
Return `true` when such a grouping exists; otherwise return `false`.

### Example 1

```text
Input: deck = [5,5,5,5,7,7,7,7]
Output: true
Explanation: Use groups of size 4: one group of 5s and one group of 7s.
```

### Example 2

```text
Input: deck = [1,1,2,2,2]
Output: false
Explanation: The counts are 2 and 3, which share no group size greater than 1.
```

### Example 3

```text
Input: deck = [9,9,9,4,4,4,4,4,4]
Output: true
Explanation: Both label counts are divisible by 3.
```

### Constraints

- `1 <= deck.length <= 10⁴`
- `0 <= deck[i] < 10⁴`

## Hints

### Hint 1

For a selected group size `x`, the count of every distinct label must be a
multiple of `x`; labels can never be mixed to repair a remainder.

### Hint 2

A common group size greater than 1 exists precisely when all frequency counts
have a greatest common divisor of at least 2.
