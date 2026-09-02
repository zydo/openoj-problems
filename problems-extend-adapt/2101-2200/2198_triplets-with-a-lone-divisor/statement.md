# Triplets With A Lone Divisor

## Description

You are given a 0-indexed array of positive integers `nums`. Consider its
triplets of three distinct indices `(i, j, k)`. A triplet is a lone-
divisor triplet when the sum `nums[i] + nums[j] + nums[k]` is divisible by
exactly one member of the triplet — exactly one of `nums[i]`, `nums[j]`,
`nums[k]`.

Return how many lone-divisor triplets `nums` contains.

### Example 1

```text
Input: nums = [9,5,2,7]
Output: 12
Explanation:
The picks 9, 5 and 2 sum to 16, which only 2 divides; the picks 9, 5 and
7 sum to 21, which only 7 divides. Each pick can be laid over its three
indices in 6 ways, giving 6 + 6 = 12 lone-divisor triplets.
```

### Example 2

```text
Input: nums = [1,3,3,6]
Output: 18
Explanation:
The indices holding 1 and both 3s sum to 7, which only 1 divides. Two
different index triplets hold the values 1, 3 and 6 (one per copy of 3),
each summing to 10, which only 1 divides. That is 6 + 6 + 6 = 18 triplets
in all.
```

### Example 3

```text
Input: nums = [4,4,4,10]
Output: 0
Explanation:
The indices holding three 4s sum to 12, which all three members divide,
while 4, 4 and 10 sum to 18, which none of them divide. So no triplet
qualifies.
```

### Constraints

- `3 <= nums.length <= 10⁵`
- `1 <= nums[i] <= 100`

## Hints

### Hint 1

The array can be very long, but no value in it ever exceeds 100 — that
mismatch is the whole problem.

### Hint 2

Tally how often each value occurs. Then walk over value combinations —
repeats included — and decide for each whether its sum is divisible by
exactly one of its members, remembering that a value dividing the sum
counts once per copy sitting in the triplet.

### Hint 3

Turn each qualifying value multiset into an ordered-triplet count using
the tallies: three different values contribute `fa·fb·fc·6`, a doubled
value contributes pairs times the singleton times 6, and a triple
contributes the falling factorial `f(f-1)(f-2)`.
