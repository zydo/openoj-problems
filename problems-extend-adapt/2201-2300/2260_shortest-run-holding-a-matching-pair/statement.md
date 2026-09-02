# Shortest Run Holding a Matching Pair

## Description

A row of cards is given as an integer array `cards`, where `cards[i]` is the
value printed on the `i-th` card. Two cards match when they carry the same
value.

You may take any contiguous run of cards from the row. Return the length of
the shortest run that contains at least one matching pair among its cards.
If no run can ever contain a pair — that is, every value in the row is
unique — return `-1`.

### Example 1

```
Input: cards = [5,3,8,3,9]
Output: 3
Explanation: Taking the run [3,8,3] picks up both 3s, so a matching pair
is included. No shorter run contains two equal values.
```

### Example 2

```
Input: cards = [2,2,7]
Output: 2
Explanation: The two 2s sit next to each other, so the run [2,2] already
holds a pair.
```

### Example 3

```
Input: cards = [1,4,6,9]
Output: -1
Explanation: Every value appears exactly once, so no consecutive run can
ever contain a matching pair.
```

### Constraints

- `1 <= cards.length <= 10⁵`
- `0 <= cards[i] <= 10⁶`

## Hints

### Hint 1

For each value, all you ever need is where it last appeared.

### Hint 2

Sweep left to right with a hash map from value to its previous index; the
moment the current value already has a stored index, the run spanning the
two occurrences is a candidate — keep the shortest one you see.
