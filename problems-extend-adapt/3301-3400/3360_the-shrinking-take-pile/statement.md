# The Shrinking-Take Pile

## Description

A pile starts with `n` stones, and two takers alternate turns with the
first taker moving first. The opening take must remove exactly 10
stones. Every take after that must be exactly one stone smaller than the
take made just before it, regardless of who made that previous take.

A taker who cannot remove the amount their turn calls for — the pile
holds fewer stones than required — loses.

Return `true` if the first taker wins and `false` otherwise.

### Example 1

```text
Input: n = 19
Output: false
Explanation: Takes of 10 and then 9 empty the pile. The next take should
be 8, but it is the first taker's turn and no stones remain, so the
first taker loses.
```

### Example 2

```text
Input: n = 25
Output: false
Explanation: Takes of 10 and 9 leave 6 stones. The next take would be 8,
which the pile cannot cover, and that turn belongs to the first taker —
so the first taker loses.
```

### Example 3

```text
Input: n = 40
Output: true
Explanation: The takes 10, 9, 8, 7, 6 drain the pile exactly. The
following take of 5 falls to the second taker, who faces an empty pile
and loses.
```

### Constraints

- `1 <= n <= 50`

## Hints

### Hint 1

Nothing is ever chosen: the size of every take is fixed the moment the
game begins, so one plain walk through the turns answers any input.
