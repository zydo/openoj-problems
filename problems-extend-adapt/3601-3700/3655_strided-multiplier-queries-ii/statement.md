# Strided Multiplier Queries II

## Description

An array `nums` of length `n` faces a batch of `q` commands, each written as
`queries[i] = [li, ri, ki, vi]`. To apply a command, start at position `li`
and keep hopping `ki` slots forward: every position you land on, as long as
it is at most `ri`, has its value replaced by `value * vi` modulo `10⁹ + 7`.

Run the commands in the order given, then return the bitwise XOR of all
elements of the resulting array.

This is the scaled-up counterpart of the first version — both `n` and `q`
reach `10⁵`, so touching every visited position of every command directly
may be too slow.

### Example 1

```text
Input: nums = [5,9,2,6], queries = [[0,3,2,4],[1,3,1,3]]
Output: 5
Explanation: The first command's step-2 walk lands on indices 0 and 2,
giving [20, 9, 8, 6]. The second walks indices 1 through 3 by 3, giving
[20, 27, 24, 18]. The XOR of all elements is 20 ^ 27 ^ 24 ^ 18 = 5.
```

### Example 2

```text
Input: nums = [8,3,10,7,4], queries = [[0,4,3,2],[2,4,2,6],[0,1,1,5]]
Output: 117
Explanation: Command one visits indices 0 and 3, giving [16, 3, 10, 14, 4].
Command two visits indices 2 and 4, giving [16, 3, 60, 14, 24]. Command
three multiplies indices 0 and 1 by 5, giving [80, 15, 60, 14, 24]. The XOR
of all elements is 117.
```

### Example 3

```text
Input: nums = [999999999,123456789], queries = [[0,1,1,100000],[0,0,1,99991]]
Output: 672661665
Explanation: The first command reduces both products modulo 10⁹ + 7,
yielding [999200007, 678813585]. The second multiplies index 0 by 99991,
leaving [7200560, 678813585]. The XOR of all elements is 672661665.
```

### Constraints

- `1 <= n == nums.length <= 10⁵`
- `1 <= nums[i] <= 10⁹`
- `1 <= q == queries.length <= 10⁵`
- each command is `queries[i] = [li, ri, ki, vi]` with
  `0 <= li <= ri < n`, `1 <= ki <= n`, and `1 <= vi <= 10⁵`

## Hints

### Hint 1

Split the commands by stride against `B = sqrt(n)`. Commands sharing the
same `(stride, start residue)` all walk one residue class; record each one
in a difference array over that class — the multiplier `vi` where the walk
begins, its modular inverse just past where it ends — and a single
prefix-product pass over the class applies the entire group at once.

### Hint 2

A stride above `B` can land on at most `sqrt(n) + 1` positions, so those
commands are cheap to run literally; together they cost at most
`q * sqrt(n)` updates.
