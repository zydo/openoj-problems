# Growing Into the Longer Array

## Description

You are given two integer arrays: `nums1` with `n` elements and `nums2`
with `n + 1`.

The task is to turn `nums1` into `nums2`. A single operation picks any
index of the current array and does exactly one of the following:

- raise that element by 1;
- lower that element by 1;
- append a copy of that element after everything else in the array.

Elements never swap places with one another, a fresh copy always joins at
the far end, and once a copy exists it is adjusted just like any original
element. Return the fewest operations that reshape `nums1` into `nums2`.

### Example 1

```text
Input: nums1 = [4,1], nums2 = [6,3,5]
Output: 5
Explanation: Raise nums1[0] to 5 and append a copy of it, leaving
[5,1,5]. Raise the first element to 6 and the last one to 3, then raise
the middle element to 3. Five operations in total, and no plan does
better.
```

### Example 2

```text
Input: nums1 = [7], nums2 = [7,2]
Output: 6
Explanation: Append a copy of the 7 to reach [7,7], then lower that copy
down to 2. Six operations.
```

### Example 3

```text
Input: nums1 = [3,5,9,2], nums2 = [3,5,9,2,9]
Output: 1
Explanation: Appending a copy of nums1[2] already produces
[3,5,9,2,9], so a single operation is enough.
```

### Constraints

- `1 <= n == nums1.length <= 10⁵`
- `nums2.length == n + 1`
- `1 <= nums1[i], nums2[i] <= 10⁵`

## Hints

### Hint 1

Appending is the only operation that adds an element and `nums2` needs
exactly one more than `nums1` provides, so every optimal plan appends
exactly once; all remaining work is ±1 nudging of fixed slots.

### Hint 2

Slot i away from the donor is pinned at |nums1[i] - nums2[i]| moves. The
only decision is which index j donates the copy, and its snapshot may be
captured anywhere along the donor's own walk, so the donor's extra cost is
just the distance from the tail value nums2[n] to the span between
nums1[j] and nums2[j] — minimize that over all j and add one for the
append.
