# Stepping Up To Alternating Primes

## Description

An integer array `nums` is in front of you. Call the array
prime-alternating when its positions take turns:

- every even index (0-based) holds a prime number;
- every odd index holds a non-prime number.

The only move available is choosing one element and raising it by exactly 1;
each raise counts as one step. Positions never influence one another, and
values can never be lowered or otherwise edited.

Return the fewest steps that turn `nums` into a prime-alternating array. As
usual, a prime is a whole number above 1 whose only divisors are 1 and
itself; 1 is not prime.

### Example 1

```text
Input: nums = [10, 2, 9]
Output: 5
Explanation: Index 0 needs a prime, so 10 climbs to 11 (1 step). Index 1
needs a non-prime, so 2 climbs to 4 (2 steps). Index 2 climbs from 9 to the
prime 11 (2 steps). The total is 1 + 2 + 2 = 5.
```

### Example 2

```text
Input: nums = [3, 4]
Output: 0
Explanation: 3 is prime at the even index and 4 is non-prime at the odd
index, so the array already qualifies and no steps are spent.
```

### Example 3

```text
Input: nums = [1]
Output: 1
Explanation: The single even-indexed element must become prime; 1 steps up
to 2.
```

### Constraints

- `1 <= nums.length <= 10⁵`
- `1 <= nums[i] <= 10⁵`

## Hints

### Hint 1

Positions are independent — the cost of fixing one element never changes
what another needs, so settle each index separately and add the costs.

### Hint 2

For an even index the target is the smallest prime at or above the current
value; for an odd index it is the smallest non-prime at or above it.

### Hint 3

A primality sieve over a generous fixed bound answers "next valid value"
with a short upward walk: an odd index needs at most a step or two (2 is
the only awkward case), and an even index never walks further than the
local prime gap.
