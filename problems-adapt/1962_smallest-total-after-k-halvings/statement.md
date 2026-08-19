# Smallest Total After K Halvings

## Description

You are given an integer array `values` and an integer `k`. You must perform
exactly `k` operations. Each operation works on one entry of your choice —
and the same entry may be picked again by later operations: an entry holding
`v` loses `floor(v / 2)`, so only `v - floor(v / 2)` survives the operation.

Return the smallest sum the array can have once all `k` operations are spent.

`floor(x)` is `x` rounded down to the nearest integer.

### Example 1

```text
Input: values = [9,2,6], k = 2
Output: 10
Explanation: Halve the 9 first (it loses 4), leaving [5,2,6]. The 6 is now
the largest entry, so the second operation takes 3 from it, leaving [5,2,3].
The sum is 10.
```

### Example 2

```text
Input: values = [6,6], k = 3
Output: 5
Explanation: Hit one 6 (leaves 3), then the other (leaves 3), then either 3
again (leaves 2): the final pair is [3,2], summing to 5.
```

### Example 3

```text
Input: values = [3,2,2], k = 5
Output: 3
Explanation: Take 1 from the 3, then 1 from each 2 in turn: the array
becomes [1,1,1] after four operations. The fifth operation removes
floor(1 / 2) = 0, so the sum stays 3.
```

### Constraints

- `1 <= values.length <= 10⁵`
- `1 <= values[i] <= 10⁴`
- `1 <= k <= 10⁵`

## Hints

### Hint 1

How much an operation removes depends only on the value it lands on. So,
round by round, where should it land?

### Hint 2

Suppose a round lands on entry `a` while some `b >= a` goes untouched.
Replaying that round on `b` instead removes at least as much — so some
optimal schedule only ever touches a current maximum.

### Hint 3

You need the current maximum k times over. Which data structure answers
"extract the max, insert the remainder" in logarithmic time?
