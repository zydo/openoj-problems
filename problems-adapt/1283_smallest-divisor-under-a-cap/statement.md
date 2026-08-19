# Smallest Divisor Under a Cap

## Description

You are given an array of positive integers `nums` and an integer `cap`.

Choose a positive integer `d`, divide every element by it, and round each
quotient up to the next integer. For instance, with `d = 3` the element `7`
contributes `3`, and with `d = 2` the element `10` contributes `5`.

Add up the rounded quotients. Return the smallest divisor `d` for which that
sum does not exceed `cap`. The inputs are built so that such a divisor
exists.

### Example 1

```text
Input: nums = [3,7,11,15], cap = 8
Output: 6
Explanation: With d = 6 the quotients round up to 1 + 2 + 2 + 3 = 8, exactly
the cap. One smaller, d = 5, gives 1 + 2 + 3 + 3 = 9, which overshoots.
```

### Example 2

```text
Input: nums = [1,100], cap = 3
Output: 50
Explanation: d = 50 gives 1 + 2 = 3. Anything smaller lifts ceil(100/d) to 3
or more, since ceil(100/49) is already 3.
```

### Example 3

```text
Input: nums = [4,9,25], cap = 3
Output: 25
Explanation: Three elements under a cap of 3 leave no slack: every quotient
must round to exactly 1, which forces d up to the largest element.
```

### Constraints

- `1 <= nums.length <= 5 * 10⁴`
- `1 <= nums[i] <= 10⁶`
- `nums.length <= cap <= 10⁶`

## Hints

### Hint 1

Grow the divisor and watch the sum: no rounded quotient ever gets larger, so
the sum never increases as `d` grows. Which divisors, then, are the ones that
fit under the cap — the small ones or the large ones?

### Hint 2

That one-directional behavior means the fitting divisors form a suffix of
`1, 2, 3, …`, so a lower-bound search over the candidates lands on the
smallest of them.

### Hint 3

No divisor above `max(nums)` is worth testing: every quotient is already 1
there, and the guarantee says that sum fits.
