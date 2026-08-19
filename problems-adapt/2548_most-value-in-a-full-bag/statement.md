# Most Value in a Full Bag

## Description

You are given an array `items` of pairs, where `items[i] = [value_i, weight_i]`
describes one loadable object, and a positive integer `capacity`.

Objects here are not take-it-or-leave-it: any object may be cut into parts.
Cutting object `i` into fractions `f` and `1 - f` yields two pieces, the first
with weight `weight_i * f` and value `value_i * f`, the second with the
remaining weight and value. Value and weight always scale together.

Load pieces into a bag of size `capacity` until the bag is **exactly** full,
and return the largest total value such a load can have. If the objects
together are too light to fill the bag, return `-1`. Answers within `10⁻⁵` of
the best attainable total are accepted.

### Example 1

```text
Input: items = [[3,2],[9,1],[30,4]], capacity = 6
Output: 40.50000
Explanation: Per unit of weight the objects are worth 1.5, 9 and 7.5. Take the
second object whole (value 9, 5 units of space left), the third object whole
(value 30, 1 unit left), then half of the first object: weight 2 / 2 = 1 and
value 3 / 2 = 1.5. The bag is full at a total of 40.5.
```

### Example 2

```text
Input: items = [[20,5],[12,3],[7,2]], capacity = 10
Output: 39.00000
Explanation: The weights sum to exactly 10, so every object must be taken in
full; the total value is 20 + 12 + 7.
```

### Example 3

```text
Input: items = [[40,4],[15,3]], capacity = 9
Output: -1.00000
Explanation: The objects weigh 7 in total, and no cut can create more weight,
so a bag of size 9 can never be filled.
```

### Constraints

- `1 <= items.length <= 10⁵`
- `items[i].length == 2`
- `1 <= value_i, weight_i <= 10⁴`
- `1 <= capacity <= 10⁹`
- The judge accepts any answer within `10⁻⁵` of the optimum.

## Hints

### Hint 1

Only one property of an object matters while the bag still has room: how much
value each unit of its weight carries.

### Hint 2

Suppose a full load gives some weight to an object whose value per unit is
lower than another's. Swapping that weight over never decreases the total —
so an optimal load exists that fills the dearest units first.

### Hint 3

Sort the objects by value per unit of weight, descending, and pour them in
that order. Take each object whole while it fits; the first object that
overflows is cut, and only the piece that tops the bag off is kept.

### Hint 4

Do not forget the feasibility side: if the weights cannot even reach
`capacity`, no cut helps, and the answer is `-1`.
