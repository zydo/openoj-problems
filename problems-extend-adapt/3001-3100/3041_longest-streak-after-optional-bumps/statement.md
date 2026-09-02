# Longest Streak After Optional Bumps

## Description

You are given an array `nums` of `n` positive integers.

First, each element may be increased by at most 1 (any subset of elements,
independently; leaving an element unchanged counts as its increase of 0).
Then, choose a subset of the resulting values whose members form a run of
consecutive integers — for instance `{3, 4, 5}` qualifies, while
`{3, 4, 6}` and `{1, 1, 2, 3}` do not.

Return the size of the largest consecutive run that can be formed this way.

### Example 1

```text
Input: nums = [1,2,4,5,6]
Output: 5
Explanation: Raise the 1 to a 2 and the 2 to a 3. The chosen subset
{2, 3, 4, 5, 6} — the two bumped elements plus the untouched 4, 5, 6 —
forms five consecutive integers, and the array has only five elements to
pick from, so nothing longer exists.
```

### Example 2

```text
Input: nums = [3,3,2,8,4]
Output: 4
Explanation: Raise one of the 3's to a 4 and the 4 to a 5. The values
2, 3, 4, 5 are then all present, forming a run of 4 consecutive integers.
The 8 is too far from everything else to join, so 4 is the most possible.
```

### Example 3

```text
Input: nums = [5,5,5]
Output: 2
Explanation: Keeping one 5 and raising another to 6 gives the run {5, 6}.
The third copy has nowhere to go — it would need to become 4 or 7, and
each element can only be raised — so the answer is 2.
```

### Constraints

- `1 <= n == nums.length <= 10⁵`
- `1 <= nums[i] <= 10⁶`

## Hints

### Hint 1

Order the values first. Only an element just below a run's current end can
extend that run, whether it lands there as-is or after its +1 bump.

### Hint 2

Sweep the sorted array tracking, for each ending value `v`, the longest run
of consecutive distinct values that ends at `v` using each element at most
once. Each element tries both of its possible landings — `v` and `v + 1` —
and the answer is the best run seen.
