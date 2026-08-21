# K Most Frequent Values

## Description

You are given an integer array `nums` and an integer `k`. Return the `k`
values that occur most often in `nums`.

The `k` values may come back in any order.

### Example 1

```text
Input: nums = [3,3,3,8,8,9], k = 2
Output: [3,8]
Explanation: 3 occurs three times and 8 twice; 9 occurs only once and
misses the cut.
```

### Example 2

```text
Input: nums = [2,2,7,7,4,4,4,9], k = 3
Output: [4,2,7]
Explanation: 4 leads with three occurrences. 2 and 7 tie at two
occurrences each, and both fit inside a three-value answer.
```

### Example 3

```text
Input: nums = [6], k = 1
Output: [6]
Explanation: A single value, occurring once, is trivially the most
frequent.
```

### Constraints

- `1 <= nums.length <= 10^5`
- `-10^4 <= nums[i] <= 10^4`
- `k` lies between `1` and the number of distinct values in `nums`.
- For the given data, the set of `k` most frequent values is unambiguous.

### Follow-up

Counting the values is linear. Must selecting from the counts cost a full
sort — `O(n log n)` — or can the selection be done faster?

## Hints

### Hint 1

Open with one sweep over the array that records how many times each value
occurs.

### Hint 2

A count can only sit between `1` and `n`, so the distinct values can be
grouped by their count, with the group index itself playing the role of
the frequency.

### Hint 3

Reading the groups from the largest index downward collects the winners in
frequency order without ever sorting by frequency; stop as soon as `k`
values are gathered.
