# Strided Multiplier Queries I

## Description

An array `nums` of length `n` is about to be reworked by a list of `q`
commands. Each command is a quadruple `queries[i] = [l, r, k, v]` and is
applied by walking the positions `l`, `l + k`, `l + 2 * k`, ... while they
stay at most `r`, multiplying the value at every visited position by `v`
modulo `10⁹ + 7`.

Process the commands one after another in the given order, then return the
bitwise XOR of every element of the finished array.

### Example 1

```text
Input: nums = [3,5,2], queries = [[0,2,2,3]]
Output: 10
Explanation: With step 2 the command visits indices 0 and 2, so the array
becomes [9, 5, 6]. The XOR of its elements is 9 ^ 5 ^ 6 = 10.
```

### Example 2

```text
Input: nums = [4,7,1,9], queries = [[1,3,1,5],[0,3,2,2]]
Output: 12
Explanation: The first command multiplies indices 1 through 3 by 5, giving
[4, 35, 5, 45]. The second multiplies indices 0 and 2 by 2, giving
[8, 35, 10, 45]. The XOR of all elements is 8 ^ 35 ^ 10 ^ 45 = 12.
```

### Example 3

```text
Input: nums = [999999998,7], queries = [[0,1,1,99999]]
Output: 998744105
Explanation: Step 1 sends the command through both positions, and each
product is reduced modulo 10⁹ + 7: the array becomes [999100016, 699993].
The XOR of its elements is 999100016 ^ 699993 = 998744105.
```

### Constraints

- `1 <= n == nums.length <= 10³`
- `1 <= nums[i] <= 10⁹`
- `1 <= q == queries.length <= 10³`
- each command is `queries[i] = [l, r, k, v]` with
  `0 <= l <= r < n`, `1 <= k <= n`, and `1 <= v <= 10⁵`

## Hints

### Hint 1

With `n` and `q` both capped at one thousand, applying each command by
stepping through its positions exactly as described is fast enough — no
fancy structure is needed.

### Hint 2

Fold each product modulo the prime as you go, and accumulate the XOR of the
scratch array once at the very end.
