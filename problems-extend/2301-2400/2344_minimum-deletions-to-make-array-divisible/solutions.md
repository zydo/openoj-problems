# Solutions — Minimum Deletions to Make Array Divisible

## Reduce numsDivide to its gcd, then scan nums for the smallest divisor

Deleting elements only ever moves the minimum of nums upward, and the final
minimum must divide every element of numsDivide. An integer divides all the
elements of numsDivide exactly when it divides their greatest common divisor
`g`, since every element is a multiple of `g` and `g` itself divides any
common divisor of the whole array. So compute `g` with one Euclidean pass
over numsDivide; the question becomes: which distinct values in nums are
divisors of `g`, and what does promoting the smallest of them cost?

Because deletions are free-form, the cheapest surviving arrangement keeps
every element greater than or equal to the chosen value, so the deletions
needed for a candidate `v` are simply the count of elements smaller than `v`
— duplicates at or above `v` are harmless and never deleted. Scanning nums
in sorted order therefore visits candidates in increasing cost order, and
the first value satisfying `g % v == 0` is the answer; if no value in nums
divides `g`, return -1. (Equivalently, one unsorted pass tracking the best
`(value, count)` pair works: keep the smallest qualifying value seen so far,
resetting the count whenever a strictly smaller qualifier appears.)

**Complexity:** `O(n log n + m log M)` time, `O(1)` extra space. Here `M`
is the largest value in numsDivide.
