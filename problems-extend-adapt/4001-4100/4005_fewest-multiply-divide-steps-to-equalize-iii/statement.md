# Fewest Multiply-Divide Steps to Equalize III

## Description

You are given an integer array `nums`.

One operation lets you pick any single element and either multiply it by
some integer `k >= 2`, or divide it by some integer `k` with
`2 <= k < nums[i]` that evenly divides it.

Return the fewest operations needed to make every element of `nums` equal.

### Example 1

```text
Input: nums = [8,16,10]
Output: 3
Explanation: Aiming for a target of 8: it already equals 8, and 16 divides
by 2 into 8 in one step. The remaining value 10 shares no direct
divide-or-multiply relationship with 8, so it costs two steps — for
instance divide by 5 to reach 2, then multiply by 4 to reach 8. Three
steps in total, and no cheaper target exists.
```

### Example 2

```text
Input: nums = [6,18,24]
Output: 2
Explanation: Aiming for a target of 6: it already equals 6, 18 divides by
3 into 6 in one step, and 24 divides by 4 into 6 in one step. Two steps
in total.
```

### Example 3

```text
Input: nums = [9,9,9]
Output: 0
Explanation: The array is already uniform, so no operation is needed.
```

### Constraints

- `1 <= nums.length <= 10⁵`
- `1 <= nums[i] <= 10⁹`

## Hints

### Hint 1

Fix a candidate target `x > 1`. An element equal to `x` costs nothing, one
that divides `x` or is divisible by `x` costs one operation, and any other
element costs two.

### Hint 2

Reaching the least common multiple of every element never costs more than
one operation per element, so it is always a safe fallback. Any target
absent from `nums` costs at least one operation per element too, so only
targets already present in `nums` (or the lcm itself) can ever beat it.
Handle an all-ones array as its own base case.

### Hint 3

Sieve primes up to `sqrt(10⁹)`, then factor each distinct value in `nums`
and expand its divisors from that factorization.

### Hint 4

For a candidate `x`, add each distinct value's frequency to a running
`multipleCount[d]` at every divisor `d` it has; `multipleCount[x]` then
counts elements divisible by `x`, while summing frequencies over `x`'s own
divisors counts elements dividing `x`.

### Hint 5

Writing `equal` for the elements equal to `x`, `multiples` for the OTHER
elements divisible by `x`, and `divisors` for the OTHER elements `x` is
divisible by, the cost for target `x` is
`2 * nums.length - 2 * equal - multiples - divisors`. Minimize this over
every candidate `x`.
