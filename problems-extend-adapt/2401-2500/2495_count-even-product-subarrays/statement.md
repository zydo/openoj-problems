# Count Even-Product Subarrays

## Description

You are given a 0-indexed array `nums` of positive integers.

A subarray is a contiguous, non-empty slice of `nums`. Call a subarray
even-product when the product of all of its entries is an even number.

Return the number of even-product subarrays of `nums`.

### Example 1

```text
Input: nums = [2,4,6]
Output: 6
Explanation: Every entry is even, so every subarray has an even product.
The 3 * 4 / 2 = 6 subarrays of a length-3 array all qualify.
```

### Example 2

```text
Input: nums = [1,3,5,2]
Output: 4
Explanation: The single even entry is the 2 at index 3. Exactly the four
subarrays that reach it have an even product: [2], [5,2], [3,5,2], and
[1,3,5,2].
```

### Example 3

```text
Input: nums = [1,1,1]
Output: 0
Explanation: Every entry is odd, so no subarray has an even product.
```

### Constraints

- `1 <= nums.length <= 10⁵`
- `1 <= nums[i] <= 10⁵`

## Hints

### Hint 1

A product is even exactly when at least one of its factors is even, so an
even-product subarray is precisely a subarray that contains an even
element.

### Hint 2

Walk the array from left to right, remembering the index of the most
recent even element. Every subarray that ends at the current position and
starts no later than that index contains an even element.
