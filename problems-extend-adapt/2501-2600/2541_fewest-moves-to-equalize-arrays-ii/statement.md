# Fewest Moves to Equalize Arrays II

## Description

You are given two integer arrays `nums1` and `nums2`, both of length
`n`, together with an integer `k`. One move acts on `nums1` and consists
of picking two indices `i` and `j`, adding `k` to `nums1[i]` and
subtracting `k` from `nums1[j]`.

The arrays are equal once `nums1[i] == nums2[i]` for every index.
Return the fewest moves that achieve this, or `-1` if no sequence of
moves can.

### Example 1

```text
Input: nums1 = [0,6], nums2 = [6,0], k = 3
Output: 2
Explanation: The first slot must rise by 6 and the second must fall by
6, so two moves of size 3 in opposite directions do it, and one move
could never shift 6 units.
```

### Example 2

```text
Input: nums1 = [5,10,15], nums2 = [8,7,15], k = 3
Output: 1
Explanation: Adding 3 to index 0 and subtracting 3 from index 1 turns
nums1 into [8,7,15] in a single move.
```

### Example 3

```text
Input: nums1 = [1,4], nums2 = [7,4], k = 3
Output: -1
Explanation: Index 0 needs 6 more, but no slot anywhere needs to give
any up — every move creates a drop as well as a rise, so the target is
out of reach.
```

### Constraints

- `n == nums1.length == nums2.length`
- `2 <= n <= 10⁵`
- `0 <= nums1[i], nums2[j] <= 10⁹`
- `0 <= k <= 10⁵`

## Hints

### Hint 1

Think about when the goal is unreachable: a per-index gap that is not a
multiple of `k` can never be closed, the total wanted rise must equal
the total wanted drop, and `k = 0` only works when the arrays already
match.

### Hint 2

Every move ferries exactly `k` units up at one index and `k` units down
at another, so each move accounts for `2k` of the total absolute gap —
which pins the minimum move count.
