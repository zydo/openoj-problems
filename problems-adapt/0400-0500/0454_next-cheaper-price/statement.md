# Next Cheaper Price

## Description

You are given an integer array `prices`. Each position is offered a discount
ruled by the entries after it: for index `i`, find the smallest index `j`
with `j > i` and `prices[j] <= prices[i]`. When such a `j` exists, the
amount charged at `i` drops by exactly `prices[j]`; when it does not, the
full price stands.

Return an array `due` where `due[i]` is the amount charged at index `i`
after its discount.

### Example 1

```text
Input: prices = [7,3,9,4,10,2]
Output: [4,1,5,2,8,2]
Explanation:
Index 0 pairs with index 1 (3 <= 7), paying 7 - 3 = 4.
Index 1 scans past 9, 4 and 10 to reach the 2 at index 5, paying 3 - 2 = 1.
Index 2 pairs with index 3 (4 <= 9), paying 9 - 4 = 5.
Index 3 and 4 both pair with the 2 at index 5, paying 4 - 2 = 2 and 10 - 2 = 8.
Index 5 has nothing after it, so it pays 2.
```

### Example 2

```text
Input: prices = [3,5,8,11]
Output: [3,5,8,11]
Explanation: Every later entry is larger, so no discount applies anywhere.
```

### Example 3

```text
Input: prices = [5,2,2]
Output: [3,0,2]
Explanation: The second 2 is not strictly smaller, yet it still qualifies:
index 1 pays 2 - 2 = 0.
```

### Constraints

- `1 <= prices.length <= 500`
- `1 <= prices[i] <= 1000`

## Hints

### Hint 1

Any single position is resolved by scanning forward until the first value
that does not exceed it — with these bounds, doing that per position in a
double loop already fits.

### Hint 2

The scan for position `i` and position `i+1` redo much of the same work.
One left-to-right pass can settle many positions at once if you remember
which positions are still waiting for their discount.

### Hint 3

Keep those waiting positions on a stack, cheapest on top. A new value
settles every waiting position whose price it is at least as small as — and
the comparison must allow equality.
