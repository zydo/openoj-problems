# Restacking The Open Windows

## Description

A screen keeps `n` open windows, numbered `1` to `n`, piled in a stack:
array `windows` lists them from the top of the pile to the bottom.

A sequence of taps then reshuffles the pile. The `i`-th tap — recorded as
`queries[i]` — yanks window `queries[i]` out of the stack and drops it back
on top; everything else keeps its current relative order.

Report the pile's final arrangement, top to bottom.

### Example 1

```text
Input: windows = [1,2,3,4], queries = [2,4,2]
Output: [2,4,1,3]
Explanation: Here is the stack after each tap:
Initial order: [1,2,3,4]
After the first tap: [2,1,3,4]
After the second tap: [4,2,1,3]
After the last tap: [2,4,1,3]
```

### Example 2

```text
Input: windows = [3,1,2], queries = [1,1]
Output: [1,3,2]
Explanation: Both taps lift window 1, so window 3 keeps its place behind
it and window 2 stays put.
```

### Example 3

```text
Input: windows = [2,5,1,4,3], queries = [3,4,4,1]
Output: [1,4,3,2,5]
Explanation: Windows 3, 4, and 1 were lifted (4 twice), so they finish in
order of their most recent lift, with never-lifted windows 2 and 5 below.
```

### Constraints

- `1 <= n == windows.length <= 10⁵`
- `windows` is a permutation of `[1, n]`.
- `1 <= queries.length <= 10⁵`
- `1 <= queries[i] <= n`

## Hints

### Hint 1

Try working through the taps in reverse rather than simulating them in
order.

### Hint 2

A window's final height is set by the last tap naming it — a later lift
always lands above an earlier one.

### Hint 3

Collect the lifted windows newest tap first, skipping every window already
collected, then append the windows no tap ever named in their original
order.
