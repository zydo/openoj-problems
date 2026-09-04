# Counting Ways To Land On K

## Description

You receive an integer array `nums` and an integer `k`.

A runner value starts at `val = 1` and sweeps through `nums` from left to
right. At every index you must pick exactly one action:

- Multiply `val` by `nums[i]`.
- Divide `val` by `nums[i]`.
- Leave `val` as it is.

Division is exact rational division, not integer division — `2 / 4` leaves
`1 / 2`, for instance. Once the sweep ends, `val` counts as equal to `k`
only when that final rational value is exactly `k`.

Return how many distinct action sequences finish with `val == k`.

### Example 1

```text
Input: nums = [2,2,2,3], k = 4
Output: 3
Explanation: Exactly two of the three 2s must be multiplied (the third
left alone), which can be picked in 3 ways, and the 3 must be skipped —
e.g. multiply, multiply, leave, leave gives val = 1 · 2 · 2 = 4.
```

### Example 2

```text
Input: nums = [6,1,2], k = 3
Output: 3
Explanation: The only productive spine is multiply 6 (val = 6), then
divide by 2 (val = 3). The 1 in the middle offers three distinct actions —
multiply, divide, and leave all hold val at 6 — so 3 sequences land on k.
```

### Example 3

```text
Input: nums = [4,9], k = 8
Output: 0
Explanation: The 9 can never be neutralized without touching the 4's
contribution, and even multiplying every 4 reaches only 4, so 8 is out of
reach and the count is 0.
```

### Constraints

- `1 <= nums.length <= 19`
- `1 <= nums[i] <= 6`
- `1 <= k <= 10¹⁵`

## Hints

### Hint 1

Values between 1 and 6 factor over the primes 2, 3, and 5 only, so `val`
is always the rational 2^a · 3^b · 5^c — track the exponent triple, not
the value itself.

### Hint 2

Each action moves the triple by a fixed step: multiply adds the element's
own (2, 3, 5) split, divide subtracts it, leave adds nothing. Run a
forward dynamic program over the triples reached so far, carrying counts.

### Hint 3

Break k down into the same (2, 3, 5) exponents; if anything other than 1
survives that factorization, answer 0, otherwise read the count stored at
k's triple after the last element.
