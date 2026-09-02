# Greatest Reachable XOR

## Description

You are given a 0-indexed integer array `nums`. A single operation chooses
any index `i` and any non-negative integer `x`, then rewrites `nums[i]` as

```text
nums[i] = nums[i] AND (nums[i] XOR x)
```

where AND and XOR are the bitwise operations. Operations may be applied any
number of times, each time with fresh choices of `i` and `x`.

Return the largest value the XOR of all elements of `nums` can ever reach.

### Example 1

```text
Input: nums = [5, 6, 7]
Output: 7
Explanation: The shared low bits already appear an odd number of times, and
the value 7 is reachable; nothing above 7 can be built.
```

### Example 2

```text
Input: nums = [8, 5, 10]
Output: 15
Explanation: Applying the operation zero times already gives
8 XOR 5 XOR 10 = 15, which turns out to be the best possible.
```

### Example 3

```text
Input: nums = [12]
Output: 12
Explanation: The lone element can keep all of its bits, so its value itself
is reachable.
```

### Example 4

```text
Input: nums = [4, 4, 4]
Output: 4
Explanation: Three equal copies XOR to 4 already; trimming two copies down
to 0 keeps that same bit set exactly once.
```

### Constraints

- `1 <= nums.length <= 10⁵`
- `0 <= nums[i] <= 10⁸`

## Hints

### Hint 1

Ask what a single element can become. `nums[i] AND (nums[i] XOR x)` can
never gain a bit that `nums[i]` lacked — the AND only ever clears bits —
and with the right `x` it can clear any subset of them.

### Hint 2

A bit ends up set in the total XOR exactly when an odd number of elements
contribute it. Since any element can be reduced to any submask of itself,
one surviving copy per bit is all it takes.
