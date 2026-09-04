# Fewest Locks To Free Before Sorting

## Description

You are handed an array `nums` whose entries all lie between 1 and 3, plus a
binary array `locked` of the same length.

Call `nums` sortable if adjacent swaps alone can arrange it in nondecreasing
order, where swapping positions `i` and `i + 1` is legal only when the two
values differ by exactly 1 and `locked[i]` is 0.

One operation frees a single position: pick an index `i` and set `locked[i]`
to 0.

Return the fewest operations that make `nums` sortable, or `-1` if no amount
of unlocking can manage it.

### Example 1

```text
Input: nums = [2,1,1,2,3,3], locked = [0,0,0,1,0,0]
Output: 0
Explanation: Nothing is in the way. Swap indices 0 and 1, then indices 1
and 2, and the array reads [1,1,2,2,3,3] — sorted without freeing anything.
```

### Example 2

```text
Input: nums = [2,1,2,3,2,3], locked = [1,0,1,1,0,1]
Output: 2
Explanation: Free indices 0 and 3. Now swap indices 0 and 1, then indices
3 and 4, reaching [1,2,2,2,3,3]. No smaller set of freed positions works.
```

### Example 3

```text
Input: nums = [1,3,1,2,2,3], locked = [0,0,0,0,0,0]
Output: -1
Explanation: The 3 at index 1 can never get past any of the 1s to its
right: swaps only exchange values that differ by 1, and it differs from
them by 2. Every index is already unlocked here, so the array is hopeless.
```

### Constraints

- `1 <= nums.length <= 10⁵`
- Every `nums[i]` is 1, 2, or 3.
- `locked.length == nums.length`
- `locked[i]` is 0 or 1.

## Hints

### Hint 1

A swap only exchanges neighboring values that differ by exactly 1, so a 1
and a 3 can never trade places. The array is doomed the moment some 3 sits
left of some 1.

### Hint 2

Otherwise 1s travel only leftward and 3s only rightward. Each needed swap
lands on a boundary inside `first 2 … last 1` or inside `first 3 … last 2`
— count the locked positions in those two stretches.
