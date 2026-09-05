# Featured Sums Of Every K-Window

## Description

An array `nums` of n integers arrives together with two integers k and x.

Define the **featured sum** of an array as follows:

- Count how often every distinct value occurs.
- Keep just the occurrences of the x most frequent values; when values are
  tied on frequency, the larger value outranks the smaller.
- Add up everything kept.

An array carrying fewer than x distinct values has all of them featured,
so its featured sum is simply its total.

For every window of k consecutive elements, `nums[i .. i + k - 1]`, report
that window's featured sum, and return the n - k + 1 results in order.

### Example 1

```text
Input: nums = [4,4,4,1,2,2], k = 4, x = 1
Output: [12,8,4]
Explanation:
- In [4,4,4,1] the value 4 occurs most often, so only its occurrences
  count: 4 + 4 + 4 = 12.
- In [4,4,1,2] the value 4 again leads: 4 + 4 = 8.
- In [4,1,2,2] the value 2 leads: 2 + 2 = 4.
```

### Example 2

```text
Input: nums = [5,5,3,3,7], k = 4, x = 2
Output: [16,13]
Explanation:
- [5,5,3,3] has exactly two distinct values, both featured: 16.
- In [5,3,3,7] the value 3 leads with two occurrences; 5 and 7 tie at one,
  and the larger 7 wins the second slot: 3 + 3 + 7 = 13.
```

### Constraints

- `1 <= n == nums.length <= 50`
- `1 <= nums[i] <= 50`
- `1 <= x <= k <= nums.length`

## Hints

### Hint 1

Write the featured-sum routine as its own step — recount, rank with the
larger-value tie-break, keep the front x — and then just apply it to every
k-long window in turn.
