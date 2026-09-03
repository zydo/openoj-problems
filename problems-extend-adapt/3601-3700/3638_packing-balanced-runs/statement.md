# Packing Balanced Runs

## Description

A line of `n` parcels stands in a fixed order, and `weight[i]` is the weight
of the `i`-th parcel. A shipment is any contiguous stretch of parcels, and
it counts as balanced when its last parcel is strictly lighter than the
heaviest parcel anywhere inside that stretch.

Select as many shipments as the two rules allow: chosen shipments may never
overlap, and no parcel may belong to more than one of them. Parcels are
allowed to stay unshipped. Return the largest possible number of balanced
shipments.

### Example 1

```text
Input: weight = [3,1,4,2,5,1]
Output: 3
Explanation: Ship [3,1] — its last parcel weighs 1, strictly less than the
stretch maximum of 3. Ship [4,2] the same way, then [5,1]. Three disjoint
balanced stretches, and six parcels cannot be split more than three ways.
```

### Example 2

```text
Input: weight = [5,4,3,2,1]
Output: 2
Explanation: Ship [5,4] and [3,2], leaving the final parcel unshipped. A
falling line dips at every step, but five parcels cannot fill three
shipments of two or more, so two is the ceiling.
```

### Example 3

```text
Input: weight = [1,2,3]
Output: 0
Explanation: The weights only climb, so every stretch ends on its own
maximum and nothing qualifies as balanced.
```

### Constraints

- `2 <= n <= 10⁵`
- `1 <= weight[i] <= 10⁹`

### Hint 1

A stretch can qualify only where a strictly heavier parcel sits earlier in
it — so carrying the heaviest weight seen since the current stretch began
tells you immediately whether the parcel in front of you can close one.

### Hint 2

Closing at the very first qualifying parcel is never a mistake: it frees the
most parcels for whatever comes after. Count the closes.
