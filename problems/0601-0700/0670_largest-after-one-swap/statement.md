# Largest Value After One Swap

## Description

You are given a non-negative integer `num`. You may swap the positions of
two of its decimal digits — **at most one swap total, and it is optional**.

Return the largest value `num` can become after performing at most one such
swap.

### Example 1

```text
Input: num = 4832
Output: 8432
Explanation: Swapping the leading 4 and the 8 gives 8432, which beats every
other single swap of this number's digits.
```

### Example 2

```text
Input: num = 98531
Output: 98531
Explanation: The digits already run from largest to smallest, so no swap can
raise the value — the answer is num unchanged.
```

### Constraints

- `0 <= num <= 10⁸`
