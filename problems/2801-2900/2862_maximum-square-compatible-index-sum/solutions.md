# Solutions — Maximum Square-Compatible Index Sum

## Grouping indices by squarefree part

The pairwise-product rule looks like a constraint over pairs, but it is
really an equivalence relation. Factor every index as
`(squarefree part) x (perfect square)`, where the squarefree part is the
product of the primes appearing to an odd power — `12 = 3 x 2²` has
squarefree part `3`. When two indices are multiplied, a prime contributes an
odd exponent to the product exactly when it contributes an odd exponent to
exactly one of the factors. The product is a perfect square, all exponents
even, precisely when the two indices have identical odd-exponent prime sets,
i.e. the same squarefree part.

So the legal choices are exactly the classes of that partition: pick one
squarefree part and take every (or, for a maximum, necessarily every)
index carrying it. In Example 2 the indices `1, 4, 9` all carry squarefree
part `1`, while `2` and `8 = 2 x 2²` carry part `2`, and the `2/8` bucket
collects `18`, beating the squares' `13`.

The parts themselves come from trial division up to `sqrt(x)`: count each
prime's exponent while dividing it out, multiply the prime into the result
when the count is odd, and fold in anything that survives the loop as a
single leftover prime of exponent one. Only indices are factored — never the
element values — so `sqrt(10^4) = 100` bounds the trial divisors and no
sieve is required.

One pass accumulates `nums[i - 1]` into a bucket keyed by the squarefree
part of `i`, and the answer is the heaviest bucket. Every index lands in
exactly one bucket, so the bucket count cannot exceed `n`, and a one-element
array simply returns its element.

**Complexity:** `O(n sqrt(n))` time, `O(n)` space.
