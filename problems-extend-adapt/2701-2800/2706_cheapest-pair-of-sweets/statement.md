# Cheapest Pair Of Sweets

## Description

A shop stocks chocolates whose prices are listed in the integer array
`prices`, and you arrive carrying `money` units.

You will walk out with exactly two chocolates, and you want that purchase
to leave you solvent: the money remaining after paying for both must not
go negative. Naturally you would like to spend as little as possible on
the pair.

Return how much money is left in your pocket after buying the two
chocolates. If every possible pair would sink you into debt, buy nothing
and return `money` unchanged.

### Example 1

```text
Input: prices = [7,3,9,4], money = 10
Output: 3
Explanation: The cheapest two chocolates cost 3 and 4, a total of 7. The
purchase leaves 10 - 7 = 3.
```

### Example 2

```text
Input: prices = [6,6], money = 11
Output: 11
Explanation: The only pair costs 12, more than the 11 you hold, so no
affordable purchase exists and the money stays put.
```

### Example 3

```text
Input: prices = [2,8,5], money = 20
Output: 13
Explanation: Buying the 2 and the 5 costs 7, leaving 20 - 7 = 13. No
cheaper pair exists.
```

### Constraints

- `2 <= prices.length <= 50`
- `1 <= prices[i] <= 100`
- `1 <= money <= 100`

### Hint 1

The pair you want is simply the two smallest prices, so put them in order
and add up the front two.

### Hint 2

You never need to sort to find just those two values — one scan tracking
the smallest and second smallest seen so far settles it.
