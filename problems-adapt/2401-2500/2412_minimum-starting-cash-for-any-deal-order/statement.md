# Minimum Starting Cash for Any Deal Order

## Description

You are given a list of deals, where `deals[i] = [price_i, rebate_i]`.

Every deal must be carried out exactly once, and you have no control over the
sequence in which they arrive. Carrying out deal `i` costs `price_i` up front —
your cash on hand must be at least `price_i` at that moment — and pays back
`rebate_i` once it settles, leaving you with `cash - price_i + rebate_i`.

Return the smallest amount of cash you can start with that still lets you
settle every deal, no matter which of the possible arrival orders occurs.

### Example 1

```text
Input: deals = [[7,1],[2,0],[5,6]]
Output: 13
Explanation:
Start with 13. The tightest order is [2,0], [7,1], [5,6]: after paying 2 you
hold 11, after paying 7 and receiving rebate 1 you hold 5 — exactly the price
of the last deal. Orders beginning with the profitable deal [5,6] never dip
lower. Starting with 12, the order above stalls before [7,1].
```

### Example 2

```text
Input: deals = [[5,5],[0,8]]
Output: 5
Explanation:
Neither deal loses money, so only the largest up-front price matters: with 5
in hand you can clear [5,5] first and still have 5 afterwards.
```

### Example 3

```text
Input: deals = [[10,0]]
Output: 10
Explanation:
A single deal must simply be affordable from the start; the rebate arrives
too late to help.
```

### Constraints

- `1 <= deals.length <= 10^5`
- `deals[i].length == 2`
- `0 <= price_i, rebate_i <= 10^9`

## Hints

### Hint 1

Some deals hand back at least as much as they charge, and some hand back less.
The two groups stress your wallet in different ways — treat them separately.

### Hint 2

A deal of the second kind shrinks your cash permanently, and by a fixed
amount, so the total shrinkage is the same in every order. The binding moment
comes when one of these deals is paid at the very end of that group.

### Hint 3

A deal of the first kind never shrinks your cash; the only thing it can ask
of you is its price, and the worst moment to pay a price is when your cash is
at its lowest. Reduce each group to a single number.
