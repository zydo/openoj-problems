# Summing the Odd-Sized Windows

## Description

You are given an array of positive integers `arr`. Call a _window_ any
block of consecutive elements taken from the array — the usual subarray.
Add up the element sums of every window whose length is odd, and return
that grand total.

### Example 1

```text
Input: arr = [2,7,5]
Output: 28
Explanation: The odd-sized windows and their totals are:
[2] = 2
[7] = 7
[5] = 5
[2,7,5] = 14
Adding all of these together gives 2 + 7 + 5 + 14 = 28.
```

### Example 2

```text
Input: arr = [6]
Output: 6
Explanation: The array's only window is [6] itself.
```

### Example 3

```text
Input: arr = [3,1,4,1,5,9]
Output: 96
```

### Constraints

- `1 <= arr.length <= 100`
- `1 <= arr[i] <= 1000`

### Follow-up

Can you produce the answer in `O(n)` time?

## Hints

### Hint 1

A direct scan tries every `(start, end)` pair, keeps a running total
between the two ends, and banks it whenever the window's length is odd.

### Hint 2

Switch from summing windows to summing contributions: for each index,
work out how many odd-sized windows contain that position, multiply the
element by the count, and accumulate across all indices.
