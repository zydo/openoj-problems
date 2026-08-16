# Solutions — Missing Number

## Gauss Sum Subtraction

The array holds `n` distinct values drawn from the `n + 1` integers `0..n`, so exactly one value of that range is absent. The sum of the complete range is fixed by the arithmetic series formula `n(n+1)/2`, which means the missing number is simply that total minus the sum of what is actually present — the one gap absorbs the entire difference.

The implementation is one expression: with `n = len(nums)`, return `n * (n + 1) // 2 - sum(nums)`. The integer division is exact because `n` and `n + 1` are consecutive integers, so their product is always even. Distinctness of the input guarantees the difference identifies a single missing value, never an ambiguity of several.

`sum` makes one pass over the array and the formula is O(1), meeting the follow-up's `O(n)` time / `O(1)` extra space requirement; in Python the arithmetic cannot overflow. (The XOR formulation — fold `0..n` and all array elements into one accumulator, where every present value cancels itself and only the missing one survives — achieves the same bounds and sidesteps overflow concerns in fixed-width languages.)

**Complexity:** `O(n)` time, `O(1)` space.
