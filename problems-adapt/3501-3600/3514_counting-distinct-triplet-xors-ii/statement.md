# Counting Distinct Triplet XORs II

## Description

An array `nums` of positive integers is given.

Combine any three of its entries with XOR — call the result a triplet XOR.
The three positions `i`, `j`, `k` must satisfy `i <= j <= k`, but they may
coincide, so one entry can be used twice or even three times within a single
combination.

How many different numbers can appear as a triplet XOR? Return that count.

### Example 1

```text
Input: nums = [4,11,4]
Output: 2
Explanation: The XORs of pairs drawn from the array are 4^4 = 0 and
4^11 = 15. Spreading those by one more entry yields only 0^4 = 4 and
0^11 = 11 (the pair 15 contributes 15^4 = 11 and 15^11 = 4, which repeat
them), so the distinct triplet XORs are {4, 11} and the answer is 2.
```

### Example 2

```text
Input: nums = [7,1,14,9]
Output: 8
Explanation: Eight distinct values occur as triplet XORs:
{0, 1, 6, 7, 8, 9, 14, 15}.
```

### Example 3

```text
Input: nums = [10]
Output: 1
Explanation: The only combination repeats position 0 three times:
10 ^ 10 ^ 10 = 10.
```

### Constraints

- `1 <= nums.length <= 1500`
- `1 <= nums[i] <= 1500`

## Hints

### Hint 1

XOR does not care about the order of its operands, so `i <= j <= k` only
limits which positions may be picked, never the value produced. The answer
is the size of the set `{ a ^ b ^ c : a, b, c all drawn from nums }`.

### Hint 2

Split the three operands as one pair plus one leftover: `a ^ b ^ c =
(a ^ b) ^ c`. Collect every value `a ^ b` into a set first — how large can
that set become when every entry is bounded?

### Hint 3

Each entry fits in 11 bits, so the pair set holds at most `2^11 = 2048`
values no matter how long the array is. Enumerate the pair set once, XOR
each pair with each entry, and count the distinct results.
