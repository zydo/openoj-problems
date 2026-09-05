# The Doubled-Top Staircase

## Description

Rearranging an array never changes its contents, only their order. We
call an array a _doubled-top staircase_ when its contents match those of
the array

    base[m] = [1, 2, ..., m - 1, m, m]

that is, a length `m + 1` array in which every value from `1` through
`m - 1` appears exactly once and the top value `m` appears twice. For
instance, `base[1] = [1, 1]` and `base[3] = [1, 2, 3, 3]`.

Given an integer array `nums`, report whether it is a doubled-top
staircase — in other words, whether some rearrangement of `nums` equals
some `base[m]`.

### Example 1

```text
Input: nums = [5,1,4,2,3,5]
Output: true
Explanation: The top value is 5 and the array holds six entries, which
matches base[5]'s length of 6. Sorted, the array reads [1,2,3,4,5,5] —
exactly base[5] — so a suitable rearrangement exists.
```

### Example 2

```text
Input: nums = [4,2,1,3,3]
Output: false
Explanation: The top value is 4, and base[4] = [1,2,3,4,4] would need
the length to be 5 — which it is. But the doubled value here is 3 while
base[4] doubles 4, and no rearrangement can fix the multiset, so the
answer is false.
```

### Example 3

```text
Input: nums = [1,1]
Output: true
Explanation: The top value 1 makes base[1] = [1,1] the only candidate,
and the array is already that array.
```

### Example 4

```text
Input: nums = [1,2,2,3,4,4]
Output: false
Explanation: The top value 4 pins the candidate at base[4], which holds
only five entries, while `nums` holds six. No base array fits.
```

### Constraints

- `1 <= nums.length <= 100`
- `1 <= nums[i] <= 200`

### Hint 1

Read off the maximum value `m` first. Any matching `base` must use that
same `m` — every entry of `base[m]` is at most `m`, and `m` itself
appears in it twice — so only one candidate array ever needs checking.

### Hint 2

That candidate is settled by two cheap tests: `base[m]` has length
`m + 1`, and its sorted contents are `1` through `m - 1` followed by two
copies of `m`.
