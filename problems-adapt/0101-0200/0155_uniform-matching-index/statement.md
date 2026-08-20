# Uniform Matching Index

## Description

Store an integer array that may contain repeated values. For any requested
`target`, choose uniformly at random among all indices whose value equals the
target. Every requested target is guaranteed to occur in the stored array.

Implement the `IndexSampler` class:

- `IndexSampler(int[] nums)` stores the array information needed for later
  draws.
- `int drawIndex(int target)` returns a uniformly chosen index `i` satisfying
  `nums[i] == target`.

### Statistical judging

The judge calls each `drawIndex` operation many thousands of times. Every
returned index must contain the requested value, and the observed frequencies
must stay within a tolerance of the uniform probability `1 / m`, where `m` is
the number of matching positions. The draw count scales with `m`, up to about
180000 calls.

For targets occupying more than roughly 120 positions, every draw is still
checked for validity while low-frequency outcomes are aggregated for a stable
distribution test.

### Example 1

```text
Input:
["IndexSampler", "drawIndex", "drawIndex", "drawIndex"]
[[[4, 9, 4, 7, 4, 9]], [4], [9], [7]]
Output: [null, 2, 5, 3]
Explanation:
The first draw may return 0, 2, or 4 with probability 1/3 each. The second
may return 1 or 5 with probability 1/2 each. Index 3 is the only match for 7.
```

### Example 2

```text
Input:
["IndexSampler", "drawIndex", "drawIndex"]
[[[6, 6, 6, 6]], [6], [6]]
Output: [null, 0, 3]
Explanation: Each draw chooses any index from 0 through 3 with probability
1/4. The displayed draws are one possible outcome.
```

### Constraints

- `1 <= nums.length <= 2 * 10^4`
- Every element of `nums` is a signed 32-bit integer.
- Each `target` is an element of `nums`.
- No more than `10^4` method calls are made.

### Follow-up

If the array arrives as a very large one-pass stream, can a uniform match be
selected using `O(1)` extra space?

## Hints

### Hint 1

The matching indices never change. Consider grouping indices by value during
construction.

### Hint 2

Once a target's group is available, generate one uniform integer in the
group's index range.

### Hint 3

For the constant-space variation, retain the `j`-th matching index with
probability `1 / j` as matches pass through the stream.
