# Counting Contagion Orders

## Description

A line of n people includes a set of already-infected ones, given as the
sorted array sick of their positions.

The infection then creeps outward: at each step, exactly one healthy
person standing adjacent to an infected person catches it, and the steps
repeat until nobody healthy remains.

An infection order is the sequence of positions at which the healthy
people fall, leaving out those who started infected. Count how many
distinct infection orders the spread can produce, modulo 10⁹ + 7.

### Example 1

```text
Input: n = 4, sick = [0,3]
Output: 2
Explanation: Positions 1 and 2 sit between the two infected ends, and
either of them can catch the infection first, giving [1,2] and [2,1].
```

### Example 2

```text
Input: n = 5, sick = [2]
Output: 6
Explanation: On the left, position 1 must fall before 0; on the right,
3 must fall before 4 — both edge runs are pinned to a single order.
The freedom is in how those two fixed runs interleave:
4! / (2! * 2!) = 6 ways.
```

### Example 3

```text
Input: n = 6, sick = [0,3]
Output: 12
Explanation: The middle run {1,2} can shed from either end each step,
so its two people can fall in 2 orders, while the right run {4,5} is
pinned to 4 then 5. Interleaving the two runs gives
4! / (2! * 2!) = 6 merges, for 6 * 2 = 12 orders overall.
```

### Constraints

- `2 <= n <= 10⁵`
- `1 <= sick.length <= n - 1`
- `0 <= sick[i] <= n - 1`
- `sick` is sorted in increasing order.

## Hints

### Hint 1

The initially infected positions cut the line into runs of healthy
people, and each run evolves on its own: a run touching an end of the
line can only shed from its one inner endpoint.

### Hint 2

An interior run, infected on both sides, may shed from either end at
every step, which yields 2^(len - 1) possible internal orders.

### Hint 3

The whole answer is the multinomial count of ways to interleave the
runs' internal orders — S! / (len₁! · len₂! · …) — multiplied by each
interior run's power of two, computed with precomputed factorials and
modular inverses.
