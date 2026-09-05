# Cafe Order Tally

## Description

A cafe wants a tally board summarizing its orders. Every order is a
three-entry record `orders[i] = [customer, table, item]`: the customer
who placed it, the table they sat at, and the item they asked for.
Customer names matter only for deduplication of who did what — they never
appear on the board itself.

Build the tally board as a grid of strings. The header row reads
`"Table"` followed by every distinct item in alphabetical order. Below
it comes one row per table that has at least one order, sorted by table
number in increasing numeric order. Each of those rows starts with the
table number (as a string) and then lists, for every item in the header,
how many times that item was ordered at that table. Counts are strings
too, and an item a table never ordered is a `"0"`.

Return the finished grid.

### Example 1

```text
Input: orders = [["Mia","4","Latte"],["Noah","4","Bagel"],
["Mia","2","Latte"],["Liam","9","Scone"],["Ava","9","Latte"]]
Output: [["Table","Bagel","Latte","Scone"],["2","0","1","0"],
["4","1","1","0"],["9","0","1","1"]]
Explanation: Table 2 ordered only a Latte, table 4 ordered a Bagel and a
Latte, and table 9 ordered a Scone and a Latte.
```

### Example 2

```text
Input: orders = [["Zoe","25","Soup"],["Ben","3","Soup"],["Zoe","25","Soup"]]
Output: [["Table","Soup"],["3","1"],["25","2"]]
Explanation: Only Soup was ever ordered. Table 25's two orders both came
from Zoe, and the row order is 3 before 25 — numerically, not as text.
```

### Example 3

```text
Input: orders = [["Ivy","7","Tea"]]
Output: [["Table","Tea"],["7","1"]]
```

### Constraints

- `1 <= orders.length <= 5 * 10⁴`
- `orders[i].length == 3`
- `1 <= customer.length, item.length <= 20`
- `customer` and `item` consist of upper and lower case English letters
  and spaces.
- `table` is an integer from `1` to `500`.

## Hints

### Hint 1

The names never reach the output, so all you really need is one counter
per `(table, item)` pair — a nested map keyed by table works well.

### Hint 2

Lay the grid out only after counting: items sorted alphabetically form
the columns, and the table rows must be ordered by numeric value —
comparing table numbers as plain strings would rank `"25"` before `"3"`.
