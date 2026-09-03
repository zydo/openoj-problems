# Counting Slices With Alternating XOR

## Description

An integer array `nums` is on the table, next to two distinct integers
`target1` and `target2`.

A slice plan cuts `nums` into one or more contiguous, non-empty blocks
that together cover the array with no overlap.

A slice plan counts as good when the XORs of its blocks alternate
between the two targets, opening with `target1`: writing the blocks as
`b1, b2, ...`, block `b1` must XOR to `target1`, `b2` to `target2`
(when present), `b3` back to `target1`, and so on down the line.

How many good slice plans are there? Return the count modulo `10⁹ + 7`.

Note: a lone block is good exactly when its XOR equals `target1`.

### Example 1

```text
Input: nums = [1,2,2,3], target1 = 1, target2 = 3
Output: 2
Explanation: Cutting after the first element gives blocks [1] and
[2, 2, 3], whose XORs are 1 and 3. Cutting after the third gives
[1, 2, 2] and [3], whose XORs are 1 and 3 as well. No other cut lands
on the targets, so the answer is 2.
```

### Example 2

```text
Input: nums = [1,0,0,0,1], target1 = 1, target2 = 0
Output: 6
Explanation: Every prefix through one of the interior zeros XORs to 1,
and every run of interior zeros XORs to 0. Picking the two cut points
freely among the four positions after the leading 1 — say blocks
[1], [0], [0, 0, 1] — always produces XORs 1, 0, 1, and the number of
ways to choose the two cuts is 4 choose 2 = 6.
```

### Example 3

```text
Input: nums = [9], target1 = 4, target2 = 9
Output: 0
Explanation: The only possible plan is the single block [9], whose XOR
is 9, not 4. No good plan exists, so the answer is 0.
```

### Constraints

- `1 <= nums.length <= 10⁵`
- `0 <= nums[i], target1, target2 <= 10⁵`
- `target1 != target2`

## Hints

### Hint 1

Dynamic programming over cut positions fits naturally: what matters at
each boundary is how the block just before it ended.

### Hint 2

Prefix XORs make any block's XOR a difference of two prefixes: the
block spanning `[l..r]` XORs to `pref[r] ^ pref[l - 1]`.

### Hint 3

A block ending at `r` with the required value must begin just after a
cut `l - 1` whose prefix is `pref[r]` XOR that value — so each ending
position transitions between the two alternating states.

### Hint 4

Bucket cut positions by prefix-XOR value in a hash map (or an array)
so each step reads a couple of bucket totals instead of scanning all
earlier cuts.
