# Keep the K Mightiest Values

## Description

Given an integer array `arr` and an integer `k`, rank the values by might
and return the `k` mightiest of them, in any order.

Might is measured against the array's midpoint `m`: a value `v` is
mightier than a value `w` when `|v - m| > |w - m|`. When the distances
are equal, the larger value counts as the mightier one.

The midpoint is the middle entry of the sorted values: in a list of `n`
entries it occupies 0-indexed position `((n - 1) / 2)`. For instance,
`[2, 9, 4]` sorts to `[2, 4, 9]`, so the midpoint sits at position `1`
and is `4`.

### Example 1

```text
Input: arr = [3,9,1,7,4], k = 2
Output: [9,7]
Explanation: The midpoint is 4. The value 9 is 5 away; 7 and 1 are each
3 away, and that tie goes to the larger value, 7. So the mightiest two
are [9, 7] — [7, 9] is equally acceptable.
```

### Example 2

```text
Input: arr = [-5,8,-1,8,2], k = 3
Output: [-5,8,8]
Explanation: The midpoint is 2. The value -5 is farthest at distance 7,
and the two copies of 8 come next at distance 6, so the answer is
[-5, 8, 8] in any order.
```

### Example 3

```text
Input: arr = [4], k = 1
Output: [4]
Explanation: A lone value is its own midpoint and the only possible
answer.
```

### Constraints

- `1 <= arr.length <= 10⁵`
- `-10⁵ <= arr[i] <= 10⁵`
- `1 <= k <= arr.length`

## Hints

### Hint 1

Sort (or select) once to land on the midpoint at position
`((n - 1) / 2)`.

### Hint 2

Rank the values by the pair (distance from the midpoint, value), both
descending, and keep the first `k` — a full sort with that key, a heap,
or a two-pointer sweep over the sorted array all get there.
