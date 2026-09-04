# Drop Extra Copies

## Description

An integer array `nums` arrives already sorted in non-decreasing
order. Rewrite it in place so each distinct value is left with exactly
one copy — the one that opens its run — and return the trimmed array.

Nothing needs reordering: because equal values already sit side by
side, the first appearance of every value keeps its place in the
sequence and only the surplus copies behind it disappear. The array
you return contains the surviving values in order, and its length is
the count of distinct values the input held.

### Example 1

```text
Input: nums = [3,3,6,6,6,9]
Output: [3,6,9]
Explanation: The 3 had two copies and the 6 had three; one copy of
each survives, in the order they first appeared.
```

### Example 2

```text
Input: nums = [-4,-4,-2,0,0,0,7]
Output: [-4,-2,0,7]
Explanation: Runs of different lengths all collapse to their leading
value.
```

### Example 3

```text
Input: nums = [5]
Output: [5]
Explanation: A single element has no duplicates to drop.
```

### Constraints

- `1 <= nums.length <= 3 * 10⁴`
- `-100 <= nums[i] <= 100`
- `nums` is sorted in non-decreasing order.

## Hints

### Hint 1

The sort has already done the hard part: every duplicate of a value is
stacked immediately after it, so one left-to-right pass meets each
distinct value exactly once, at the start of its run.

### Hint 2

Keep a write position marking the end of the deduplicated prefix built
so far. Whenever the scanning position lands on a value different from
the last one written, copy it down and advance the write position;
anything between the two positions is surplus you can overwrite.
