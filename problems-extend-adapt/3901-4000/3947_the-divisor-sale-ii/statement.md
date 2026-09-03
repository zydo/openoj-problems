# The Divisor Sale II

## Description

A shop sells unlimited copies of every kind of item; kind `i` is described
by `items[i] = [factorᵢ, priceᵢ]`. You hold a budget and buy copies whose
prices add up to at most `budget`.

Free copies are granted copy by copy:

- each bought copy of kind `i` may yield one free copy of a single other
  kind `j` whose factor `factorᵢ` divides;
- each ordered pair of kinds `(i, j)` yields at most one free copy, no
  matter how many copies are involved overall.

Return the greatest number of copies you can end up with, counting both
the bought and the free ones.

### Example 1

```text
Input: items = [[3,2],[1,4],[2,3]], budget = 9
Output: 4
Explanation:
    Buy two copies of the factor-1 kind (price 4 each), spending 8. Its
    factor divides both remaining kinds, so the first copy pairs with
    one of them and the second with the other: 2 bought + 2 free = 4.
```

### Example 2

```text
Input: items = [[1,9],[3,4],[2,7],[5,15],[2,11]], budget = 25
Output: 6
Explanation:
    Six copies of the factor-3 kind cost 24 in total. Its factor divides
    none of the other kinds, so no pairings arise — yet six plain copies
    already achieve the best possible total.
```

### Example 3

```text
Input: items = [[1,5]], budget = 11
Output: 2
Explanation:
    Two copies cost 10, and with a single kind on sale no copy can pair
    with anything.
```

### Constraints

- `1 <= items.length <= 10⁵`
- `1 <= factorᵢ <= items.length`
- `1 <= priceᵢ <= 10⁹`
- `1 <= budget <= 10⁹`

### Hint 1

Kind `i` can donate at most one free copy per distinct divisible kind, so
its first `gain[i]` bought copies are each worth two items while the rest
are worth one.

### Hint 2

Treat each doubling copy as a boosted unit, sort the boosted units by
price, and keep taking the cheapest while their price stays at most twice
the cheapest ordinary price; fill the rest of the budget with ordinary
copies.
