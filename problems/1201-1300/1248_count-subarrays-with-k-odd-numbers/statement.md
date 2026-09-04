# Count Subarrays With K Odd Numbers

## Description

You are given an integer array `nums` and an integer `k`.

Count the contiguous subarrays of `nums` that contain exactly `k` odd
numbers.

### Example 1

```text
Input: nums = [3,8,3,3], k = 2
Output: 3
Explanation: The qualifying subarrays are [3,8,3], [8,3,3], and [3,3] —
each holds the two odds while the third odd stays outside.
```

### Example 2

```text
Input: nums = [10,3,10,10], k = 1
Output: 6
Explanation: Every window that includes the 3 works: it may open at either
of two places and close at any of three, and 2 * 3 = 6.
```

### Example 3

```text
Input: nums = [5,2,4,5,2,5], k = 2
Output: 5
Explanation: Pairing the first two odds gives two windows, and pairing the
last two gives three; windows holding all three odds are excluded.
```

### Constraints

- `1 <= nums.length <= 50000`
- `1 <= nums[i] <= 10^5`
- `1 <= k <= nums.length`

## Hints

### Hint 1

Only the parity of each element matters. Replace every odd number by 1 and
every even number by 0, and the task becomes counting subarrays whose sum
is exactly `k`.

### Hint 2

Track the running number of odds — the prefix value. A subarray closing at
the current element has exactly `k` odds precisely when some earlier prefix
carried `k` fewer.

### Hint 3

Keep a tally of how many prefixes reached each odd-count so far; at each
element, add the tally for (current count − `k`) to the answer, then record
the current count.

### Hint 4

Seed the tally with one empty prefix of count 0, or subarrays that begin at
the very first element will go uncounted.
