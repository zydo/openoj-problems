# Mirror-Safe Row Painting IV

## Description

A street holds `n` houses in a line, where `n` is even, and `cost` is an
`n x 3` grid whose entry `cost[i][j]` is the charge for painting house `i`
in color `j + 1`.

A coloring of the whole street counts as tidy when both of these hold:

- Neighboring houses never wear the same color.
- Neither do two houses that sit at matching distances from the two ends.
  With `n = 6`, that couples positions `(0, 5)`, `(1, 4)` and `(2, 3)` —
  each pair straddles the midpoint symmetrically.

Return the least total cost of any tidy coloring.

### Example 1

```text
Input: n = 2, cost = [[5,1,9],[8,3,2]]
Output: 3
Explanation: With only two houses, the pair of them are neighbors and
mirrors at once, so they simply must differ. Painting house 0 in color 2
and house 1 in color 3 costs 1 + 2 = 3, and nothing cheaper exists.
```

### Example 2

```text
Input: n = 4, cost = [[4,2,8],[9,6,3],[1,7,5],[6,4,9]]
Output: 12
Explanation: Paint the houses in colors [1, 3, 1, 2], paying [4, 3, 1, 4]
for a total of 12. Adjacent houses differ throughout, and so do the
mirror pairs: houses 0 and 3 wear 1 and 2, houses 1 and 2 wear 3 and 1.
```

### Example 3

```text
Input: n = 8, cost = [[7,2,5],[3,8,1],[9,4,6],[2,6,8],[5,1,9],[8,3,7],[4,9,2],[1,5,3]]
Output: 23
Explanation: One optimal coloring is [2, 1, 2, 1, 2, 1, 3, 1] at a cost of
2 + 3 + 4 + 2 + 1 + 8 + 2 + 1 = 23. Note house 6: its mirror partner is
house 1, which wears color 1, so house 6 pays 2 for color 3 — color 1
would cost only 4 there, but the mirror rule bars it.
```

### Constraints

- `2 <= n <= 10⁵`, and `n` is even.
- `cost` has exactly `n` rows, each with exactly 3 entries.
- `0 <= cost[i][j] <= 10⁵`

## Hints

### Hint 1

No rule reaches beyond a house's neighbors and its mirror partner, so walk
the row from both ends inward and settle one mirror pair at a time.

### Hint 2

Once a pair is placed, the only thing the next pair needs to know about it
is the two colors just used. Keep a table over those color pairs and try
all nine combinations per step.
