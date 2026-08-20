# Fewest Fusions to Clear a Bar

## Description

You are given an integer array `nums` and an integer `k`.

While `nums` still holds at least two elements, you may perform a fusion:

- take the two smallest values `x` and `y` currently in the array,
- remove both, and
- insert the value `min(x, y) * 2 + max(x, y)`.

Fusions lift the smallest values, so repeated fusions eventually push every
remaining element up. Return the fewest fusions needed until every element of
`nums` is at least `k`.

The input guarantees that this is achievable.

### Example 1

```text
Input: nums = [3,1,4,15,9], k = 12
Output: 3
Explanation:
- Fuse 1 and 3 into 1*2 + 3 = 5; the array is now [4,5,9,15].
- Fuse 4 and 5 into 4*2 + 5 = 13; the array is now [9,13,15].
- Fuse 9 and 13 into 9*2 + 13 = 31; the array is now [15,31].
Every remaining element is at least 12, so three fusions suffice — and since
each fusion is forced to consume the current minimum, fewer cannot work.
```

### Example 2

```text
Input: nums = [7,7,9], k = 5
Output: 0
Explanation: Even the smallest element already clears the bar, so no fusion is
needed.
```

### Example 3

```text
Input: nums = [1,2,4], k = 12
Output: 2
Explanation: Fusing 1 and 2 gives 4, leaving [4,4]. Fusing the two 4s gives
12, leaving the single element [12], which clears the bar. The array drained
to one element on the way.
```

### Constraints

- `2 <= nums.length <= 2 * 10^5`
- `1 <= nums[i] <= 10^9`
- `1 <= k <= 10^9`
- The input is generated such that an answer always exists: after finitely
  many fusions, every element is at least `k`.

## Hints

### Hint 1

The operation must consume the two smallest values, so there is no choice to
make at any step — the whole process is determined. What data structure keeps
the current minimum cheap to fetch?

### Hint 2

Heapify once, then repeatedly pop twice, push the fused value, and count.

### Hint 3

The stopping test only needs the heap's minimum: once it reaches `k`, every
element has. Each fusion shrinks the array by one, so at most `n - 1` fusions
ever occur.
