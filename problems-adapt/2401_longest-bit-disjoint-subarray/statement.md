# Longest Bit-Disjoint Subarray

## Description

You are given an array `nums` of positive integers.

Call a block of elements **bit-disjoint** when no two of its members share a
set bit — that is, the bitwise AND of every pair of distinct positions inside
the block is `0`. A single element qualifies trivially.

Find the longest contiguous block of `nums` that is bit-disjoint and return its
length.

### Example 1

```text
Input: nums = [2,9,32,5]
Output: 3
Explanation: In binary the elements are 0010, 1001, 100000, 0101. The first
three use wholly separate bits: every pairwise AND among 2, 9, 32 is 0. The 5
(0101) shares a bit with 9 (1001), so the block cannot reach past index 2, and
no later block is longer. The answer is 3.
```

### Example 2

```text
Input: nums = [6,6,6]
Output: 1
Explanation: Equal values share every bit with each other, so any block of two
or more sixes fails. Only single elements qualify, and the answer is 1.
```

### Example 3

```text
Input: nums = [1,2,4,32]
Output: 4
Explanation: Each element is a distinct power of two, so no bit is ever shared
and the whole array is bit-disjoint.
```

### Constraints

- `1 <= nums.length <= 10⁵`
- `1 <= nums[i] <= 10⁹`

## Hints

### Hint 1

"No two members share a bit" can be restated as one fact about the block as a
whole, involving the OR of its members. What is that fact?

### Hint 2

A value below 10⁹ has at most 30 set bits, and each member of a qualifying
block needs a private bit — so the answer can never exceed 30.

### Hint 3

Grow a window rightward, keeping the members' OR in one word. When the next
value collides with that word, retire members from the left until the collision
clears.
