# Center-Mode Quintet Counts I

## Description

Pick any five elements out of `nums`, keeping their original order — call
such a pick a quintet. The middle element of a quintet is its third pick
(`seq[2]`).

The mode of a quintet is the value that occurs most often among its five
elements. A quintet has a lone mode when exactly one value claims that top
frequency. Count the quintets whose middle element is that lone mode: the
value in the middle slot must appear strictly more often than each of the
other values picked. Return the count modulo `10⁹ + 7`.

### Example 1

```text
Input: nums = [4,4,4,4,4,4,4]
Output: 21
Explanation: Every quintet here is [4, 4, 4, 4, 4], and its middle 4 occurs
five times — well ahead of any rival. Choosing which two of the seven
positions to skip gives C(7, 5) = 21 quintets, so the answer is 21.
```

### Example 2

```text
Input: nums = [1,2,2,1,3,2]
Output: 2
Explanation: [1, 2, 2, 1, 2] and [1, 2, 2, 3, 2] each center on a 2 that
occurs three times, more than any other value picked, so both count. On the
other hand [1, 2, 2, 1, 3] centers on a 2 that occurs only twice, tying the
two 1s, so it does not count.
```

### Example 3

```text
Input: nums = [7,3,1,8,2,6]
Output: 0
Explanation: All values are distinct, so every middle element occurs exactly
once and ties the four values around it.
```

### Constraints

- `5 <= nums.length <= 1000`
- `-10⁹ <= nums[i] <= 10⁹`

## Hints

### Hint 1

Charge every qualifying quintet to its middle index. For a fixed slot `m`,
which choices of two earlier and two later elements make `nums[m]` the lone
mode?

### Hint 2

If the middle value gains `a + b` extra copies from the two sides, its
frequency is `1 + a + b`; once `a + b >= 2` no rival value can match it, and
only the `a + b = 1` shapes need a careful tie-break count.
