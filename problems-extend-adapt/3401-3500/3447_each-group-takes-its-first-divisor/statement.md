# Each Group Takes Its First Divisor

## Description

You are given an array `groups`, where `groups[i]` is the size of the i-th
group, and an array `elements` of candidate element values.

Hand out the elements to the groups under these rules:

- Element `j` may serve group `i` only when `elements[j]` divides
  `groups[i]` exactly.
- When several elements qualify, the group takes the one with the smallest
  index `j`.
- A group with no qualifying element receives `-1`.

Return the array of chosen element indices, one per group, with `-1`
where nothing qualifies.

Note: the same element may serve any number of groups.

### Example 1

```text
Input: groups = [12,9,18,7], elements = [6,3,4]
Output: [0,1,0,-1]
Explanation: 6 divides both 12 and 18, so groups 0 and 2 take element 0.
9 is not divisible by 6, so group 1 falls back to element 1 (value 3).
No element value divides 7, so group 3 gets -1.
```

### Example 2

```text
Input: groups = [5,10,4,25], elements = [2,5,5]
Output: [1,0,0,1]
Explanation: Element 0 (value 2) divides 10 and 4 but not 5 or 25, which
both take element 1 (value 5). The second 5 at index 2 is never chosen,
because the earlier copy already covers the same groups.
```

### Example 3

```text
Input: groups = [14], elements = [7]
Output: [0]
Explanation: 7 divides 14, so the single group takes element 0.
```

### Constraints

- `1 <= groups.length <= 10⁵`
- `1 <= elements.length <= 10⁵`
- `1 <= groups[i] <= 10⁵`
- `1 <= elements[i] <= 10⁵`

## Hints

### Hint 1

Think of a sieve: a single element value can settle every group size it
divides in one sweep of its multiples.

### Hint 2

Walk `elements` in index order and let each value mark its multiples only
where nothing has marked before — the first index to reach a multiple is
the one that survives.

### Hint 3

A value that already appeared cannot improve any group, since its earlier
copy has the same divisors and a smaller index.
