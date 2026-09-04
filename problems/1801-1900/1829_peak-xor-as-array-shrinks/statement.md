# Peak XOR as the Array Shrinks

## Description

You are given a sorted array `nums` of non-negative integers and an integer
`maximumBit`. Repeat the following two steps exactly `n` times, where `n` is
the length of `nums`:

- Choose an integer `k` with `0 <= k < 2^maximumBit` that makes the bitwise
  XOR of every element still in `nums`, XORed with `k`, as large as
  possible, and record that `k`.
- Drop the last element of `nums`.

Return an array holding the recorded values in the order the steps ran.

### Example 1

```text
Input: nums = [2,4,6], maximumBit = 3
Output: [7,1,5]
Explanation: The XOR of the full array is 0, so k = 7 maximizes it. After
the last element is removed, [2,4] XORs to 6 and k = 1; after another
removal, [2] XORs to 2 and k = 5.
```

### Example 2

```text
Input: nums = [7,7,7], maximumBit = 3
Output: [0,7,0]
Explanation: 7 ^ 7 ^ 7 = 7 already peaks on its own, then [7,7] XORs to 0
and wants k = 7, and the final lone 7 again wants k = 0.
```

### Example 3

```text
Input: nums = [1], maximumBit = 1
Output: [0]
Explanation: A single element means a single query: 1 XOR 0 = 1 is the
largest one bit can reach.
```

### Constraints

- `1 <= nums.length <= 10⁵`
- `1 <= maximumBit <= 20`
- `0 <= nums[i] < 2^maximumBit`
- `nums` is sorted in ascending order.

## Hints

### Hint 1

No value can reach `2^maximumBit`, so no XOR of them can either — the
ceiling `2^maximumBit - 1` is the best anyone can hope for.

### Hint 2

For a fixed prefix XOR `p`, setting `k = p XOR (2^maximumBit - 1)` fills
every active bit with a one, so it is always optimal.
