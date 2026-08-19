# Largest Smallest Split Sum

## Description

Cut `nums` into exactly `k + 1` non-empty pieces by placing `k` cuts between
elements. A piece is a contiguous run of elements, and every element belongs
to exactly one piece.

The score of a cutting is the smallest sum among its `k + 1` pieces. Return
the largest score any cutting can achieve.

### Example 1

```text
Input: nums = [4,2,7,3,5,1], k = 2
Output: 6
Explanation: Cuts after the second and third elements give pieces [4,2],
[7], [3,5,1] with sums 6, 7, 9. The three pieces total 22, so raising every
piece to 7 would need at least 21 — yet no arrangement leaves the small
elements grouped well enough; 6 is the ceiling.
```

### Example 2

```text
Input: nums = [6,2,9], k = 0
Output: 17
Explanation: With no cuts there is a single piece, whose sum is the whole
total 17.
```

### Example 3

```text
Input: nums = [8,1,2,1,9,4], k = 2
Output: 4
Explanation: The run [1,2,1] sums to only 4 and separates the 8 from the 9
and 4. Cutting [8] | [1,2,1] | [9,4] scores 4, and any split of [1,2,1,9,4]
into two pieces leaves one of them at 4 or below.
```

### Constraints

- `1 <= nums.length <= 10^4`
- `0 <= k < nums.length`
- `1 <= nums[i] <= 10^5`

## Hints

### Hint 1

Turn the question inside out: fix a threshold `t` and ask whether the array
can be cut into `k + 1` pieces whose sums are all at least `t`. The answer
you want is the largest `t` that survives.

### Hint 2

That question is monotone — a threshold every piece can clear implies the
same for anything smaller — so binary search over `t`.

### Hint 3

Check a threshold greedily in one sweep: accumulate elements and cut the
moment the running sum reaches `t`. Cutting at the first legal spot starves
no later piece, so this produces the maximum possible number of pieces.

### Hint 4

Cap the search above with `sum(nums) / (k + 1)` — the average piece — and
start at 1, since every element is at least 1.
