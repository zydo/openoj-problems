# Even-Digit Tally

## Description

Given an array `nums` of positive integers, count how many of its
entries are written with an even number of digits. For instance, 405
spans three digits while 88 spans two — of that pair only the latter
would join the tally.

### Example 1

```text
Input: nums = [7,405,88,1234,9,30071]
Output: 2
Explanation: 88 (2 digits) and 1234 (4 digits) are the only entries
whose digit counts are even.
```

### Example 2

```text
Input: nums = [100,2000,55,6]
Output: 2
```

### Example 3

```text
Input: nums = [48]
Output: 1
```

### Constraints

- `1 <= nums.length <= 500`
- `1 <= nums[i] <= 10^5`

## Hints

### Hint 1

You need each value's digit count, never the digits themselves — what
single operation strips one digit off at a time?

### Hint 2

Integer-divide by 10 repeatedly and count the rounds; an entry joins
the tally exactly when that round count is even.
