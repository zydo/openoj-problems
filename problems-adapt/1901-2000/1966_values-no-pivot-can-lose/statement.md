# Values No Pivot Can Lose

## Description

Picture a guessing routine `find(seq, needle)` that hunts for `needle` in a
sequence of distinct integers:

```text
find(seq, needle)
  while seq is not empty
    pick an element of seq at random and call it the pivot
    if pivot equals the needle, report that the needle is present
    else if pivot is smaller than the needle,
        delete the pivot and every element before it from seq
    else,
        delete the pivot and every element after it from seq
  report that the needle is absent
```

On a sorted sequence the routine never errs. On an arbitrary sequence it can
still locate some values — but only those that no run of unlucky picks can
erase.

Given an array `nums` of unique integers, count the values that `find` is
guaranteed to locate in `nums`, whatever pivots the random choices produce.

### Example 1

```text
Input: nums = [8,3,10]
Output: 1
Explanation:
Only 10 is guaranteed to be located. Any pivot below 10 discards the pivot
and the front of the sequence with it, leaving 10 to be found later, while
a first pivot of 8 wipes out 3 and a first pivot of 3 wipes out 8. Both
8 and 3 are therefore losable.
```

### Example 2

```text
Input: nums = [1,4,2,6,9]
Output: 3
Explanation:
The values 1, 6, and 9 are guaranteed: each has only smaller values to its
left and only larger values to its right, so no pivot can discard it. The
value 4 is erased if pivot 2 is ever chosen first, and 2 is erased if
pivot 4 is chosen first.
```

### Example 3

```text
Input: nums = [6,2,8,4]
Output: 0
Explanation:
Every value has a losing first pivot: pivot 8 erases 4, pivot 6 erases 2,
pivot 4 erases 8, and pivot 2 erases 6. No value is guaranteed.
```

### Constraints

- `1 <= nums.length <= 10⁵`
- `-10⁵ <= nums[i] <= 10⁵`
- All values in `nums` are distinct.

### Follow-up

How would your approach change if `nums` were allowed to repeat values?

## Hints

### Hint 1

A value can only fail to be located if some pivot erases it from the
sequence before it is ever picked.

### Hint 2

An erasure needs a pivot sitting to the value's left that is larger than it
(a larger pivot discards the entire right side, the value included), or a
pivot sitting to its right that is smaller (which discards the left side).

### Hint 3

Every position is a possible pivot, so a value survives every run exactly
when neither of those two situations can ever arise — no larger element
anywhere on its left, no smaller one anywhere on its right.
