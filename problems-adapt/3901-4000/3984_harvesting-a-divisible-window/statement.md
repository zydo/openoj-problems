# Harvesting A Divisible Window

## Description

Two players are watching an integer array `nums` of length `n`. Alice gets to
set up the round by choosing:

- a modulus `k` with `k > 1`, and
- a window of indices `l` and `r` with `0 <= l <= r < n`.

Both scores start at zero. Scanning the window left to right, every element
divisible by `k` is credited to Alice's score, and every element that is not
is credited to Bob's score.

The **score difference** is Alice's score minus Bob's score. Alice picks `k`
and the window to make this difference as large as possible; when several
values of `k` tie for the best difference, she keeps the smallest such `k`.

Return the product of the best score difference and the `k` Alice chose,
modulo `10^9 + 7` (a negative difference wraps into that range too).

### Example 1

```text
Input: nums = [3,9,5,27]

Output: 102

Explanation:

Take k = 3 and the whole array. Alice collects 3 + 9 + 27 = 39 while Bob
collects 5, so the difference is 34 — the largest achievable. No smaller
k > 1 reaches it, and the product is 34 × 3 = 102.
```

### Example 2

```text
Input: nums = [7,7,7]

Output: 147

Explanation:

With k = 7 every element is Alice's: the difference is 21, and 21 × 7 = 147.
No other k beats 21.
```

### Example 3

```text
Input: nums = [4,10,6]

Output: 40

Explanation:

With k = 2 the whole array is divisible by k, giving a difference of 20 — the
maximum. The smallest k achieving it is 2, and 20 × 2 = 40.
```

### Example 4

```text
Input: nums = [5,2]

Output: 25

Explanation:

Choosing k = 5 and the single-element window [5] credits Alice 5 and Bob
nothing, a difference of 5. With k = 2 the best Alice can do is claim the
lone 2 for a difference of 2, so k = 5 wins and the answer is 5 × 5 = 25.
```

### Constraints

- `1 <= nums.length <= 1000`
- `1 <= nums[i] <= 10^6`

## Hints

### Hint 1

Fix `k` first and rewrite the array: keep `nums[i]` where `k` divides it and
negate it everywhere else.

### Hint 2

After that rewrite, the best window is exactly the maximum non-empty subarray
sum — Kadane's algorithm territory.

### Hint 3

Only divisors of the array's own values are worth trying as `k` (plus the
fallback `k = 2`, which matters when nothing shares a factor, e.g. an array
of ones).

### Hint 4

Enumerate those divisor candidates, run Kadane once per candidate, and on
equal scores prefer the smaller `k` before multiplying and reducing modulo
`10^9 + 7`.
