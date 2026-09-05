# Make Every Window Positive

## Description

Call an array positive when every one of its subarrays of length 3 or
more has a strictly positive sum. (Subarrays of length 1 or 2 are exempt
and may hold any values.)

You may perform this operation any number of times:

- Pick one element of `nums` and overwrite it with any integer in the
  range `[-10¹⁸, 10¹⁸]`.

Return the fewest operations that make `nums` positive.

### Example 1

```text
Input: nums = [-4,6,-5]
Output: 1
Explanation:
The only subarray of length 3 is the whole array, and its sum is
-4 + 6 - 5 = -3. Overwriting the last element with a large positive
number makes the sum positive, so one operation suffices.
```

### Example 2

```text
Input: nums = [-9,2,-9,2,-9,2]
Output: 2
Explanation:
Two separate windows fail: elements at indices 0..2 sum to -16, and
elements at indices 3..5 sum to -5 (once index 2 already holds a huge
positive value). Replacing the elements at indices 2 and 5 repairs every
failing window, and no single replacement can reach both, so the answer
is 2.
```

### Example 3

```text
Input: nums = [1,2,3]
Output: 0
Explanation:
The array is positive already, so nothing needs to change.
```

### Constraints

- `3 <= nums.length <= 10⁵`
- `-10⁹ <= nums[i] <= 10⁹`

## Hints

### Hint 1

Longer subarrays never need separate attention: any subarray of length 6
or more splits into consecutive pieces of length 3, 4 and 5, and each
piece is itself a subarray. So only length-3/4/5 windows can break the
rule.

### Hint 2

Sweep the right endpoint of the window left to right, keeping rolling
sums of the length-3/4/5 windows that end at the current position.

### Hint 3

When some window ending at `i` is non-positive, overwrite `nums[i]` with
a very large value. That single write repairs every still-failing window
that contains index `i`, which makes the greedy optimal.
