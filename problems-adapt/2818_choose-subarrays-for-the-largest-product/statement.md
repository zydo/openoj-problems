# Choose Subarrays for the Largest Product

## Description

You are given an array `nums` of `n` positive integers and an integer `k`.

The **prime count** of a number is how many distinct primes divide it — for
instance `60 = 2 · 2 · 3 · 5` has prime count `3`.

Starting from a score of `1`, you may repeat this move at most `k` times:

- Choose a contiguous subarray `nums[l..r]` that no earlier move chose.
- Inside it, find the element with the largest prime count; if several tie,
  take the leftmost of them.
- Multiply your score by that element's value.

Return the largest score you can reach. It may be enormous, so report it
modulo `10⁹ + 7`.

### Example 1

```text
Input: nums = [4,9,6], k = 2
Output: 54
Explanation: The values 4 and 9 have prime count 1, while 6 = 2 · 3 has
prime count 2 and therefore wins every subarray containing it. So 9 wins
exactly one subarray, [9] by itself, and 6 wins three. Spending the two moves
on 9 and on 6 gives 1 · 9 · 6 = 54, which beats any other pair of picks.
```

### Example 2

```text
Input: nums = [10,15,21], k = 4
Output: 47250
Explanation: All three values are products of two distinct primes, so every
prime count is 2 and ties go to the leftmost element: 10 wins three subarrays,
15 wins two, 21 wins one. The four best picks are 21 once, 15 twice, and 10
once: 21 · 15 · 15 · 10 = 47250.
```

### Example 3

```text
Input: nums = [9,9,9,9], k = 10
Output: 486784380
Explanation: Every element has prime count 1, so the leftmost 9 wins 4
subarrays, the next wins 3, then 2, then 1 — exactly the ten subarrays in
total. Every move therefore multiplies by 9, and 9¹⁰ = 3486784401, which is
reported modulo 10⁹ + 7.
```

### Constraints

- `1 <= nums.length <= 10⁵`
- `1 <= nums[i] <= 10⁵`
- `1 <= k <= min(n·(n + 1) / 2, 10⁹)`

## Hints

### Hint 1

A sieve of smallest prime factors gives every element's prime count quickly —
no per-element trial division.

### Hint 2

For each element, count the subarrays in which it would be the chosen one.
That count is decided by the nearest element to its left with an equal or
larger prime count, and the nearest to its right with a strictly larger one.

### Hint 3

Two monotonic-stack passes produce those boundaries in linear time; the
leftmost-on-ties rule is exactly what makes one side strict and the other not.

### Hint 4

With `c_i` subarrays won by value `v_i`, spend the budget greedily on the
largest values — each usable up to `c_i` times — and assemble the product
with fast modular exponentiation.
