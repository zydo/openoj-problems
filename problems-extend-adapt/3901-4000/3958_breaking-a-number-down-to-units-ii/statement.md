# Breaking a Number Down to Units II

## Description

You are given an integer `n`.

One operation takes an integer `x` greater than `1` and replaces it with two
positive integers `a` and `b` satisfying `a + b = x`; performing it costs
`a * b`.

Repeat the operations until only `n` copies of `1` remain, and return the
smallest possible sum of costs over the whole plan.

### Example 1

```text
Input: n = 6
Output: 15
Explanation: Peel off ones one at a time: 6 into 1 and 5 (cost 5), then 5
into 1 and 4 (cost 4), then 4 into 1 and 3 (cost 3), 3 into 1 and 2
(cost 2), and finally 2 into 1 and 1 (cost 1). The sum is
5 + 4 + 3 + 2 + 1 = 15.
```

### Example 2

```text
Input: n = 9
Output: 36
Explanation: Split 9 into 4 and 5 (cost 20), 4 into 2 and 2 (cost 4), and
5 into 2 and 3 (cost 6). Then split each of the three 2s (cost 1 each), the
3 into 1 and 2 (cost 2), and that last 2 into 1 and 1 (cost 1), reaching
20 + 4 + 6 + 3 + 2 + 1 = 36.
```

### Example 3

```text
Input: n = 2
Output: 1
Explanation: The single operation 2 into 1 and 1 costs 1 * 1 = 1.
```

### Constraints

- `1 <= n <= 5 * 10⁷`

## Hints

### Hint 1

Define `f(x)` as the least total cost of grinding `x` down to ones, and note
that splitting `x` into `a` and `b` gives `f(x) = a * b + f(a) + f(b)`.

### Hint 2

A charge of `a * b` counts exactly the pairs of final ones that land on
opposite sides of that break.

### Hint 3

Whichever order you break in, each unordered pair of final ones crosses a
break exactly once — so the total is fixed at `n * (n - 1) / 2`, and `n`
can be enormous because nothing needs simulating.
