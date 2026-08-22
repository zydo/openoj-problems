# Subarrays with Equal Maximal Ends

## Description

You are given an array of positive integers `nums`.

Count the subarrays for which both end elements equal the maximum found
anywhere inside the subarray. (A single element trivially qualifies: it
is its own maximum.)

Return that count.

### Example 1

```text
Input: nums = [6,2,2,6,3]
Output: 7
Explanation: All five single elements qualify. So does [2,2], bounded
by its two 2s, and [6,2,2,6], bounded by its two 6s with nothing larger
between — the interior 2s sit below the ends, which is allowed. Every
other span fails, its ends differing or an interior element outranking
one of them. Total 5 + 1 + 1 = 7.
```

### Example 2

```text
Input: nums = [7,7,7,7]
Output: 10
Explanation: With every element equal, all ten subarrays qualify: four
singles, three adjacent pairs, two length-3 spans, and the whole array.
```

### Example 3

```text
Input: nums = [3,1,3,9,3]
Output: 6
Explanation: Five singles qualify, plus [3,1,3]. The pair of 3s around
the 9 fails: the 9 sits between them and is strictly larger, so neither
3 is the maximum of that span.
```

### Constraints

- `1 <= nums.length <= 10⁵`
- `1 <= nums[i] <= 10⁹`

## Hints

### Hint 1

Tally by right endpoint: for each element, ask how many qualifying
subarrays terminate exactly there.

### Hint 2

A subarray ending at `nums[i]` qualifies when its start also holds the
value `nums[i]` and nothing strictly greater lies in between — so the
start must live after the nearest position to the left carrying a
strictly larger value. A monotonic stack finds that position for every
index in one sweep.

### Hint 3

Keep the earlier positions of each distinct value in a sorted list; the
number of them lying past the blocking position — plus one for the
singleton — is the tally for that right endpoint.

### Hint 4

The grand total is the sum of the per-endpoint tallies.
