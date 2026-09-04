# Quad-Divisor Totals

## Description

Go through `nums` and pick out the entries that have exactly four divisors.
Each qualifying entry contributes the sum of its four divisors; every other
entry contributes nothing. Return the grand total, or `0` if no entry
qualifies.

For instance, `21` divides by `1, 3, 7, 21` — exactly four of them — so it
would contribute `32`, while `7` divides only by `1` and itself and
contributes nothing.

### Example 1

```text
Input: nums = [14,12,18]
Output: 24
Explanation: 14 has exactly four divisors, 1, 2, 7, 14, while 12 and 18
each have six, so only 14's divisor sum of 24 counts.
```

### Example 2

```text
Input: nums = [21,10]
Output: 50
Explanation: Both entries qualify: 21 contributes 1 + 3 + 7 + 21 = 32 and
10 contributes 1 + 2 + 5 + 10 = 18.
```

### Example 3

```text
Input: nums = [9,25,49]
Output: 0
Explanation: The square of a prime has exactly three divisors — 1, the
prime, and the square — so none of these entries qualifies.
```

### Constraints

- `1 <= nums.length <= 10⁴`
- `1 <= nums[i] <= 10⁵`

## Hints

### Hint 1

Count each entry's divisors before deciding whether it contributes.

### Hint 2

Divisors pair up around the square root, so a scan up to √n is enough to
collect both members of every pair.
