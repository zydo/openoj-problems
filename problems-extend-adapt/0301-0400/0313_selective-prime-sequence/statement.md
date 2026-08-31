# Selective Prime Sequence

## Description

Call a positive integer "admissible" (with respect to a list `primes`) if
every one of its prime factors appears in `primes`. By convention, `1` is
admissible for any list, since it has no prime factors at all.

Given an integer `n` and a sorted array of distinct primes `primes`, return
the `n`-th smallest admissible number, counting from `1`.

The answer is guaranteed to fit in a 32-bit signed integer.

### Example 1

```text
Input: n = 10, primes = [2,3,5]
Output: 12
Explanation: The admissible numbers in order are [1,2,3,4,5,6,8,9,10,12],
so the 10th one is 12.
```

### Example 2

```text
Input: n = 1, primes = [3,5]
Output: 1
Explanation: 1 has no prime factors, so it is admissible for any list and
is always the first term.
```

### Constraints

- `1 <= n <= 10⁵`
- `1 <= primes.length <= 100`
- `2 <= primes[i] <= 1000`
- `primes[i]` is guaranteed to be a prime number.
- All the values of `primes` are unique and sorted in ascending order.
