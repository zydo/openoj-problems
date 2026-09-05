# Trailing Zeros In A Factorial

## Description

The factorial of `n`, written `n!`, is the product of every integer from 1
up to `n` — `n! = n · (n − 1) · (n − 2) · … · 2 · 1`. Count how many zeros
sit at the end of that enormous product when written out in full.

The count only ever grows: once a factor of 10 enters the product, nothing
removes it, so the answer depends entirely on how many tens `n!` can be
built from.

### Example 1

```text
Input: n = 7
Output: 1
Explanation: 7! = 5040, which ends in exactly one zero.
```

### Example 2

```text
Input: n = 30
Output: 7
Explanation: 30! ends in seven zeros — more than one arrives per multiple
of 5, because 25 donates two of them.
```

### Example 3

```text
Input: n = 100
Output: 24
Explanation: The multiples of 5 up to 100 bring twenty fives, and 25, 50,
75 and 100 each bring a second one — 24 in all.
```

### Constraints

- `0 <= n <= 10⁴`

### Follow-up

Can you produce the count without ever building the factorial — in time
growing only logarithmically with `n`?
