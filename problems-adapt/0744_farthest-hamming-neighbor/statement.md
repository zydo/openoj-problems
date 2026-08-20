# Farthest Hamming Neighbor

## Description

You are given an array `nums` and an integer `m`. Every element satisfies
`0 <= nums[i] < 2ᵐ`, so each one is an `m`-bit word. The Hamming distance
between two such words is the number of bit positions where they disagree
(pad with leading zeroes as needed).

Return an array `answer` of the same length as `nums` in which `answer[i]` is
the largest Hamming distance between `nums[i]` and any other element of the
array (including itself, which contributes 0).

### Example 1

```text
Input: nums = [3,5,1], m = 3
Output: [2,2,1]
Explanation: Written as 3-bit words the array is [011,101,001].
011 vs 101 differs in two positions, 011 vs 001 in one — so 3's farthest
neighbor is at distance 2. The word 101 also reaches distance 2 (against 011),
while 001 disagrees with each neighbor in exactly one position.
```

### Example 2

```text
Input: nums = [10,5,12], m = 4
Output: [4,4,2]
Explanation: As 4-bit words: [1010,0101,1100]. The words 1010 and 0101 are
bitwise complements, so each of them attains the maximum possible distance 4.
The word 1100 disagrees with 1010 in two positions and with 0101 in two
positions, so its farthest neighbor sits at distance 2.
```

### Example 3

```text
Input: nums = [0,1,2], m = 2
Output: [1,2,2]
Explanation: As 2-bit words: [00,01,10]. The word 00 disagrees once with each
of the others, while 01 and 10 are complements and sit at distance 2 from each
other.
```

### Constraints

- `1 <= m <= 17`
- `2 <= nums.length <= 2ᵐ`
- `0 <= nums[i] < 2ᵐ`

## Hints

### Hint 1

For a word `x`, which single word is at distance exactly `m` from it? What
does that let you say about "maximum distance from x" in terms of a minimum?

### Hint 2

The distance from `x` to `y` plus the distance from the complement of `x` to
`y` is always `m`. So maximizing over `y` for `x` is minimizing over `y` for
the complement of `x`.

### Hint 3

Picture all `2ᵐ` words as vertices, joined when they differ in exactly one
bit. Hamming distance is then shortest-path length in this graph.

### Hint 4

Flood that graph outward from every element of `nums` at once; the first time
the flood reaches a vertex is via a shortest path, and the complement of each
query word reads its answer straight off the flood distances.
