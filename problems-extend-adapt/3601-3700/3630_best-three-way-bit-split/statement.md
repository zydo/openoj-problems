# Best Three-Way Bit Split

## Description

You are given an integer array `nums`. Distribute its elements into
three groups `A`, `B`, and `C` — each group may end up empty — so that
every element lands in exactly one group.

Score the distribution as

    XOR(A) + AND(B) + XOR(C)

where the XOR of a group is the bitwise XOR of all its elements and the
AND of a group is the bitwise AND of all its elements. Either aggregate
over an empty group counts as 0.

Return the largest score any distribution can reach. When several
distributions tie for the best score, any of them is fine.

### Example 1

```text
Input: nums = [4,6]
Output: 10
Explanation: Put 4 in A, 6 in B, and leave C empty. The score is
XOR(A) + AND(B) + XOR(C) = 4 + 6 + 0 = 10.
```

### Example 2

```text
Input: nums = [5,2,9]
Output: 16
Explanation: Put 5 and 2 in A, 9 in B, and leave C empty. Then
XOR(A) = 5 ^ 2 = 7 and AND(B) = 9, so the score is 7 + 9 + 0 = 16.
```

### Example 3

```text
Input: nums = [8,12,7,3]
Output: 30
Explanation: Put 8 and 7 in A, 12 in B, and 3 in C. The score is
XOR(A) + AND(B) + XOR(C) = 15 + 12 + 3 = 30.
```

### Constraints

- `1 <= nums.length <= 19`
- `1 <= nums[i] <= 10⁹`

## Hints

### Hint 1

Try every possible choice for the AND group `B`.

### Hint 2

Once `B` is fixed, the XOR `s` of all remaining elements is also fixed.

### Hint 3

Handing the remaining elements to `A` and `C` only requires choosing a
subset-XOR `x` for `A`; then `C`'s XOR is `s ^ x`, and the pair
contributes `x + (s ^ x)`.

### Hint 4

That contribution simplifies to `s + 2 * (x & ~s)` — bits already set
in `s` cannot be doubled.

### Hint 5

Mask every remaining value with `~s` and reduce them into a linear XOR
basis.

### Hint 6

Sweep the basis from its highest bit downward, keeping each vector that
increases `x`, to extract the best possible `x`.
