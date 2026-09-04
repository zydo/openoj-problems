# Widest Span Where Each Element Is Maximum

## Description

You are given an array `nums` of **distinct** integers.

Build an array `ans` of the same length where `ans[i]` is the length of the
longest contiguous run of `nums` whose largest element is `nums[i]`.

Return `ans`.

### Example 1

```text
Input: nums = [3,9,7,12,5]
Output: [1,3,1,5,1]
Explanation: The value 3 is dominated by its right neighbour, so only the
run [3] has it as the maximum. The 9 rules the run [3,9,7] of length 3, the
7 is squeezed between 9 and 12, the 12 is the maximum of the whole array, and
the trailing 5 rules only itself.
```

### Example 2

```text
Input: nums = [4,7,10,13]
Output: [1,2,3,4]
Explanation: Every element is larger than all before it, so the run in which
nums[i] is the maximum reaches from the start to i and has length i + 1.
```

### Example 3

```text
Input: nums = [8,6,4,2]
Output: [4,3,2,1]
Explanation: Every element is larger than all after it, so the run for
nums[i] stretches from i to the end.
```

### Constraints

- `1 <= nums.length <= 10⁵`
- `1 <= nums[i] <= 10⁵`
- all elements of `nums` are distinct

## Hints

### Hint 1

The run in which `nums[i]` is the maximum ends exactly where a strictly
larger element appears on either side — find the nearest larger neighbour in
each direction.

### Hint 2

A stack of indices with decreasing values finds both boundaries: anything
smaller than the incoming element has just met its larger right neighbour.

### Hint 3

If the stack empties, the run extends to the array's edge; otherwise the top
of the stack is the boundary.
