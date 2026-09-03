# Rearrange Or Retune

## Description

Two integer arrays `arr` and `brr` share the same length `n`, and you also
have an integer `k`. You may apply these operations to `arr` as often as
you like:

- Operation 1: cut `arr` into any number of contiguous pieces and lay the
  pieces back in an arbitrary order. Every use of this operation costs
  exactly `k`.
- Operation 2: pick one element and shift it up or down by a positive
  integer `x`. This costs `x`.

Return the least total cost that turns `arr` into `brr`.

### Example 1

```text
Input: arr = [1,-8,4], brr = [-8,4,1], k = 1
Output: 1
Explanation: Pay 1 once to split arr into [1], [-8, 4] and reorder the
pieces as [-8, 4, 1], which already equals brr. The total cost is 1.
```

### Example 2

```text
Input: arr = [3,7], brr = [3,7], k = 5
Output: 0
Explanation: The arrays already match element for element, so nothing
needs to be spent.
```

### Example 3

```text
Input: arr = [1,2,3], brr = [4,5,6], k = 100
Output: 9
Explanation: Each position is 3 away from its target, so retuning in
place costs 3 + 3 + 3 = 9. A rearrangement would add a fee of 100 on top
of the same 9, so staying put is cheaper.
```

### Constraints

- `1 <= arr.length == brr.length <= 10⁵`
- `0 <= k <= 2 * 10¹⁰`
- `-10⁵ <= arr[i] <= 10⁵`
- `-10⁵ <= brr[i] <= 10⁵`

## Hints

### Hint 1

Think about what Operation 1 really buys you: what orders of `arr` can
you reach, and how many times do you ever need to pay for it?

### Hint 2

One candidate plan never reorders anything — its cost is the total
distance between `arr[i]` and `brr[i]` at each position.

### Hint 3

The other plan pays `k` once and matches greedily: sort both arrays and
the positions pair up in sorted order, which minimizes the total
displacement.
