# Parity-Matched Ordering

## Description

The array `nums` holds an even number of integers — exactly half even and
half odd. Reorder the values so each slot agrees with what it holds: every
even slot carries an even value and every odd slot an odd value.

Many interleavings satisfy that rule. The one this judge grades is pinned
down as follows: the even values, sorted ascending, fill the even slots in
order, and the odd values, sorted ascending, fill the odd slots in order.
Return exactly that array.

### Example 1

```text
Input: nums = [5,4,11,2,9,8]
Output: [2,5,4,9,8,11]
Explanation: The even values 2, 4 and 8 take the even slots in ascending
order, and the odd values 5, 9 and 11 take the odd slots the same way.
Interleavings such as [4,5,8,9,2,11] also obey the parity rule but are not
the pinned answer.
```

### Example 2

```text
Input: nums = [3,0]
Output: [0,3]
Explanation: Zero is even, so it takes the even slot while 3 takes the odd
one.
```

### Example 3

```text
Input: nums = [10,3,2,5,4,1]
Output: [2,1,4,3,10,5]
```

### Constraints

- `2 <= nums.length <= 2 * 10⁴`
- `nums.length` is even.
- Exactly half of the values in `nums` are even.
- `0 <= nums[i] <= 1000`

### Follow-up

Could you produce the ordering in place, without a second array?
