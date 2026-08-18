# Summands To A Target

## Description

You are given `candidates`, an array of integers with no value repeated, and an
integer `target`. Report every way of adding candidates together to reach
exactly `target`, where each candidate may be taken as many times as you like —
zero times, once, or twenty times.

What separates one way from another is *how many copies of each candidate* it
uses; the order the summands are written in carries no meaning. Return the ways
as a list, in whatever order you find them.

Inputs are chosen so that fewer than `150` ways exist.

### Example 1

```text
Input: candidates = [3,4,8,10], target = 10
Output: [[3,3,4],[10]]
Explanation: 3 + 3 + 4 = 10, taking 3 twice, and 10 on its own. Nothing else
reaches 10; 8 leaves a remainder of 2, which no candidate can cover.
```

### Example 2

```text
Input: candidates = [6,4,9], target = 14
Output: [[6,4,4]]
Explanation: 6 + 4 + 4 = 14 is the only way. The candidates need not arrive
sorted, and a way is one multiset however it is written down.
```

### Example 3

```text
Input: candidates = [5], target = 3
Output: []
Explanation: Every sum of fives is a multiple of five, so 3 is out of reach and
the answer is the empty list.
```

### Constraints

- `1 <= candidates.length <= 30`
- `2 <= candidates[i] <= 40`
- `1 <= target <= 40`
- No two entries of `candidates` are equal.

## Hints

### Hint 1

Build one way a summand at a time, tracking how much of `target` is still
owed. Owing exactly nothing means you have found a way; owing a negative
amount means you overshot.

### Hint 2

Nothing stops you adding the same candidate again, so after choosing the
candidate at position `i` the next choice may still be position `i`.

### Hint 3

`[3,4]` and `[4,3]` are the same way and must be reported once. Forbid every
position before `i` once you have moved past it, and each multiset can be
assembled in exactly one order.

### Hint 4

A candidate larger than what is still owed can never help, so skip it before
recursing — and skip rather than stop, since the array is not sorted and a
smaller candidate may follow.
