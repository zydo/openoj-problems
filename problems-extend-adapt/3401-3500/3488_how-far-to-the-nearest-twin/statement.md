# How Far To The Nearest Twin

## Description

You are given a circular array `nums` — index `0` is considered the
immediate successor of the last index — together with an array `queries`
of positions into it.

Answer each query independently: from the position `queries[i]`, walk
around the circle in whichever direction is shorter and report how many
steps it takes to reach some other position `j` (never the starting
position itself) whose value equals `nums[queries[i]]`. If that value
occurs nowhere else on the circle, the query's answer is `-1`.

Return an array `answer` aligned with `queries`, where `answer[i]` is the
outcome described for `queries[i]`.

### Example 1

```text
Input: nums = [5,2,5,9,2,9], queries = [1,3]
Output: [3,2]
Explanation: queries[1] = 1 holds a 2, whose other copy sits at index 4;
walking 1 -> 2 -> 3 -> 4 takes 3 steps. queries[3] = 3 holds a 9, whose
other copy sits at index 5, reached in 2 steps by 3 -> 4 -> 5.
```

### Example 2

```text
Input: nums = [8,3,8,8], queries = [0]
Output: [1]
Explanation: The 8 at index 0 also appears at indices 2 and 3. The copy
at index 3 is only one step away, because the circle wraps: 0 -> 3
directly across the seam.
```

### Example 3

```text
Input: nums = [4,7,1], queries = [0,1,2]
Output: [-1,-1,-1]
Explanation: No value repeats anywhere in nums, so every queried position
is stranded and each answer is -1.
```

### Constraints

- `1 <= queries.length <= nums.length <= 100000`
- `1 <= nums[i] <= 1000000`
- `0 <= queries[i] < nums.length`

## Hints

### Hint 1

Bucket the positions of each distinct value into one list. Since the
positions are filled in increasing index order, every bucket is already
sorted without any extra sorting work.

### Hint 2

Within a bucket, the queried position has exactly two neighboring
occurrences — the one just before it and the one just after it, each
wrapping to the bucket's far end at the seam. A binary search locates the
queried position, and the circular step count to either neighbor is a
single modular subtraction; the smaller of the two is the answer.
