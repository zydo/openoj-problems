# Solutions — Distinct Prime Factors of Product of Array

## Per-element trial division into a prime set

The product itself is astronomically large (10⁴ elements of up to a
thousand each), but its prime support is not: a prime divides the
product exactly when it divides at least one individual element. So the
factorization can be done per element and shared through one set, with
the answer being the set's final size — never materializing the product
at all.

Each element is broken down by trial division: walking candidate
divisors upward, when `d` divides the remaining value it must be prime
(anything composite would have had its factors stripped earlier), so it
joins the set and every copy of it is divided out. After the loop,
anything above 1 left over is itself a prime factor larger than its own
square root bound and joins the set too. Values are capped at 1000, so
candidates never exceed 31 once squared, keeping the whole scan tiny.

Duplicates across elements collapse naturally through the set — an
array of powers of two reports exactly one distinct factor, matching
example 2.

**Complexity:** `O(n · √V)` time for `n` elements with value bound `V`
(≤ 1000 here), `O(π(V))` space for the distinct-prime set.
