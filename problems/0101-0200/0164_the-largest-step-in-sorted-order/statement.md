# The Largest Step In Sorted Order

## Description

Take an array of integers and imagine its elements rearranged into
non-decreasing order. Walk that ordered sequence from left to right and
measure each step — the difference between one element and the one after it.
Return the size of the widest step on the whole walk.

An array holding fewer than two elements has no successive pair at all, and
the answer in that case is `0`.

Your algorithm is required to run in linear time and to use no more than
linear extra space; a comparison sort followed by a scan answers the
question but is not fast enough for the bar set here.

### Example 1

```text
Input: nums = [17,4,92,41,58]
Output: 34
Explanation: In sorted order the values read [4,17,41,58,92]; the steps are
13, 24, 17 and 34, so the widest one is the 34 between 58 and 92.
```

### Example 2

```text
Input: nums = [8]
Output: 0
Explanation: One element — no pair of neighbours exists to measure.
```

### Example 3

```text
Input: nums = [300,301,303]
Output: 2
Explanation: The sorted walk is [300,301,303] with steps of 1 and 2.
```

### Constraints

- `1 <= nums.length <= 10⁵`
- `0 <= nums[i] <= 10⁹`
