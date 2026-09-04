# Nearest Price Sundae

## Description

You are assembling a sundae from a menu and want its final price to
land as close as possible to a target amount. The menu offers `n`
bases and `m` topping kinds, and a sundae must be built by these
rules:

- Pick exactly one base.
- Add any number of topping kinds — possibly none at all.
- Each topping kind may be added at most twice.

The prices arrive in three inputs:

- `baseCosts`, a list of `n` integers, where `baseCosts[i]` is the
  price of the `i`th base.
- `toppingCosts`, a list of `m` integers, where `toppingCosts[i]` is
  the price of a single helping of the `i`th topping kind.
- `target`, the price you are aiming for.

Return the achievable sundae price closest to `target`. When two
achievable prices are equally close, return the cheaper one.

### Example 1

```text
Input: baseCosts = [7,3], toppingCosts = [4,1], target = 12
Output: 12
Explanation: Take base 7, one helping of the 4-topping, and one
helping of the 1-topping: 7 + 4 + 1 = 12, hitting the target exactly.
```

### Example 2

```text
Input: baseCosts = [5,9], toppingCosts = [2], target = 8
Output: 7
Explanation: The prices 7 (base 5 plus the topping) and 9 (base 9
alone) both miss the target by 1; the tie goes to the cheaper 7.
```

### Example 3

```text
Input: baseCosts = [4,6], toppingCosts = [2,8,50], target = 13
Output: 12
Explanation: Base 4 plus the 8-topping reaches 12, and base 4 plus the
2- and 8-toppings reaches 14 — each misses by 1, so the lower price 12
is returned. The 50-topping is too costly to help.
```

### Constraints

- `n == baseCosts.length`
- `m == toppingCosts.length`
- `1 <= n, m <= 10`
- `1 <= baseCosts[i], toppingCosts[i] <= 10^4`
- `1 <= target <= 10^4`

## Hints

### Hint 1

The limits are tiny: with at most two helpings of each of the `m`
toppings, every reachable topping combination can be enumerated
outright.

### Hint 2

Build the set of totals reachable from toppings first — each topping
price `t` turns every reachable sum `s` into `s`, `s + t`, and
`s + 2t` — then test each base against each reachable total and keep
the combination with the smallest distance to `target`, preferring the
smaller price on equal distance.
