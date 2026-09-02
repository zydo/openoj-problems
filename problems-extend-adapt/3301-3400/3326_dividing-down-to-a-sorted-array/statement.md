# Dividing Down To A Sorted Array

## Description

You are given an integer array `nums`.

For a natural number `x`, any positive divisor of `x` other than `x`
itself is a **proper divisor** of `x` — `2` is a proper divisor of `4`,
while `6` is not a proper divisor of `6`. One operation picks a single
element of `nums` and divides it by its greatest proper divisor.

Run operations as many times as you like, aiming to leave the array
non-decreasing. Return the fewest operations that get there, or `-1` if
no amount of operating can.

### Example 1

```text
Input: nums = [49,15]
Output: 1
Explanation: The greatest proper divisor of 49 = 7·7 is 7, so one
operation leaves [7,15] — non-decreasing. One operation is also
unavoidable, since the array decreases as given.
```

### Example 2

```text
Input: nums = [16,9,5]
Output: 2
Explanation: Dividing 16 by 8 yields 2, and dividing 9 by 3 yields 3,
so two operations leave [2,3,5]. Leaving either 16 or 9 unbroken keeps
a value above its right neighbor, so two is minimal.
```

### Example 3

```text
Input: nums = [11,8]
Output: -1
Explanation: 11 is prime, and dividing a prime by its greatest proper
divisor 1 changes nothing, so 11 can never come down to meet 8.
```

### Constraints

- `1 <= nums.length <= 10⁵`
- `1 <= nums[i] <= 10⁶`

## Hints

### Hint 1

Measure what one operation can ever accomplish: dividing a composite
`x` by its greatest proper divisor lands exactly on `x`'s smallest
prime factor, and a further operation never moves that landing spot.

### Hint 2

Scan from the right, carrying the value the element to the right
settled on — that value is the cap the current element must come under.

### Hint 3

Keep the current value whenever it already fits under the cap; spend
one operation when its smallest prime factor fits; if neither fits the
task is impossible. A sieve up to the maximum value makes every lookup
constant time.
