# A Digit From Each Side

## Description

You are given two arrays of digits, `nums1` and `nums2`, where the digits
within each array are distinct. A number qualifies when it contains at
least one digit that appears in `nums1` and at least one digit that
appears in `nums2` — a digit present in both arrays can cover both sides
on its own.

Return the smallest qualifying number.

### Example 1

```text
Input: nums1 = [7,2,9], nums2 = [4,6]
Output: 24
Explanation: The two arrays share no digit, so the number needs two
digits. Using 2 from the first array and 4 from the second gives 24,
which is smaller than the reverse order 42.
```

### Example 2

```text
Input: nums1 = [8,5], nums2 = [1,5,3]
Output: 5
Explanation: The digit 5 appears in both arrays, so the one-digit number 5
already qualifies — and no two-digit number can beat it.
```

### Example 3

```text
Input: nums1 = [6], nums2 = [9]
Output: 69
Explanation: Nothing is shared, so both digits are needed. The smaller
digit leads: 69 beats 96.
```

### Constraints

- `1 <= nums1.length, nums2.length <= 9`
- `1 <= nums1[i], nums2[i] <= 9`
- All digits within each array are distinct.

## Hints

### Hint 1

Any qualifying number needs at most two digits. When can a single digit do
the entire job?

### Hint 2

One digit suffices exactly when the arrays share one. Otherwise the
number is two digits long, and only the minimum of each array can
matter — glue them together in whichever order is smaller.
