# Whole-Batch Values

## Description

An integer array `nums` and an integer `k` are in front of you. Think of
`k` as a batch size and call a value well-repeated when the number of
times it appears in `nums` is an exact multiple of `k`.

Add up every well-repeated value, counting each of its occurrences once —
a value `v` that shows up `f` times contributes `v * f` when `f` divides
evenly by `k`. If no value qualifies, the total is 0.

### Example 1

```text
Input: nums = [5,5,5,5,9], k = 2
Output: 20
Explanation: The value 5 appears 4 times and 4 is a multiple of 2, so it
joins the total once per occurrence: 5 + 5 + 5 + 5 = 20. The value 9
appears once, and a single occurrence is not a multiple of 2.
```

### Example 2

```text
Input: nums = [7,7,7,1,1,8,8], k = 3
Output: 21
Explanation: Only 7 reaches a count that 3 divides — it appears 3 times,
worth 7 + 7 + 7 = 21. The values 1 and 8 each appear twice, which falls
short of a multiple of 3.
```

### Example 3

```text
Input: nums = [2,4,6,8], k = 5
Output: 0
Explanation: Every value appears once, and no count of 1 can be a
multiple of 5, so nothing qualifies and the total is 0.
```

### Example 4

```text
Input: nums = [3,1,3], k = 1
Output: 7
Explanation: With a batch size of 1 every count qualifies, so the total
is simply the sum of the whole array: 3 + 1 + 3 = 7.
```

### Constraints

- `1 <= nums.length <= 100`
- `1 <= nums[i] <= 100`
- `1 <= k <= 100`

## Hints

### Hint 1

No cleverness is required — counting is the whole game.

### Hint 2

Tally how many times each distinct value shows up before deciding
anything.

### Hint 3

A value earns its place in the total only when its tally divides evenly
by `k`, and it then adds itself once per appearance.
