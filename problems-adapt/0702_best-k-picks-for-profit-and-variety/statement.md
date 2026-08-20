# Best k Picks for Profit and Variety

## Description

You are given a list `items`, where `items[i] = [profit_i, category_i]`
describes one item's profit and its category, and an integer `k`.

Choose exactly `k` items. The score of a choice is

```text
(sum of the chosen profits) + (number of distinct categories among them)²
```

Return the highest score any choice of `k` items can reach.

### Example 1

```text
Input: items = [[7,2],[8,1],[11,1]], k = 2
Output: 22
Explanation: The two richest items both belong to category 1, scoring
8 + 11 + 1 = 20. Trading the 8 for the category-2 item of profit 7 leaves
7 + 11 + 4 = 22, because two distinct categories square to 4.
```

### Example 2

```text
Input: items = [[6,1],[6,1],[3,2],[9,3]], k = 3
Output: 27
Explanation: Take the profits 6, 3 and 9, one item per category:
6 + 3 + 9 + 9 = 27. Grabbing both 6s instead raises the profit sum to 21 but
leaves only two categories, for 21 + 4 = 25.
```

### Example 3

```text
Input: items = [[2,1],[5,1],[8,1]], k = 3
Output: 16
Explanation: Every item is category 1 and k equals the list length, so all
three are taken: 2 + 5 + 8 + 1 = 16.
```

### Constraints

- `1 <= items.length <= 10⁵`
- `items[i].length == 2`
- `1 <= profit_i <= 10⁹`
- `1 <= category_i <= items.length`
- `1 <= k <= items.length`

## Hints

### Hint 1

Rank the items by profit and start from the `k` richest — that maximizes the
first term, leaving only the question of how much variety is worth.

### Hint 2

Among the remaining items, only ones whose category is missing from the
current choice can ever improve it.

### Hint 3

Admitting such an item while staying at `k` picks means releasing the least
profitable chosen item whose category still appears at least twice.

### Hint 4

A fresh distinct category lifts the squared term from `d²` to `(d + 1)²` —
weigh that gain against the profit given up in each exchange.
