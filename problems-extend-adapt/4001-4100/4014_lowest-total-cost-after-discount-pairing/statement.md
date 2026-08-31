# Lowest Total Cost After Discount Pairing

## Description

You are given an integer array `prices`, where `prices[i]` is the price of
the `i`th item, and an integer array `discounts` of percentage values.

You may match discounts to items under these rules:

- Each discount is used on at most one item.
- Each item receives at most one discount.
- An item is allowed to receive no discount at all.

Applying a `d` percent discount to an item priced at `p` drops its final
price to `(p * (100 - d)) / 100`, with no rounding.

Return the smallest possible sum of final prices over every way of
matching discounts to items. An answer within `10⁻⁵` of the true value is
accepted.

### Example 1

```text
Input: prices = [20,50,35], discounts = [40,70]
Output: 56.00000
Explanation: Applying the 70% discount to the 50-priced item drops it to
15, and the 40% discount on the 35-priced item drops it to 21; the
20-priced item receives no discount and stays 20. The total is
15 + 21 + 20 = 56, the minimum possible.
```

### Example 2

```text
Input: prices = [80,60], discounts = [20,30,40]
Output: 90.00000
Explanation: Applying the 40% discount to the 80-priced item drops it to
48, and the 30% discount to the 60-priced item drops it to 42, leaving the
weaker 20% discount unused since there are only two items. The total is
48 + 42 = 90.
```

### Example 3

```text
Input: prices = [9,4,15], discounts = [100,100]
Output: 4.00000
Explanation: Applying a 100% discount to the 15-priced item and to the
9-priced item drops both to 0; the 4-priced item receives no discount and
stays 4. The total is 0 + 0 + 4 = 4.
```

### Constraints

- `1 <= prices.length, discounts.length <= 10⁵`
- `1 <= prices[i] <= 10⁵`
- `1 <= discounts[j] <= 100`

## Hints

### Hint 1

Applying a `d` percent discount to an item priced at `p` saves exactly
`p * d / 100`.

### Hint 2

Minimizing the total final price is the same as maximizing the total
amount saved. Try sorting both arrays and pairing the larger prices with
the larger discounts.
