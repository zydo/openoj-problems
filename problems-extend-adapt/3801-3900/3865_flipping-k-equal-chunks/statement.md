# Flipping k Equal Chunks

## Description

Take an integer array `nums` of length `n` and an integer `k`, and cut the
array into `k` consecutive chunks that all have the same length `n / k`.
Then flip every chunk in place: each chunk's elements appear in reverse
order, while the chunks themselves keep their positions.

You are guaranteed that `k` divides `n`.

Output the array that results from flipping all `k` chunks.

### Example 1

```text
Input: nums = [9,7,8,2,4,1], k = 2
Output: [8,7,9,1,4,2]
Explanation: The two chunks are [9, 7, 8] and [2, 4, 1]. Flipping each one
in place gives [8, 7, 9] and [1, 4, 2], and reading them back to back
yields [8, 7, 9, 1, 4, 2].
```

### Example 2

```text
Input: nums = [3,1,4,1,5,9,2,6], k = 4
Output: [1,3,1,4,9,5,6,2]
Explanation: With k = 4 each chunk holds two elements, so the pairs
(3,1), (4,1), (5,9), and (2,6) each swap their two members.
```

### Example 3

```text
Input: nums = [10,20], k = 2
Output: [10,20]
Explanation: Every chunk is a single element, and flipping a single element
changes nothing, so the array comes back untouched.
```

### Constraints

- `1 <= n == nums.length <= 1000`
- `1 <= nums[i] <= 1000`
- `1 <= k <= n`
- `n` is divisible by `k`.

## Hints

### Hint 1

Walk the array in strides of `n / k` — that stride is the chunk length.

### Hint 2

Within one chunk, two pointers at its ends swap inward until they meet.
