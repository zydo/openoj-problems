# Tiered Tax Bill

## Description

You are given a 0-indexed array `brackets` describing tax tiers, where
`brackets[i] = [cap, rate]` means tier `i` ends at `cap` dollars and every
dollar landing inside it is taxed at `rate` percent. The caps arrive in
ascending order with no repeats, so tier 0 owns the first `cap₀` dollars of
earnings, tier 1 owns the next `cap₁ - cap₀`, and so on.

You also learn that `income` dollars were earned. Work out the total tax
owed: each tier contributes whatever share of `income` falls inside it,
multiplied by its rate. The last tier's cap is guaranteed to be at least
`income`, so every earned dollar lands in some tier. Return the total;
answers within `10⁻⁵` of the true value are accepted.

### Example 1

```text
Input: brackets = [[4,25],[10,10]], income = 8
Output: 1.40000
Explanation:
The first 4 dollars sit in the 25% tier and cost 4 * 25% = $1.00. The next 4
dollars fall in the 10% tier and add 4 * 10% = $0.40. The bill totals $1.40.
```

### Example 2

```text
Input: brackets = [[5,0],[8,20]], income = 7
Output: 0.40000
Explanation:
The opening tier is untaxed, so only the 2 dollars above $5 matter; at 20%
they cost 2 * 20% = $0.40.
```

### Example 3

```text
Input: brackets = [[3,10],[9,45]], income = 6
Output: 1.65000
Explanation:
$3 are taxed at 10% and the $3 above them at 45%, giving 3 * 10% + 3 * 45% =
$1.65.
```

### Constraints

- `1 <= brackets.length <= 100`
- `1 <= capᵢ <= 1000`
- `0 <= rateᵢ <= 100`
- `0 <= income <= 1000`
- The caps are distinct and appear in ascending order.
- The last cap is at least `income`.

## Hints

### Hint 1

Sweep the tiers left to right while remembering where the previous tier
ended; that boundary starts at 0 for the very first tier.

### Hint 2

Tier `i` is owed `min(income, capᵢ)` minus that remembered boundary — and
once the cap reaches `income`, every earned dollar has been accounted for.
