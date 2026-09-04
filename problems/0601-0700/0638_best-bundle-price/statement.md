# Best Bundle Price

## Description

A catalog has `n` item kinds. `price[i]` is the regular cost of one unit of
item `i`, and `needs[i]` is the exact number of units of that item you must
obtain.

You may also use the package deals in `special` any number of times. Each
deal has `n + 1` integers: its first `n` entries give the quantities of the
corresponding item kinds, while its final entry is the package's cost. A deal
may only be used when none of its quantities would make you exceed `needs`.

Return the minimum amount needed to satisfy every requested quantity exactly.
You may combine individual purchases with any valid package deals.

### Example 1

```text
Input: price = [3,4], special = [[1,1,5],[2,0,5]], needs = [2,2]
Output: 10
Explanation: Take the [1,1] package twice. It supplies exactly two of each
item for 5 + 5 = 10.
```

### Example 2

```text
Input: price = [4,6,3], special = [[1,1,1,10],[0,2,1,11]], needs = [1,2,2]
Output: 18
```

### Example 3

```text
Input: price = [5], special = [[2,8],[3,20]], needs = [4]
Output: 16
Explanation: The two-unit package can be used twice, costing 8 + 8.
```

### Constraints

- `n == price.length == needs.length`
- `1 <= n <= 6`
- `0 <= price[i], needs[i] <= 10`
- `1 <= special.length <= 100`
- `special[i].length == n + 1`
- `0 <= special[i][j] <= 50`
- Every package supplies at least one item: some `special[i][j]` is nonzero
  for `0 <= j < n`.

## Hints

### Hint 1

Once you know the vector of quantities still needed, neither the past
purchase order nor the original basket matters — that remaining vector is a
complete subproblem state.

### Hint 2

From a state, either purchase one remaining item at its regular cost or take
a package whose quantity vector fits component by component. Never consider a
package that supplies more than the state still needs.

### Hint 3

Different purchase sequences often lead to the same remaining vector, so
memoize the cheapest completion for each vector instead of resolving that
subproblem repeatedly.
