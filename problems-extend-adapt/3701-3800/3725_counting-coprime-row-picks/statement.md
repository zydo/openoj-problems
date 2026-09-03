# Counting Coprime Row Picks

## Description

You are given an `m x n` matrix `mat` filled with positive integers.

A plan draws exactly one integer from every row of `mat`. A plan is coprime
when the greatest common divisor (gcd) of all its drawn integers is 1.
Positions matter: drawing equal integers from different columns of the same
row produces different plans.

Return how many coprime plans exist, modulo `10⁹ + 7`.

### Example 1

```text
Input: mat = [[4,6],[9,25]]
Output: 3
Explanation: The four plans have gcds gcd(4,9) = 1, gcd(4,25) = 1,
gcd(6,9) = 3, and gcd(6,25) = 1. Every plan except the gcd-3 one is
coprime, so the answer is 3.
```

### Example 2

```text
Input: mat = [[5,10,15],[3,6],[7]]
Output: 6
Explanation: All 3 × 2 × 1 = 6 plans are coprime: the last row only ever
contributes 7, and nothing the first two rows can offer is divisible by 7,
so no plan acquires a common factor.
```

### Example 3

```text
Input: mat = [[1,8,9]]
Output: 1
Explanation: With one row a plan's gcd is just the drawn integer, and only
1 among the entries is coprime.
```

### Constraints

- `1 <= m == mat.length <= 150`
- `1 <= n == mat[i].length <= 150`
- `1 <= mat[i][j] <= 150`

## Hints

### Hint 1

Tracking the exact gcd profile row by row is heavy work; invert the
question instead — for each d, count the plans in which every drawn
integer is divisible by d.

### Hint 2

Divisibility constrains every row independently, so that count factors
into per-row multiples counts, and Möbius inversion over the products
isolates precisely the plans whose overall gcd is 1.
