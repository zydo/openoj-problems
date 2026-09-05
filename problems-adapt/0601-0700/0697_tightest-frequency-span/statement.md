# Tightest Frequency Span

## Description

Call the _degree_ of an array of non-negative integers the highest number of
times any single value repeats in it. Given a non-empty array `nums`, find
the length of the shortest contiguous subarray whose own degree equals the
degree of the whole array.

### Example 1

```text
Input: nums = [7,3,3,7,5,3]
Output: 5
Explanation: The value 3 repeats 3 times, more than any other value, so the
array's degree is 3. Every subarray sharing that degree must stretch from
3's first appearance (index 1) to its last (index 5), a span of 5, and no
shorter subarray can hold all three copies.
```

### Example 2

```text
Input: nums = [9,4,4,9,9,7,7,7]
Output: 3
Explanation: Both 9 and 7 occur 3 times, so the degree is 3. The value 9
needs indices 0 through 4, a span of 5, while 7 needs only indices 5 through
7, a span of 3. The shortest subarray matching the degree is the tighter of
the two, length 3.
```

### Constraints

- `1 <= nums.length <= 5 * 10⁴`
- `0 <= nums[i] <= 49999`

## Hints

### Hint 1

Suppose one value alone reaches the array's peak frequency — say `nums =
[2, 6, 1, 4, 6, 3, 6, 8]`, where 6 is the only value repeated the most.
What subarray must the answer be built from?
