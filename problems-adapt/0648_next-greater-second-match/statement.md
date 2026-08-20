# Next Greater, Second Match

## Description

You are given an integer array `nums`.

For each entry, scan to its right and note every value that is strictly
greater than it, in the order they appear. The second value on that list —
the second greater match — is the answer for that entry. When fewer than two
greater values lie to the right, the answer is `-1`. Equal values are never
greater.

Return one answer per entry, in order.

For instance, in `[3, 1, 5, 2, 8]`: the greater values right of the leading
`3` are `5` then `8`, so its answer is `8`; right of the `1` they are `5`
then `2` — the second greater match need not be large — so its answer is `2`.

### Example 1

```text
Input: nums = [3,1,5,2,8]
Output: [8,2,-1,-1,-1]
Explanation: For 3 the greater values to the right are 5, then 8 — the
second is 8. For 1 they are 5, then 2, so the answer is 2. The 5 meets only
8, the 2 meets only 8, and the 8 meets nothing, so those answers are -1.
```

### Example 2

```text
Input: nums = [1,7,2,8,3,9]
Output: [2,9,3,-1,-1,-1]
Explanation: Right of 1 the greater values are 7, 2, 8, 9 — the second is 2.
Right of 7 they are 8, 9. Right of 2 they are 8, 3. The 8 meets only 9, and
the 3 and 9 meet nothing greater.
```

### Example 3

```text
Input: nums = [2,2,5]
Output: [-1,-1,-1]
Explanation: Each 2 sees exactly one strictly greater value (the 5), so
neither has a second match, and the 5 sees none.
```

### Constraints

- `1 <= nums.length <= 10⁵`
- `-2147483648 <= nums[i] <= 2147483647`

## Hints

### Hint 1

Run the familiar monotonic stack that finds each entry's first greater
value. What becomes of an index at the moment that first value pops it?

### Hint 2

It still owes one more greater value — so move it into a second stack of
indices waiting for their second match, and let later values settle that
stack the same way.

### Hint 3

The second stack must also run non-increasing by value so a new value can
finish every eligible waiter at its top. Note the order a batch leaves the
first stack in, and what that means for the second stack's invariant.
