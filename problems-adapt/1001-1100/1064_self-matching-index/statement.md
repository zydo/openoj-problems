# Self-Matching Index

## Description

An array `arr` holds distinct integers and is sorted in ascending order.
An index matches itself when the element sitting there equals the index:
`arr[i] == i`. Find the smallest such index, or report `-1` when no
position agrees with its own value.

### Example 1

```text
Input: arr = [-7,-3,2,6,11]
Output: 2
Explanation: The values at indices 0 and 1 are negative, so neither can
equal its index; arr[2] = 2, and that is the first agreement.
```

### Example 2

```text
Input: arr = [0,4,9]
Output: 0
Explanation: The very first element already matches: arr[0] = 0.
```

### Example 3

```text
Input: arr = [-6,3,8]
Output: -1
Explanation: Each element oversteps its index from the start, so no
index ever catches up to its own value.
```

### Constraints

- `1 <= arr.length < 10^4`
- `-10^9 <= arr[i] <= 10^9`

### Follow-up

Scanning left to right finds an answer in `O(n)` with almost no thought.
The sorted, duplicate-free structure is doing extra work for you — can
you trade it for something faster?

## Hints

### Hint 1

Track the gap `arr[i] - i` instead of the raw values: each step to the
right adds 1 to the index but at least 1 to the value, so the gap never
decreases.

### Hint 2

A non-decreasing gap is exactly what binary search needs — hunt for the
leftmost index where the gap stops being negative, then confirm the gap
is actually zero there.
