# Triplets Whose Sum d Divides

## Description

Given a 0-indexed integer array `nums` and an integer `d`, count the
index triples `(i, j, k)` with `i < j < k` such that
`(nums[i] + nums[j] + nums[k]) % d == 0`. Return that count.

### Example 1

```text
Input: nums = [5,2,3,8,1], d = 7
Output: 1
Explanation: Among the ten possible triples, only (0, 3, 4) has a sum
that 7 divides: 5 + 8 + 1 = 14. The answer is therefore 1.
```

### Example 2

```text
Input: nums = [4,4,4,4], d = 4
Output: 4
Explanation: All four triples of this array sum to 12, a multiple of
4, so every one of them counts.
```

### Example 3

```text
Input: nums = [9,6,12,3], d = 9
Output: 2
Explanation: The qualifying triples are (0, 1, 2) with sum 27 and
(0, 1, 3) with sum 18; both are multiples of 9. No other triple works.
```

### Constraints

- `1 <= nums.length <= 1000`
- `1 <= nums[i] <= 10⁹`
- `1 <= d <= 10⁹`

## Hints

### Hint 1

Pin the leftmost index of the triple first.

### Hint 2

Move a second index to the right, tallying how many skipped elements
carry each remainder modulo d.

### Hint 3

Standing at the current index, `nums[left] + nums[current]` decides
which remainder the middle element must contribute.

### Hint 4

Look that remainder up in the tally to count every valid middle
element between the two ends at once.
