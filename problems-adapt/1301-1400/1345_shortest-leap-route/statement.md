# Shortest Leap Route

## Description

You start on index `0` of the array `nums` and want to arrive at its final
index. A single leap takes you from the index `i` you occupy to any one of:

- `i - 1`, if that index exists;
- `i + 1`, if that index exists;
- any index other than `i` whose value equals `nums[i]`.

No leap may land outside the array. Return the smallest number of leaps that
brings you to the final index.

### Example 1

```text
Input: nums = [5,8,8,2,5,13,2]
Output: 3
Explanation: Leap 0 -> 4, since both hold 5; step back 4 -> 3; then leap 3 -> 6,
since both hold 2. Two leaps are not enough: after one leap you can only be on
index 1 or index 4, and neither is a leap away from index 6.
```

### Example 2

```text
Input: nums = [6]
Output: 0
Explanation: The starting index is already the final one.
```

### Example 3

```text
Input: nums = [3,9,4,9,3]
Output: 1
Explanation: The first and last entries are both 3, so one leap spans the whole
array.
```

### Constraints

- `nums` holds at least 1 and at most `5 * 10^4` values.
- Each value lies in `-10^8 <= nums[i] <= 10^8`.

## Hints

### Hint 1

Read the array as a graph: an index is a vertex, and each legal leap is an edge.
Every edge costs the same, so the answer is a shortest path from vertex `0` to
the last vertex — the natural job for a breadth-first sweep.

### Hint 2

Finding the equal-valued neighbours of a vertex by rescanning the array turns
each expansion linear. Bucket the indices by their value in one preliminary
pass instead.

### Hint 3

Expanding one member of a bucket reaches every other member at the same
distance, so that bucket can never supply an unvisited vertex again. Empty it
right after use, or an array whose values are all equal costs quadratic time.
