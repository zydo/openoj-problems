# All The Subsets

## Description

You are given an integer array `nums` whose elements are all distinct.
Lay out every subset the array can form — the full power set, from the
empty subset up through the whole array.

No subset may appear twice. Report them in the order the examples
show, which is a counting order over positions: think of each subset
as a bitmask across the positions of `nums`, where bit `i` set means
`nums[i]` joins the subset, and walk the masks upward from all bits
clear (`[]`) to all bits set (the entire array). Inside any one
subset, the elements keep the order they have in `nums`.

### Example 1

```text
Input: nums = [2,5,9]
Output: [[],[2],[5],[2,5],[9],[2,9],[5,9],[2,5,9]]
Explanation: The mask walks from 000 (nothing kept) up to 111 (all
three kept), reading bits low to high: [2] before [5] before [2,5],
then the 9-mask family.
```

### Example 2

```text
Input: nums = [-4]
Output: [[],[-4]]
Explanation: One element yields exactly two subsets.
```

### Example 3

```text
Input: nums = [6,1]
Output: [[],[6],[1],[6,1]]
Explanation: The 6-mask (second position) comes before the 1-mask
(first position) in counting order.
```

### Constraints

- `1 <= nums.length <= 10`
- `-10 <= nums[i] <= 10`
- Every number in `nums` is unique.
