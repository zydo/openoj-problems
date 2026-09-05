# Largest Alternating Total From Swaps

## Description

Read an array left to right, giving its entries alternating `+` and `-`
signs starting with `+`, and add everything up. That value is the
array's alternating total: `nums[0] - nums[1] + nums[2] - nums[3] + ...`.

Alongside the integer array `nums` you receive a list of index pairs
`swaps`, where `swaps[i] = [pᵢ, qᵢ]`. A pair names two positions whose
values may be exchanged, and any pair may be exercised as many times as
you like, in any sequence. Collectively the pairs decide which
arrangements of `nums` are within reach. Return the greatest
alternating total over every arrangement you can reach.

### Example 1

```text
Input: nums = [5,1,4,2], swaps = [[0,1],[2,3]]
Output: 6
Explanation: Positions 0 and 1 may trade with each other, and so may
positions 2 and 3. The opening arrangement already seats the larger
value of each pair on the even slot: 5 - 1 + 4 - 2 = 6.
```

### Example 2

```text
Input: nums = [2,7,4], swaps = [[0,1]]
Output: 9
Explanation: Exchanging positions 0 and 1 produces [7,2,4], whose
alternating total is 7 - 2 + 4 = 9.
```

### Example 3

```text
Input: nums = [1000000000,1,1000000000,1,1000000000], swaps = [[0,1],[1,2]]
Output: 2999999998
Explanation: The chained pairs merge positions 0, 1, and 2 into one
exchangeable group, so the group's two large values can occupy the even
slots 0 and 2 with the 1 wedged between them; positions 3 and 4 are
fixed. The total is 1000000000 - 1 + 1000000000 - 1 + 1000000000 =
2999999998.
```

### Constraints

- `2 <= nums.length <= 10^5`
- `1 <= nums[i] <= 10^9`
- `0 <= swaps.length <= 10^5`
- `swaps[i] = [pᵢ, qᵢ]` with `0 <= pᵢ < qᵢ <= nums.length - 1`
- No two pairs are identical: `[pᵢ, qᵢ] != [pⱼ, qⱼ]` whenever `i != j`

## Hints

### Hint 1

Draw an edge for every pair. Whatever values travel into one connected
piece of that graph can be shuffled over all of its positions, so run a
disjoint-set union over the pairs to carve the array into freely
rearrangeable groups.

### Hint 2

Within a group, count its even positions and call that `E`. Filling
those `E` slots with the group's `E` largest values is what maximizes
the group's share of the total.

### Hint 3

If `sumTopE` sums those largest `E` values and `sumAll` sums everything
in the group, the group contributes `2 * sumTopE - sumAll`. Add the
per-group terms into a 64-bit accumulator.
