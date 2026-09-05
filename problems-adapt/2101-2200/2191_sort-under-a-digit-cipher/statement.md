# Sort Under a Digit Cipher

## Description

You are given a 0-indexed integer array `mapping` describing a scrambled
way of writing numbers: `mapping[i] = j` says that digit `i` is written
as digit `j` under this cipher.

The cipher image of an integer is what you get by rewriting every digit
`d` of the integer as `mapping[d]`, then reading the result as an
ordinary integer (so leading zeros simply disappear).

You are also given an integer array `nums`. Rearrange `nums` in
non-decreasing order of the cipher images of its elements and return
the result.

Notes:

- When two elements share the same cipher image, they must keep the
  relative order they had in `nums`.
- Ordering uses only the cipher images; the returned array still holds
  the original numbers.

### Example 1

```text
Input: mapping = [9,8,7,6,5,4,3,2,1,0], nums = [12, 90, 21]
Output: [90, 21, 12]
Explanation: Every digit is swapped with its mirror (d becomes 9 - d).
12 images to 87, 90 images to 09, which reads as 9, and 21 images to
78. Ordering by those images gives 90 (9), then 21 (78), then 12 (87).
```

### Example 2

```text
Input: mapping = [3,0,1,1,4,5,6,7,8,9], nums = [12, 21, 3]
Output: [12, 3, 21]
Explanation: 12 images to 01, which reads as 1; 21 images to 10; and 3
images to 1. The 12 and the 3 tie on image 1, so they stay in their
input order, and the 21 (image 10) lands after both.
```

### Example 3

```text
Input: mapping = [5,3,8,1,7,0,9,2,6,4], nums = [23, 321, 89, 90]
Output: [90, 89, 23, 321]
Explanation: The images are 81 for 23, 183 for 321, 64 for 89, and 45
for 90. Sorting by those images yields [90, 89, 23, 321].
```

### Constraints

- `mapping.length == 10`
- `0 <= mapping[i] <= 9`
- All the values of `mapping[i]` are unique.
- `1 <= nums.length <= 3 * 10^4`
- `0 <= nums[i] < 10^9`

## Hints

### Hint 1

Compute each number's cipher image once, digit by digit, and use that
image as the sort key.

### Hint 2

Equal images must not reorder the input — rely on a stable sort, or
break ties with the original index.
