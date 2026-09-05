# The Longest Alternating Stretch

## Description

An integer array `nums` and an integer `threshold` are given, both
indexed from zero. Over every contiguous run of elements `nums[l..r]`
(with `0 <= l <= r < nums.length`), find the longest one meeting all
three of these rules:

- the run opens on an even value: `nums[l] % 2 == 0`
- neighboring elements alternate in parity: for every `i` in
  `[l, r - 1]`, `nums[i] % 2 != nums[i + 1] % 2`
- the whole run stays under the cap: for every `i` in `[l, r]`,
  `nums[i] <= threshold`

Return that longest length. A run is a non-empty, contiguous slice of
`nums`; if no single element can even open one, the answer is `0`.

### Example 1

```text
Input: nums = [1,4,7,6,9], threshold = 7
Output: 3
Explanation: The best run opens at the 4 and reads [4,7,6] — it starts
even, parities alternate, and nothing exceeds 7. Extending to the 9
would break the cap, so the length is 3.
```

### Example 2

```text
Input: nums = [2,2], threshold = 4
Output: 1
Explanation: Both elements are even, so two adjacent ones can never
alternate; every qualifying run is a single element, and 1 is the most
achievable.
```

### Example 3

```text
Input: nums = [10,3,8,5,2,7], threshold = 10
Output: 6
Explanation: The entire array qualifies at once: it opens on the even
10, odd and even positions trade places all the way across, and no
element is above 10.
```

### Example 4

```text
Input: nums = [5], threshold = 3
Output: 0
Explanation: The only element is odd and also above the cap, so no run
can open anywhere; the answer is 0.
```

### Constraints

- `1 <= nums.length <= 100`
- `1 <= nums[i] <= 100`
- `1 <= threshold <= 100`

## Hints

### Hint 1

A run's fate is sealed by its left edge — it must sit on an even value
within the cap. From there the right edge can simply push forward while
parities keep trading places and each new element stays within the cap.

### Hint 2

When a run breaks, no index strictly inside it deserves a fresh scan —
any run starting there is shorter than the one already measured. The
element that caused the break is the only interesting place to resume.
