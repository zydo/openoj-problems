# Longest Zero-XOR Balanced Run

## Description

You are given an integer array `nums`.

Call a subarray _balanced_ when both of these hold at once:

- the bitwise XOR of all its elements is `0`;
- it contains the same number of even elements as odd elements.

Return the length of the longest balanced subarray of `nums`, or `0` if
no non-empty subarray qualifies.

### Example 1

```text
Input: nums = [13,2,12,15,11,8,10,5]
Output: 8
Explanation: The whole array is balanced: its XOR is 0, and it holds
four even numbers (2, 12, 8, 10) and four odd ones (13, 15, 11, 5).
```

### Example 2

```text
Input: nums = [7,2,4,1]
Output: 4
Explanation: Every element participates: 7 XOR 2 XOR 4 XOR 1 = 0 with
two even and two odd entries, so the longest balanced run is the whole
array.
```

### Example 3

```text
Input: nums = [10,3,10]
Output: 0
Explanation: No non-empty subarray has XOR 0 and an even/odd tie at the
same time.
```

### Constraints

- `1 <= nums.length <= 10⁵`
- `0 <= nums[i] <= 10⁹`

## Hints

### Hint 1

Walk the array once keeping two running values: the prefix XOR and the
parity gap (evens met so far minus odds met so far). A hash map storing
the earliest index of each `(prefix XOR, gap)` pair is all the state you
need.

### Hint 2

When the pair you are holding at index `i` was first seen at index `j`,
the elements strictly between them cancel both ways — their XOR sums to
zero and their even and odd counts agree — so `i - j` is a candidate for
the longest run.
