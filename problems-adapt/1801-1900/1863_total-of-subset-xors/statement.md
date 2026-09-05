# Total of Subset XORs

## Description

Pick any subset of an array and XOR all of its elements together; call
the result that subset's XOR score. The empty subset scores 0.

Given an array `nums`, form the XOR score of every one of its subsets
and return the sum of all those scores. A subset is any selection of
positions from `nums` (order is fixed, repetition is not allowed), and
two selections that keep different positions are different subsets even
if the values they hold look the same.

### Example 1

```text
Input: nums = [9,14]
Output: 30
Explanation: The four subsets score:
- The empty selection scores 0.
- [9] scores 9.
- [14] scores 14.
- [9,14] scores 9 XOR 14 = 7.
0 + 9 + 14 + 7 = 30
```

### Example 2

```text
Input: nums = [2,4,7]
Output: 28
Explanation: The eight subsets score:
- The empty selection scores 0.
- [2] scores 2, [4] scores 4, [7] scores 7.
- [2,4] scores 6, [2,7] scores 5, [4,7] scores 3.
- [2,4,7] scores 2 XOR 4 XOR 7 = 1.
0 + 2 + 4 + 7 + 6 + 5 + 3 + 1 = 28
```

### Example 3

```text
Input: nums = [6,7,12,20]
Output: 248
Explanation: Across the 16 subsets of [6,7,12,20] the XOR scores add up
to 248.
```

### Constraints

- `1 <= nums.length <= 12`
- `1 <= nums[i] <= 20`

## Hints

### Hint 1

With at most 12 elements there are at most 2^12 subsets, so scoring
every subset by walking its members one by one is already fast enough.

### Hint 2

A cheaper view: work bit by bit. A bit survives a subset's XOR exactly
when an odd number of chosen elements carry it, and among the subsets
that include at least one such element, half end up with odd parity —
so the answer is the OR of all elements times `2^(n-1)`.
