# One-Swap Step Down

## Description

You are given an array of positive integers `arr`, which may contain
repeated values. In a single move you may pick two positions and
exchange the values stored there. Using exactly one such exchange, you
want the array to become as large as possible while still being strictly
smaller than the original array when the two are compared
element-by-element from the left.

Return the array produced by that best single exchange. If no exchange
can make the array smaller — the array is already the smallest
arrangement of its own values — return `arr` unchanged.

### Example 1

```text
Input: arr = [5,3,4]
Output: [4,3,5]
Explanation: Exchanging the values 5 and 4 lowers the first element as
little as possible, giving the largest array below the original.
```

### Example 2

```text
Input: arr = [1,2,2]
Output: [1,2,2]
Explanation: The array is already the smallest arrangement of its
values, so no single exchange can make it smaller and it is returned
as is.
```

### Example 3

```text
Input: arr = [4,7,2,9,6]
Output: [4,7,2,6,9]
Explanation: Exchanging 9 and 6 shrinks the array while disturbing the
latest possible position, which keeps the result as large as it can be.
```

### Constraints

- `1 <= arr.length <= 10⁴`
- `1 <= arr[i] <= 10⁴`

## Hints

### Hint 1

An exchange makes the array smaller only if it moves a smaller value
into an earlier position. Scanning from the right tells you the latest
position you can lower, and lowering the latest possible position keeps
the result maximal.
