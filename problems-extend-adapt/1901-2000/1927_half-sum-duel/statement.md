# Half-Sum Duel

## Description

Alice and Bob play a filling duel on a string `num` of even length whose
characters are digits or `'?'` placeholders. Alice moves first and they
alternate. On a turn, the mover picks any remaining `'?'` and overwrites it
with a digit of their choice, `0` through `9`. The duel ends when the last
`'?'` is gone.

Split the finished string into a left half and a right half. Bob is trying
to make the two halves' digit sums **equal**; Alice is trying to keep them
**different**. For a completed string `"6115"`, the halves sum to 6 + 1 = 7
and 1 + 5 = 6, so Alice would prevail there; `"6015"` gives 6 + 0 = 1 + 5
and Bob prevails.

Both play optimally. Return `true` if Alice is guaranteed to win, or
`false` if Bob is.

### Example 1

```text
Input: num = "6015"
Output: false
Explanation: There are no '?'s to fill. The halves already tie at
6 + 0 = 1 + 5, so Bob wins without moving.
```

### Example 2

```text
Input: num = "?7"
Output: true
Explanation: Alice fills the only '?', so she alone decides the outcome.
Choosing any digit other than 7 — say 0 — leaves the halves unequal.
```

### Example 3

```text
Input: num = "?1?1"
Output: false
Explanation: Bob can copy whatever Alice does. If Alice writes 9 into a
left '?', Bob writes 9 into the right '?'; if she writes 5 into a right
'?', Bob writes 5 into the left '?'. The two halves always finish tied,
so Bob wins.
```

### Constraints

- `2 <= num.length <= 10⁵`
- `num.length` is even.
- `num` contains only digits and `'?'`.

## Hints

### Hint 1

Compare the halves through a single signed difference. How does filling a
`'?'` on the left change that difference, and how does filling one on the
right — and could both moves ever produce the same shift?

### Hint 2

After rescaling, every fill shifts the difference by some odd amount
between -9 and 9, no matter the side. Work out who wins when the starting
shift is zero and who wins when it is not.
