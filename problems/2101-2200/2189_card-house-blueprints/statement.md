# Card House Blueprints

## Description

You are given `n` playing cards and want to count the distinct card
houses that use all of them. A card house has to obey these building
rules:

- The house is a set of one or more rows, where each row consists of
  triangles plus cards laid flat between neighboring triangles.
- A triangle is made by leaning two cards against each other.
- Any triangle in a row above the bottom row has to stand on a flat
  card from the row directly under it.
- Triangles within a row fill the leftmost open positions first.

Two houses are counted as different whenever some row ends up holding
a different number of cards in the two houses.

A row with `k` triangles is made of exactly `3 * k - 1` cards — `2k`
leaning cards plus `k - 1` flat ones — and the flat-card rule forces
every row to hold strictly fewer triangles than the row below it.

### Example 1

![diagram](figures/2189-1.svg)

```text
Input: n = 16
Output: 2
Explanation: Exactly two blueprints spend all 16 cards: a row of one
triangle (2 cards) resting on a row of five triangles (14 cards), or a
row of two triangles (5 cards) resting on a row of four triangles (11
cards).
```

### Example 2

![diagram](figures/2189-2.svg)

```text
Input: n = 2
Output: 1
Explanation: A lone triangle is the only house that two cards can
build.
```

### Example 3

![diagram](figures/2189-3.svg)

```text
Input: n = 4
Output: 0
Explanation: No way of stacking rows consumes exactly 4 cards.
```

### Constraints

- `1 <= n <= 500`
