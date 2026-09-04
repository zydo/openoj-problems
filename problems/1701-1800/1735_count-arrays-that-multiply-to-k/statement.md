# Count Arrays That Multiply to k

## Description

You are given a list of `queries`, each a pair `[n, k]`.

For a pair, count the arrays of `n` positive integers whose entries multiply
to `k`. Two arrays differ whenever any position holds a different value, so
`[2, 3]` and `[3, 2]` are two of the ways for `n = 2, k = 6`. Counts grow
fast, so report each one modulo `10⁹ + 7`.

Answer every pair and return the answers in the order given.

### Example 1

```text
Input: queries = [[3,8],[2,12],[4,1]]
Output: [10,6,1]
Explanation:
[3,8]: splitting three factors of 2 over three slots gives 10 arrays, from
[1,1,8] and [1,2,4] through [8,1,1].
[2,12]: six ordered pairs multiply to 12, namely [1,12], [2,6], [3,4], [4,3],
[6,2], [12,1].
[4,1]: only all ones multiply to 1.
```

### Example 2

```text
Input: queries = [[50,8192],[3,10000],[1,7]]
Output: [281184694,225,1]
Explanation:
[50,8192]: the true count for thirteen factors of 2 across fifty slots is far
above the modulus; reduced, it is 281184694.
[3,10000]: 10000 = 2⁴·5⁴, and the two primes distribute independently, 15
ways each — 225.
[1,7]: a single slot must hold 7 itself.
```

### Constraints

- `1 <= queries.length <= 10⁴`
- `1 <= n, k <= 10⁴` in every pair

## Hints

### Hint 1

Factor `k` into primes. The primes never interact, so the count splits into a
piece per prime — and those pieces multiply.

### Hint 2

For a prime appearing `x` times in `k`, only the exponents matter: spreading
`x` copies over `n` ordered slots is a classic identical-items-into-boxes
count.

### Hint 3

Multiply the binomial coefficients for all primes of `k`, reduce modulo
`10⁹ + 7`, and repeat per query.
