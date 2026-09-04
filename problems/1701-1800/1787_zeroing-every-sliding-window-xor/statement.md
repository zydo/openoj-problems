# Zeroing Every Sliding Window's XOR

## Description

Given an array `nums` and an integer `k`, consider every contiguous window
of exactly `k` elements. A window's XOR is obtained by XOR-ing its `k`
entries together.

You may overwrite any elements of `nums` with any non-negative values. What
is the fewest overwrites needed so that every length-`k` window — there are
`nums.length - k + 1` of them — has an XOR of exactly zero?

### Example 1

```text
Input: nums = [5,0,7,0], k = 1
Output: 2
Explanation: With k = 1 each window is a single element, so every element
must itself be zero. Rewriting [5,0,7,0] as [0,0,0,0] costs 2 changes.
```

### Example 2

```text
Input: nums = [3,1,2,6,5,5], k = 2
Output: 4
Explanation: Turn the array into [5,5,5,5,5,5]: the 3, 1, 2 and 6 change,
while both 5s stay. Every adjacent pair then XORs to zero, and 4 is the
cheapest possible.
```

### Example 3

```text
Input: nums = [8,5,2,8,5,9,8,5,4], k = 3
Output: 3
Explanation: Rewriting the array as [8,5,13,8,5,13,8,5,13] changes only the
three entries at indices 2, 5 and 8. The array then repeats with period 3
and 8 ⊕ 5 ⊕ 13 = 0, so every window of three XORs to zero.
```

### Constraints

- `1 <= k <= nums.length <= 2000`
- `0 <= nums[i] < 2¹⁰`

## Hints

### Hint 1

Adjacent windows overlap in `k - 1` entries, so a window starting at `i + k`
keeps the window at `i` unchanged: every window XORs to zero exactly when
`nums[i] == nums[i + k]` for all valid `i`.

### Hint 2

That forces one shared value per residue class modulo `k`, and the whole
requirement reduces to picking those `k` values so they XOR to zero.
