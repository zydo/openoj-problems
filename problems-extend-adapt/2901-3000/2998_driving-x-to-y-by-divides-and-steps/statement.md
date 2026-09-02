# Driving X To Y By Divides And Steps

## Description

You are given two positive integers `x` and `y`. Starting from `x`, repeat
any of these moves:

- divide `x` by 11, but only while `x` is a multiple of 11;
- divide `x` by 5, but only while `x` is a multiple of 5;
- subtract 1 from `x`;
- add 1 to `x`.

Return the smallest number of moves that ends with `x` holding exactly the
value `y`.

### Example 1

```text
Input: x = 98, y = 9
Output: 2
Explanation: Adding 1 first puts x at 99, which is 9 x 11, so one
division by 11 lands exactly on y = 9. No single move reaches 9, so 2 is
optimal.
```

### Example 2

```text
Input: x = 55, y = 3
Output: 3
Explanation: Divide the multiple of 11 first — 55 becomes 5 — then step
down twice, reaching 3 in three moves total.
```

### Example 3

```text
Input: x = 30, y = 37
Output: 7
Explanation: y sits above x, and adding 1 is the only move that raises
x — a division always shrinks it. So the answer is the plain gap,
37 - 30 = 7.
```

### Constraints

- `1 <= x, y <= 10⁴`

## Hints

### Hint 1

Treat every reachable value as a state and each move as one unit-cost
edge; a breadth-first search from `x` then reaches `y` by layers.

### Hint 2

Bound the search: when `y >= x` the answer is simply `y - x`, and below
that, an optimal route never needs to climb past `x + (x - y)` — from
there, plain decrements would already match the best possible cost. Every
state visited stays inside a small range, so a distance array suffices.
