# The Earliest Even Without A Twin

## Description

An integer array `nums` is laid out in front of you. Look for the even
number that stands alone: a value that (a) is divisible by 2 and (b) occurs
exactly one time anywhere in the array. Among all values meeting both
conditions, report the one whose single occurrence comes first by index.

If the array holds no such value, report `-1`.

### Example 1

```text
Input: nums = [7,3,8,5,8,4]
Output: 4
Explanation: The even values present are 8 and 4. The value 8 appears
twice, so it does not count; 4 appears once and is the only qualifying
value, so the answer is 4.
```

### Example 2

```text
Input: nums = [8,3,8,2]
Output: 2
Explanation: The value 8 is even but repeated, which disqualifies it. The
first (and only) standing-alone even value by index is 2.
```

### Example 3

```text
Input: nums = [6,6]
Output: -1
Explanation: The only even value is duplicated, so no even value appears
exactly once and the answer is -1.
```

### Constraints

- `1 <= nums.length <= 100`
- `1 <= nums[i] <= 100`

## Hints

### Hint 1

Tally how many times each value occurs before scanning for the answer.

### Hint 2

During the scan, a value is a candidate only when the parity check passes
and its tally equals one; return the first candidate you meet.
