# Find Maximum Balanced XOR Subarray Length

## Description

You are given an integer array `nums`.

A subarray of `nums` is called **balanced** when two things hold at once:

- the bitwise XOR of all its elements is `0`, and
- it contains an equal number of even values and odd values.

Return the length of the longest balanced subarray of `nums`, or `0` if no
balanced subarray exists.

### Example 1

```text
Input: nums = [3,1,3,2,0]
Output: 4
Explanation: The subarray [1,3,2,0] has bitwise XOR 1 XOR 3 XOR 2 XOR 0 = 0
and contains two even values (2 and 0) and two odd values (1 and 3).
```

### Example 2

```text
Input: nums = [3,2,8,5,4,14,9,15]
Output: 8
Explanation: The whole array already works: its bitwise XOR is 0 and it
contains four even and four odd values.
```

### Example 3

```text
Input: nums = [0]
Output: 0
Explanation: The single element is even, so no non-empty subarray has an
equal number of even and odd values.
```

### Constraints

- `1 <= nums.length <= 10⁵`
- `0 <= nums[i] <= 10⁹`

## Hints

### Hint 1

Track two running quantities while sweeping: the prefix XOR and a parity
gap, the number of even elements seen minus the number of odd ones.

### Hint 2

A subarray's XOR is zero exactly when the prefix XOR takes the same value at
its two ends; its even and odd counts tie exactly when the parity gap also
takes the same value at both ends.

### Hint 3

Record the earliest index where each `(prefix XOR, gap)` pair occurs in a
hash map; when the current pair reappears, the distance to that first
occurrence is one candidate for the answer.
