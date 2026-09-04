# Zero-Target Hops III

## Description

You are placed at index `start` of a non-negative integer array `arr`.
While standing on index `i`, one hop takes you either to `i + arr[i]` or
to `i - arr[i]`, and neither landing may fall outside the array.

Decide whether some chain of hops can ever land you on an index whose
value is `0`.

### Example 1

```text
Input: arr = [3,1,2,0,4], start = 1
Output: true
Explanation: Hop from index 1 back to index 0, then from index 0 forward
to index 3, whose value is 0.
```

### Example 2

```text
Input: arr = [2,4,1,3,0,2], start = 2
Output: false
Explanation: The hops from index 2 keep cycling among the indexes with
non-zero values and can never land on the lone zero at index 4.
```

### Example 3

```text
Input: arr = [5,0,2,3,1,4], start = 5
Output: true
Explanation: A single hop from index 5 backward by 4 reaches index 1,
whose value is 0.
```

### Constraints

- `1 <= arr.length <= 5 * 10⁴`
- `0 <= arr[i] < arr.length`
- `0 <= start < arr.length`

## Hints

### Hint 1

Treat every index as a node with at most two outgoing edges and search
outward from `start` until nothing new turns up.

### Hint 2

Mark each index the first time it is reached — the answer is settled the
moment any visited index holds `0`, and the marks also stop cycles from
running forever.
