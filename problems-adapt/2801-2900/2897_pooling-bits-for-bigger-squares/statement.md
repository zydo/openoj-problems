# Pooling Bits For Bigger Squares

## Description

An integer array `nums` and a positive integer `k` are given. One move
may be applied to the array any number of times: pick two distinct
indices `i` and `j`, then set `nums[i]` to `nums[i] AND nums[j]` and
`nums[j]` to `nums[i] OR nums[j]` in the same stroke, where AND and OR
are the bitwise operations.

Once the array is in whatever shape you like, pick `k` of its elements
and add up their squares.

Return the largest sum of squares that can be reached. Because the
total can be enormous, report it modulo `10⁹ + 7`.

### Example 1

```text
Input: nums = [3,5], k = 2
Output: 50
Explanation: Apply the move to indices 0 and 1: nums[0] becomes
3 AND 5 = 1 and nums[1] becomes 3 OR 5 = 7, leaving [1, 7]. Choosing
both elements gives 1² + 7² = 50, and no arrangement does better.
```

### Example 2

```text
Input: nums = [1,2,4], k = 1
Output: 49
Explanation: Merge the values bit by bit — 1 and 2 become (1, 3),
then 3 and 4 become (3, 7) — so the single chosen element can be 7,
worth 7² = 49.
```

### Example 3

```text
Input: nums = [9,6,1], k = 3
Output: 226
Explanation: Bit 3 exists only in the 9, so no element can ever exceed
15. The best final shape carries bits 0–3 in one element (15), leaves a
second copy of bit 0 as a 1, and abandons the last element at 0, for a
sum of 15² + 1² + 0² = 226.
```

### Constraints

- `1 <= k <= nums.length <= 10⁵`
- `1 <= nums[i] <= 10⁹`

## Hints

### Hint 1

The move neither creates nor destroys a single bit: the AND keeps the
bits both values shared and the OR keeps the bits either one had, so
each bit position owns a fixed pool of copies that moves merely
redistribute.

### Hint 2

To push the sum of squares up, pour the pools into the `k` chosen
slots from the highest bit down — adding a set bit to a larger running
value raises its square by more, so the biggest slots claim every
pool's copies first.
