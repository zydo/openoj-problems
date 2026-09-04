# Cheapest Ruler Hops

## Description

Think of a strictly increasing array `nums` as marks on a ruler. For a mark
`x`, define `closest(x)` as its adjacent mark `y` whose value is nearest to
`nums[x]`; when both neighbors exist and tie, the smaller index wins.

Standing on mark `x`, you may travel two ways:

- Jump straight to any mark `y` for `abs(nums[x] - nums[y])`, or
- Step to `closest(x)` for a flat fare of `1`.

Each query `queries[i] = [li, ri]` asks for the least total fare to travel
from mark `li` to mark `ri`.

Return an array `ans` where `ans[i]` answers the `i`th query.

`abs(x - y)` denotes the absolute difference of `x` and `y`.

### Example 1

```text
Input: nums = [4,9,10,17], queries = [[0,3],[3,0],[1,3],[2,0]]
Output: [9,7,8,6]
Explanation:
    The closest marks are [1, 2, 1, 2].
    For [0, 3]: hop 0 -> 1 on the flat fare 1, hop 1 -> 2 on the flat fare
    1, then jump 2 -> 3 for |10 - 17| = 7. Total 1 + 1 + 7 = 9.
    For [3, 0]: hop 3 -> 2 and 2 -> 1 on the flat fare, then jump 1 -> 0
    for |9 - 4| = 5. Total 1 + 1 + 5 = 7.
    For [1, 3]: hop 1 -> 2 for 1, then jump 2 -> 3 for 7. Total 8.
    For [2, 0]: hop 2 -> 1 for 1, then jump 1 -> 0 for 5. Total 6.
```

### Example 2

```text
Input: nums = [-8,-6,5], queries = [[0,2],[2,0],[1,2]]
Output: [12,2,11]
Explanation:
    The closest marks are [1, 0, 1].
    For [0, 2]: hop 0 -> 1 for 1, then jump 1 -> 2 for |-6 - 5| = 11.
    Total 12.
    For [2, 0]: both hops use the flat fare, 2 -> 1 -> 0, for a total of 2.
    For [1, 2]: the direct jump costs 11, and nothing beats it.
```

### Example 3

```text
Input: nums = [1,4], queries = [[0,1],[1,0]]
Output: [1,1]
Explanation: With only two marks, each is the other's closest, so every
trip — in either direction — rides the flat fare of 1.
```

### Constraints

- `2 <= nums.length <= 10⁵`
- `-10⁹ <= nums[i] <= 10⁹`
- `nums` is strictly increasing
- `1 <= queries.length <= 10⁵`
- `queries[i] = [li, ri]`
- `0 <= li, ri < nums.length`

## Hints

### Hint 1

Chasing `closest(x)` from mark to mark traces little chains along the
ruler; when a chain heads toward your target, each of its steps costs a
single unit.

### Hint 2

Tabulate prefix sums of the unit-step costs, once for travel to the right
and once for travel to the left.

### Hint 3

Every query then reduces to one prefix-sum difference along the direction
of travel — hopping mark-to-mark and jumping straight are the only routes
worth considering.
