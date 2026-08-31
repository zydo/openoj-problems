# Fewest Two-Unit Transfers

## Description

You are given two arrays of positive integers, `nums` and `target`, of the
same length.

In one move you may pick two distinct indices `i` and `j` (with
`0 <= i, j < nums.length`) and simultaneously

- raise `nums[i]` by 2, and
- lower `nums[j]` by 2.

The two arrays are called _similar_ when they hold exactly the same
multiset of values — that is, when one can be obtained from the other by
rearranging its elements.

Return the fewest moves needed to make `nums` similar to `target`. The
tests are generated so that this is always possible.

### Example 1

```text
Input: nums = [2,4,8], target = [2,6,6]
Output: 1
Explanation: Choose i = 1 and j = 2 to raise nums[1] from 4 to 6 while
lowering nums[2] from 8 to 6, producing [2,6,6]. That array already holds
the same multiset as target, so one move suffices.
```

### Example 2

```text
Input: nums = [3,8,5], target = [5,6,5]
Output: 1
Explanation: Choose i = 0 and j = 1 to raise nums[0] from 3 to 5 while
lowering nums[1] from 8 to 6, producing [5,6,5]. The multiset now matches
target's {5,5,6}, so one move suffices.
```

### Example 3

```text
Input: nums = [7,3,9], target = [3,7,9]
Output: 0
Explanation: The two arrays already contain the same three values, so no
move is needed.
```

### Constraints

- `n == nums.length == target.length`
- `1 <= n <= 10⁵`
- `1 <= nums[i], target[i] <= 10⁶`
- It is always possible to make `nums` similar to `target`.

## Hints

### Hint 1

Every move changes values by exactly 2, so an element's parity never
changes. The even values must therefore be matched among the even values
of `target`, and the odd values among its odd values.

### Hint 2

Within one parity class, pair the smallest `nums` value with the smallest
`target` value, then the next smallest with the next smallest, and so on —
this greedy pairing is optimal.

### Hint 3

Each move delivers one `+2` to a value that must rise, while the value that
must fall rides along for free, so the answer is the total amount that must
be lifted, halved.
