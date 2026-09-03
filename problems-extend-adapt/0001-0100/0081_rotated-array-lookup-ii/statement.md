# Rotated Array Lookup II

## Description

An integer array `nums` was first sorted in non-decreasing order — its
values are not required to be distinct — and was then spun at some
pivot index `k` (`0 <= k < nums.length`): the front piece
`[nums[0]..nums[k-1]]` moved behind the back piece, so the array you
receive reads `[nums[k], ..., nums[n-1], nums[0], ..., nums[k-1]]`.
For instance, sorting gives `[0,1,1,2,3,4,6]`, and spinning it at
index 4 produces `[3,4,6,0,1,1,2]`.

Given the spun array `nums` and an integer `target`, report `true`
when `target` occurs in `nums` and `false` when it does not. Cut the
number of steps your method takes as far down as you can.

### Example 1

```text
Input: nums = [6,7,7,1,2,4,4], target = 4
Output: true
Explanation: 4 survives the spin and sits in the array's back half.
```

### Example 2

```text
Input: nums = [3,3,3,1,3], target = 2
Output: false
Explanation: Almost every value is 3 here, and 2 is nowhere among them.
```

### Example 3

```text
Input: nums = [1], target = 1
Output: true
Explanation: A single element is its own spun array for any pivot.
```

### Constraints

- `1 <= nums.length <= 5000`
- `-10⁴ <= nums[i] <= 10⁴`
- `nums` is guaranteed to have been spun at some pivot.
- `-10⁴ <= target <= 10⁴`

### Follow-up

The array's values may repeat, which its duplicate-free cousin does
not allow. Does that change how fast the lookup can go — and why?
