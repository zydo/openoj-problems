# Most Distinct Evens in a Split

## Description

Take a target total `finalSum` and break it into a sum of pieces that
are positive, even, and pairwise different, using as many pieces as the
total can support. A total of 30, say, falls apart as `(30)`, as
`(2 + 28)`, or as `(2 + 4 + 6 + 8 + 10)` — that last one using five
pieces — while `(2 + 2 + 6 + 8 + 12)` is illegal because the piece 2
appears twice.

Return any one split that reaches the largest possible piece count; the
order of the pieces does not matter. If the total cannot be split this
way at all, return an empty list.

### Example 1

```text
Input: finalSum = 38
Output: [2,4,6,8,18]
Explanation:
Six distinct positive evens already sum to at least 2 + 4 + 6 + 8 + 10
+ 12 = 42, which overshoots 38, so five pieces is the ceiling — and
2 + 4 + 6 + 8 + 18 reaches it.
```

### Example 2

```text
Input: finalSum = 7
Output: []
Explanation:
A sum of even pieces is always even, so an odd total has no split.
```

### Example 3

```text
Input: finalSum = 2
Output: [2]
Explanation:
The only even total smaller than 4 is a single piece of 2.
```

### Constraints

- `1 <= finalSum <= 10¹⁰`

## Hints

### Hint 1

Settle parity before anything else: only even totals can possibly be
written as a sum of even pieces.

### Hint 2

More pieces means growing the sum as slowly as possible, so claim the
small evens `2, 4, 6, ...` one at a time and stop before the leftover
can no longer host a bigger final piece.

### Hint 3

Whatever remains when the claims stop belongs to the last piece. Adding
the leftover there keeps that piece strictly larger than every earlier
one, so all pieces stay distinct and the total stays exact.

### Hint 4

The piece count this builds is the largest `k` with
`2 + 4 + ... + 2k = k(k+1)` not exceeding `finalSum`; no split into
distinct positive evens can ever hold more than `k` pieces.
