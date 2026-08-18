# The Repeated Value

## Description

You are given an array `nums` of `n + 1` integers in which every entry lies in
the range `[1, n]`. Exactly one value from that range occurs more than once;
every other value occurs at most once.

Return the value that repeats.

Two restrictions hold. Leave `nums` exactly as you found it — no sorting it in
place, no writing into it. And the target solution keeps its extra storage
constant.

### Example 1

```text
Input: nums = [2,5,1,4,2,3]
Output: 2
Explanation: Six entries drawn from 1..5, so something must repeat; here it is
2, at positions 0 and 4.
```

### Example 2

```text
Input: nums = [4,4,1,2,3]
Output: 4
Explanation: The repeated value can sit in adjacent cells.
```

### Example 3

```text
Input: nums = [6,6,6,6,6,6,6]
Output: 6
Explanation: Seven entries from 1..6 with one value filling the entire array —
the repeat count is unbounded.
```

### Constraints

- `1 <= n <= 10^5`
- `nums.length == n + 1`
- `1 <= nums[i] <= n`
- Precisely one value occurs more than once; all others occur once at most.

### Follow-up

With `n + 1` entries squeezed into `n` possible values, a repeat is forced
before you look at the data — why? And how fast can finding it go, given that
the array must come out untouched?

## Hints

### Hint 1

More entries than available values is the whole story: by the pigeonhole
principle a collision is guaranteed, which is why the problem can promise one.

### Hint 2

Read the array as a mapping: cell `i` leads to cell `nums[i]`. Following that
lead from any start must eventually loop, because the walk never leaves the
array.

### Hint 3

Where the loop begins is the answer. A repeated value `d` is pointed at by two
different cells, and a node with two inbound leads is exactly what closes a
loop.

### Hint 4

Locate that entry with the two-speed walk: send one pointer one cell at a time
and another two cells at a time until they collide, then walk one pointer from
the start and the other onward, one cell each, and they meet at the loop's
entry.
