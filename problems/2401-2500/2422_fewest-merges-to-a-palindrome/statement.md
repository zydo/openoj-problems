# Fewest Merges to a Palindrome

## Description

You are given an array `nums` of positive integers.

In one operation you may pick any two adjacent elements and replace them
with their sum. For example, from `[1,2,3,1]` one operation on the middle
pair produces `[1,5,1]`.

Return the minimum number of operations needed to turn `nums` into a
palindrome. A palindrome reads the same forwards and backwards.

### Example 1

```text
Input: nums = [1,2,1]
Output: 0
Explanation: The array is already a palindrome, so no operations are
needed.
```

### Example 2

```text
Input: nums = [1,2,3,4,5]
Output: 4
Explanation: Merging adjacent elements four times collapses the whole
array into the single element [15], which is trivially a palindrome.
```

### Example 3

```text
Input: nums = [2,1,1,2,3]
Output: 2
Explanation: Merge the first two elements, 2 and 1, into 3 to get
[3,1,2,3]; then merge the middle 1 and 2 into 3 to get [3,3,3], a
palindrome. Two operations suffice, and no single operation can reach a
palindrome.
```

### Constraints

- `1 <= nums.length <= 10⁵`
- `1 <= nums[i] <= 10⁶`

## Hints

### Hint 1

Merging never changes the array's total sum, and a palindrome produced by
merges is a partition of `nums` into consecutive blocks whose sums read
the same forwards and backwards.

### Hint 2

Each merge reduces the element count by one, so an array split into `m`
palindrome blocks costs exactly `n - m` operations. Minimizing operations
is therefore maximizing the number of palindrome blocks.

### Hint 3

The outermost block must equal the innermost one, so match block sums from
the two ends with a greedy two-pointer sweep: when the two running sums
differ, the smaller side must absorb its next adjacent element.
