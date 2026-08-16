# Solutions — Count Primes

## Sieve of Eratosthenes

Testing each number below `n` for primality wastes work re-discovering the same divisors; the sieve inverts the task. It assumes every number from 2 upward is prime, then for each prime `i` marks all of its multiples as composite in one stroke. Whatever remains unmarked was never a multiple of anything smaller and is therefore prime.

The implementation uses a `bytearray` of flags indexed by the number itself, which is both compact and fast to update. The outer loop runs only while `i * i < n` — any composite below `n` has a factor no larger than its square root, so beyond that point every composite has already been marked. When `is_prime[i]` is still set, the slice assignment `is_prime[i*i :: i] = bytearray(len(range(i*i, n, i)))` zeros out the multiples of `i` in a single C-level operation, starting at `i*i` because smaller multiples were crossed off earlier by their smaller factors.

The answer is simply the sum of the surviving flags. Inputs below 3 (n = 0, 1, 2) return 0 up front since there are no primes strictly less than 2.

**Complexity:** `O(n log log n)` time, `O(n)` space.
