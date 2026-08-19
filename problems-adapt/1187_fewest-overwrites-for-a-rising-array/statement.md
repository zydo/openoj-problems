# Fewest Overwrites for a Rising Array

## Description

You are given two integer arrays, `values` and `pool`. In one move you may pick
positions `i` and `j` and overwrite `values[i]` with `pool[j]` — the same pool
entry may be used any number of times, and every overwrite counts as one move.

Return the smallest number of moves that turns `values` into a strictly
increasing array, that is, one where each element is larger than the one before
it. If no number of moves can achieve this, return `-1`.

### Example 1

```text
Input: values = [4,9,7,20], pool = [8,5]
Output: 1
Explanation: Overwrite 9 with 5, giving [4,5,7,20].
```

### Example 2

```text
Input: values = [5,9,7,8], pool = [11,12]
Output: 2
Explanation: No single overwrite repairs the array — nothing in the pool fits
between 5 and 7. Overwrite 7 with 11 and 8 with 12, giving [5,9,11,12].
```

### Example 3

```text
Input: values = [7,6,5], pool = [8]
Output: -1
Explanation: The 8 can lift one element, but the remaining pair still steps
down, so a strictly increasing arrangement is out of reach.
```

### Constraints

- `1 <= values.length, pool.length <= 2000`
- `0 <= values[i], pool[i] <= 10⁹`

## Hints

### Hint 1

Process the array left to right and ask, after each position: which values
could this prefix end on, and what did each of them cost so far?

### Hint 2

Sorting the pool and dropping duplicates turns "which pool entry can I put
here?" into a binary search for the smallest entry above the previous value —
the smallest choice squeezes the least, leaving the most room behind it.

### Hint 3

Each state (prefix ending on value `v`, cost `c`) forks two ways at the next
position: keep the original element when it beats `v` for free, or overwrite
it with that smallest fitting pool entry for one more move.
