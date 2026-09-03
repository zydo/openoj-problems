# Windows Of Close Primes

## Description

You are given an integer array `nums` and an integer `k`.

A contiguous window of `nums` is called close-prime when:

- it holds at least two prime numbers, and
- the largest and smallest primes inside it differ by no more than `k`.

Count the close-prime windows of `nums`.

Recall that a window is any non-empty run of consecutive elements, and a
prime is a whole number greater than 1 whose only divisors are 1 and
itself.

### Example 1

```text
Input: nums = [6,7,10,11,12], k = 4
Output: 4
Explanation: The qualifying windows are [7,10,11], [6,7,10,11],
    [7,10,11,12], and [6,7,10,11,12]. Each contains exactly the primes
    7 and 11, whose difference 4 does not exceed k.
```

### Example 2

```text
Input: nums = [2,40,3,50,5], k = 3
Output: 5
Explanation: The windows [2,40,3], [2,40,3,50], and [2,40,3,50,5] all
    contain the primes 2 and 3 (difference 1; the last also adds 5,
    keeping the spread 2..5 within 3). The windows [3,50,5] and
    [40,3,50,5] contain the primes 3 and 5 (difference 2). That makes
    five windows in total.
```

### Example 3

```text
Input: nums = [4,6,8], k = 100
Output: 0
Explanation: Every element is composite, so no window can hold even
    two primes.
```

### Constraints

- `1 <= nums.length <= 5 * 10⁴`
- `1 <= nums[i] <= 5 * 10⁴`
- `0 <= k <= 5 * 10⁴`

## Hints

### Hint 1

A sieve settles primality once; after that, composite entries are just
spacing — only the positions of primes shape the answer.

### Hint 2

Slide the right end of the window left to right, keeping the min and
max prime inside it handy with two monotonic queues of prime positions.

### Hint 3

For a fixed right end, valid starts form two nested ranges: starts far
enough left to hold the last two primes, and starts late enough that
the prime spread stays within `k` — that left boundary only creeps
forward.

### Hint 4

Every start in the overlap of the two ranges contributes one window
ending at the current right end, so add the overlap's length per step.
