# Nth Five-Smooth Number

## Description

Call a positive integer *five-smooth* when no prime above 5 divides it — that
is, when its prime factors are drawn only from `2`, `3` and `5`. The number `1`
qualifies: nothing divides it, so nothing above 5 does.

You are given an integer `n`. Return the `n`th five-smooth number, counting the
sequence in increasing order starting from `1`.

### Example 1

```text
Input: n = 7
Output: 8
Explanation: The sequence opens 1, 2, 3, 4, 5, 6, 8 — 7 is skipped, being
divisible by 7 — so the 7th term is 8.
```

### Example 2

```text
Input: n = 1
Output: 1
Explanation: The sequence starts at 1, which divides by no prime at all.
```

### Example 3

```text
Input: n = 15
Output: 24
Explanation: Counting on from 8: 9, 10, 12, 15, 16, 18, 20, 24 — terms 8
through 15 — so the 15th term is 24.
```

### Constraints

- `1 <= n <= 1690`

## Hints

### Hint 1

Scanning the integers and keeping the ones that qualify throws away almost all
the work — the qualifying numbers thin out fast. Nothing forces you to visit
the others at all.

### Hint 2

Multiply a qualifying number by 2, 3 or 5 and the product still qualifies. Run
it backwards: every term past the first arises that way from an earlier term.

### Hint 3

So the sequence is the ordered merge of three copies of itself, scaled by 2,
by 3 and by 5 — and a merge only needs to know the head of each list.

### Hint 4

Keep three cursors into the terms already written. The next term is the
smallest head among them, and every cursor whose head equals it steps forward —
a product such as 12 is reachable by two routes and must not be emitted twice.
