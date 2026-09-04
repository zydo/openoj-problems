# The Rising Price Of Refills

## Description

A machine works through an array `nums` from left to right, and it runs on a
stock of units. It starts out holding `k` units.

Consuming element `nums[i]` removes `nums[i]` units from the stock, and the
machine must be holding at least that many before it may consume the element.

Whenever the stock would fall short, you can trigger a refill that instantly
adds `k` more units — `k` itself never changes. Refills get pricier the more
of them you use: the first costs `1`, the second `2`, the third `3`, and so
on.

Return the smallest possible total price of all refills used to finish the
whole array, modulo `10^9 + 7`.

### Example 1

```text
Input: nums = [2,5,1,9], k = 6

Output: 3

Explanation:

Starting from 6 units: consume 2 (4 left), then refill for price 1 before
consuming 5 (10 - 5 = 5 left), consume 1 (4 left), then refill for price 2
before consuming 9 (10 - 9 = 1 left). The total price is 1 + 2 = 3.
```

### Example 2

```text
Input: nums = [3], k = 5

Output: 0

Explanation:

The starting 5 units already cover the only element, so no refill is ever
triggered and the total price is 0.
```

### Example 3

```text
Input: nums = [7,8,9,10,11], k = 12

Output: 6

Explanation:

From 12 units: consume 7 (5 left); refill for price 1 up to 17, consume 8
(9 left), consume 9 (0 left); refill for price 2 up to 12, consume 10
(2 left); refill for price 3 up to 14, consume 11 (3 left). The prices
1 + 2 + 3 sum to 6.
```

### Constraints

- `1 <= nums.length <= 10^5`
- `1 <= nums[i] <= 10^9`
- `1 <= k <= 10^9`

## Hints

### Hint 1

Think in totals rather than moment to moment: every consumed unit has to come
from somewhere, and the only source beyond the starting stock is refills of
`k` units each.

### Hint 2

Because each refill costs exactly one more than the previous one, finishing
with `m` refills costs `1 + 2 + ... + m = m(m + 1) / 2`, no matter where
along the scan they were triggered.

### Hint 3

The cheapest plan never refills early. The needed count is the smallest `m`
with `k + m * k` covering `sum(nums)` — return that count's triangular price
modulo `10^9 + 7`.
