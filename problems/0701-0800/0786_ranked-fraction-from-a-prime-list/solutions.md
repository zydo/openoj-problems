# Solutions — Ranked Fraction from a Prime List

## Value Bisection with Two-Pointer Counting

All candidate fractions lie between zero and one. Binary-search this numeric
interval. At each midpoint, count how many candidates are at most the bound
and record the greatest actual fraction that remains under it.

For each numerator index, advance a denominator pointer to the first value
that makes the fraction small enough. Every later denominator also qualifies,
so it contributes one contiguous suffix. The pointer never moves backward,
making a counting pass linear. Compare candidate fractions by cross
multiplication when selecting the greatest one under the bound.

If the count reaches `rank`, move the upper bound down and retain the recorded
pair; otherwise move the lower bound up. Fifty bisection rounds distinguish
all fractions formed from values within the stated limit.

**Complexity:** `O(n log(1/epsilon))` time and `O(1)` extra space, with a
fixed 50-round search.
