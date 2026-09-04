# The Most Elements k Tweaks Can Unify

## Description

You are given an integer array `nums` and an integer `k`.

A tweak picks one element and moves it up or down by exactly 1, spending
one unit of budget. You may spend at most `k` units in total, in any mix
of raises and lowerings.

When you stop, look at whichever value has become the most common and
count its occurrences — that count is your score. Return the largest
score obtainable within the budget.

### Example 1

```text
Input: nums = [3,9,5], k = 2
Output: 2
Explanation: Spend both units raising 3 to 5, leaving [5,5,9] — the
value 5 now occurs twice. Gathering all three elements onto one value
would cost 6, well beyond k, so 2 is the best achievable.
```

### Example 2

```text
Input: nums = [8,8,3,10], k = 4
Output: 3
Explanation: Lower the 10 onto the pair of 8s for 2 units, leaving
[3,8,8,8]; the value 8 occurs three times and two budget units remain
unused. Pulling the 3 in as well would cost 5 more, more than the
budget allows, so 3 is optimal.
```

### Example 3

```text
Input: nums = [7,7,7,2,9], k = 0
Output: 3
Explanation: No tweaks are affordable, so the score is just the highest
frequency already present: 7 occurs three times.
```

### Constraints

- `1 <= nums.length <= 10⁵`
- `1 <= nums[i] <= 10⁹`
- `0 <= k <= 10¹⁴`

## Hints

### Hint 1

Sorting first makes the structure plain: the elements worth merging onto
a single value always form one contiguous stretch of the sorted array.

### Hint 2

For a fixed stretch, the cheapest shared destination is the stretch's
median, and prefix sums recover the total cost of flattening the stretch
in constant time.

### Hint 3

Sweep the right end across the sorted array, advancing the left end only
as far as the budget forces; the widest stretch seen along the way is
the answer. Bisecting the stretch length works too.
