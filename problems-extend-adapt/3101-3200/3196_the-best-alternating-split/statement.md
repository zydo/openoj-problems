# The Best Alternating Split

## Description

An array `nums` of `n` integers is on the table. For a contiguous piece
`nums[l..r]` (with `0 <= l <= r < n`), its value is the alternating sum that
starts with a plus at the left edge:

`value(l, r) = nums[l] − nums[l + 1] + nums[l + 2] − … + (−1)^(r − l) · nums[r]`

Cut `nums` into consecutive pieces — every element lands in exactly one
piece — so that the pieces' values add up to as much as possible. Leaving
the array uncut is allowed and simply means scoring `value(0, n − 1)`.
Return that largest possible total.

### Example 1

```text
Input: nums = [2,-5,4,-1,3]
Output: 15
Explanation: Cut into [2,-5], [4,-1], [3]. The pieces score
(2 + 5) + (4 + 1) + 3 = 15, and no segmentation does better.
```

### Example 2

```text
Input: nums = [4]
Output: 4
Explanation: A single element cannot be cut, so the total is 4.
```

### Example 3

```text
Input: nums = [3,-3,3]
Output: 9
Explanation: Cutting into [3,-3] and [3] scores (3 + 3) + 3 = 9. Every
element ends up plus-signed, which is clearly the ceiling here.
```

### Example 4

```text
Input: nums = [-2,7,-4]
Output: 9
Explanation: Left whole, the array scores −2 − 7 − 4 = −13. Cutting after
the first element gives pieces [-2] and [7,-4], scoring −2 + (7 + 4) = 9,
which no other segmentation beats.
```

### Constraints

- `1 <= nums.length <= 10⁵`
- `-10⁹ <= nums[i] <= 10⁹`

## Hints

### Hint 1

Think dynamic programming over positions.

### Hint 2

A cut is only ever useful to hand some element a fresh plus sign. So the
task is really: pick elements to turn negative, no two of them adjacent,
and never the first element.

### Hint 3

Scan left to right carrying two numbers: the best total when the current
element keeps its plus sign, and the best total when it is negated.

### Hint 4

A plus-signed element may follow either state, while a negated element must
follow a plus-signed one. Each position updates both numbers from the
previous pair in constant time.
