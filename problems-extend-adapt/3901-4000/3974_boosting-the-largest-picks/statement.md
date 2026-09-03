# Boosting The Largest Picks

## Description

You are given an integer array `nums` and two integers `k` and `mul`.

Choose exactly `k` elements of the array — which ones is up to you. You then
walk through your picks one at a time, in any order you like, and every pick
grows a running total in one of two ways:

- add the element's own value, or
- add the element's value times whatever `mul` holds right now.

Either way, as soon as an element has been processed the multiplier `mul`
drops by 1 before the next pick is handled, so it may well reach 0 or fall
below it by the end.

Return the largest total that can be built this way.

### Example 1

```text
Input: nums = [8,3,10,5], k = 2, mul = 2
Output: 28
Explanation:
    Take the values 10 and 8, and process 10 first.

        10 uses the multiplier and contributes 10 * 2 = 20; mul drops to 1.
        8 is then added plainly and contributes 8.

    The total is 20 + 8 = 28.
```

### Example 2

```text
Input: nums = [7,2,9,4,6], k = 3, mul = 5
Output: 91
Explanation:
    Take the values 9, 7 and 6, processed in that order.

        9 * 5 = 45, and mul falls to 4.
        7 * 4 = 28, and mul falls to 3.
        6 * 3 = 18.

    The total is 45 + 28 + 18 = 91.
```

### Example 3

```text
Input: nums = [5,12], k = 1, mul = 3
Output: 36
Explanation: The single pick is the value 12, and using the multiplier
while it is still fresh gives 12 * 3 = 36.
```

### Constraints

- `1 <= nums.length <= 10⁵`
- `1 <= nums[i] <= 10⁵`
- `1 <= k <= nums.length`
- `1 <= mul <= 10⁵`

## Hints

### Hint 1

Once the set of picks is fixed, the two remaining questions are which of
them deserve the multiplier and in what order they should be handled.

### Hint 2

Every value is positive, so whenever the current multiplier is above 1,
multiplying is never worse than a plain addition.

### Hint 3

Only the first `min(k, mul - 1)` processed picks can beat plain addition;
everything after that should simply be added as-is.

### Hint 4

Pick the `k` biggest values, then hand out the multipliers from largest to
smallest against those same values.
