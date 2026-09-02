# Permutation Bookends

## Description

A permutation of size n is an arrangement of the integers 1 through n in
which each value appears exactly once. Call such an arrangement bookended
when it opens with 1 and closes with n — the two extreme values hold the
two end seats.

Given a 0-indexed array `nums` that is a permutation, you may repeatedly
swap two neighboring entries. Return the fewest adjacent swaps needed to
turn `nums` into a bookended permutation.

### Example 1

```text
Input: nums = [3,1,2,5,4]
Output: 2
Explanation:
Swapping the first pair gives [1,3,2,5,4], and swapping the last pair gives
[1,3,2,4,5]. One swap is the least that can settle 1 at the front and one
is the least for 5 at the back, and neither move interferes with the other,
so two swaps are both necessary and sufficient.
```

### Example 2

```text
Input: nums = [5,2,3,4,1]
Output: 7
Explanation:
Four swaps walk 1 from the back to the front, and those same swaps carry 5
one seat to the right along the way; three further swaps then escort 5 to
the end. The two values pass each other, so the swap where they cross is
shared and only seven are needed in total.
```

### Example 3

```text
Input: nums = [1,2,3]
Output: 0
Explanation:
The arrangement already opens with 1 and closes with 3, so nothing to do.
```

### Constraints

- `2 <= nums.length == n <= 50`
- `1 <= nums[i] <= 50`
- `nums` is a permutation of the integers 1 through n

## Hints

### Hint 1

Only the seats held by 1 and n matter; the values between them are
bystanders. Locate those two positions first.

### Hint 2

Each adjacent swap advances its target by at most one seat, so the costs
are pos(1) for reaching the front and n - 1 - pos(n) for reaching the back.
When 1 starts to the right of n, the single swap where the two values cross
is counted in both costs but performed once — subtract 1 for that overlap.
