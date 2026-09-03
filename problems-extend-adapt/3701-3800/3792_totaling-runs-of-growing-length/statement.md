# Totaling Runs Of Growing Length

## Description

Starting from 1, deal the positive integers into consecutive runs — the
first run takes one integer, the second takes two, and in general run `i`
takes the next `i` integers:

- run 1 covers `1`;
- run 2 covers `2 * 3`;
- run `i` covers the product of its `i` consecutive integers.

Let `F(n)` be the total of the first `n` runs' products. Return `F(n)`
modulo `10⁹ + 7`.

### Example 1

```text
Input: n = 4
Output: 5167
Explanation: The runs are 1, 2 * 3 = 6, 4 * 5 * 6 = 120 and
7 * 8 * 9 * 10 = 5040. Their total is 1 + 6 + 120 + 5040 = 5167.
```

### Example 2

```text
Input: n = 5
Output: 365527
Explanation: Appending run 5 — 11 * 12 * 13 * 14 * 15 = 360360 — to the
previous total gives 5167 + 360360 = 365527.
```

### Constraints

- `1 <= n <= 1000`

## Hints

### Hint 1

March one shared counter through the integers: each run multiplies the
counter's next few values into its product.

### Hint 2

Reduce modulo `10⁹ + 7` after every multiplication — products and totals
commute with taking residues, so the final remainder is exact.
