# Integer Array Ordering

## Description

Return `nums` arranged in ascending numeric order.

Do not use a built-in or library sorting routine. Your implementation must run
in `O(n log n)` time while using as little additional space as practical; a
hand-written merge sort or heap sort meets these requirements. The returned
ascending sequence is compared exactly.

### Example 1

```text
Input: nums = [-3,4,-1,4,0]
Output: [-3,-1,0,4,4]
```

### Example 2

```text
Input: nums = [9,0,-2,9,1]
Output: [-2,0,1,9,9]
```

### Constraints

- `1 <= nums.length <= 5 * 10⁴`
- `-5 * 10⁴ <= nums[i] <= 5 * 10⁴`
