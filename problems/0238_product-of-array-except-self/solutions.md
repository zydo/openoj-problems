# Solutions — Product of Array Except Self

## Prefix and Suffix Products

The product of everything except `nums[i]` factors cleanly as (product of all elements before `i`) × (product of all elements after `i`). Both factors are computable with running products, so no division is ever needed — which is essential, since division would break on the zeros the array may contain and is forbidden by the problem anyway.

The implementation folds the two sweeps into the output array. The first pass, left to right, stores the running left product into `answer[i]` _before_ multiplying `nums[i]` in, so `answer[i]` ends up holding exactly the product of the prefix preceding `i`. The second pass, right to left, multiplies each `answer[i]` by a running right product that similarly lags one position behind, then absorbs `nums[i]`. After the two sweeps each cell holds prefix × suffix, which is the desired value.

Zeros need no special casing: a single zero makes every prefix-then-suffix product zero except at the zero's own index, where the two products multiply the non-zero elements around it, and two or more zeros zero everything — the formula produces all of this automatically. Apart from the output array (which by convention does not count), the only state is two integer accumulators, meeting the `O(1)` extra-space follow-up.

**Complexity:** `O(n)` time, `O(1)` space.
