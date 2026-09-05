# Sort by Prefix Flips

## Description

The only rearrangement tool allowed on the array `arr` is the prefix flip:
pick any `k` with `1 <= k <= arr.length` and reverse the leading segment
`arr[0..k-1]` in place. Flipping `[3,2,1,4]` with `k = 3`, for example,
reverses `[3,2,1]` and leaves `[1,2,3,4]`.

Return the list of `k` values of a sequence of prefix flips that ends with
`arr` sorted in ascending order.

Any sequence that sorts the array within `10 * arr.length` flips would
solve the puzzle, but this judge scores one exact answer, so the required
return is pinned to a single deterministic strategy that parks values from
the largest down. For each size `s` from `arr.length` down to `2`:

- Find the value `s` — the largest one the prefix `arr[0..s-1]` can still
  contain — inside that prefix.
- If it already sits at index `s-1`, no flip happens for this size.
- Otherwise, flip it to the front first when it is not already there: that
  flip's `k` is its index plus one. Then flip with `k = s`, which drops it
  onto index `s-1`, out of reach of every later flip.

Record the `k` of every flip actually performed, in order, and return that
list.

### Example 1

```text
Input: arr = [1,3,2]
Output: [2,3,2]
Explanation: k = 2 gives [3,1,2]; k = 3 gives [2,1,3]; the last k = 2 gives
[1,2,3].
```

### Example 2

```text
Input: arr = [2,4,3,1]
Output: [2,4,2,3,2]
Explanation: k = 2 brings 4 to the front, giving [4,2,3,1], and k = 4 drops
it on the last index, giving [1,3,2,4]. Then k = 2 gives [3,1,2,4], k = 3
gives [2,1,3,4], and the closing k = 2 gives [1,2,3,4].
```

### Example 3

```text
Input: arr = [5,2,1,4,3]
Output: [5,2,4,2]
Explanation: 5 already fronts the array, so one flip k = 5 lands it at the
bottom, giving [3,4,1,2,5]. The flip k = 2 readies 4 as [4,3,1,2,5] and
k = 4 parks it, giving [2,1,3,4,5]. The value 3 already ends its prefix, so
its round is skipped, and a final k = 2 gives [1,2,3,4,5].
```

### Constraints

- `1 <= arr.length <= 100`
- `1 <= arr[i] <= arr.length`
- All values in `arr` are distinct: `arr` is a permutation of `1` through
  `arr.length`.
