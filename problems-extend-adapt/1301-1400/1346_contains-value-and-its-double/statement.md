# Contains a Value and Its Double

## Description

You are given an integer array `arr`. Decide whether some entry is
exactly twice another entry sitting at a DIFFERENT position: that is,
whether indices `i != j` exist with `arr[i] == 2 * arr[j]`.

Return `true` when such a pair exists and `false` otherwise.

### Example 1

```text
Input: arr = [6,2,11,3]
Output: true
Explanation: The entry 6 at index 0 is twice the entry 3 at index 3.
```

### Example 2

```text
Input: arr = [4,9,16,5]
Output: false
Explanation: No entry is twice another — every double and every half
these values could pair with is missing from the array.
```

### Example 3

```text
Input: arr = [0,5,0]
Output: true
Explanation: Zero is twice itself, and these two zeros occupy different
indices, so together they form a valid pair.
```

### Constraints

- `2 <= arr.length <= 500`
- `-1000 <= arr[i] <= 1000`

## Hints

### Hint 1

Sweep the array once, carrying a set of the values already visited.

### Hint 2

Before recording the current value, check whether its double — or, when
it is even, its half — has been seen already; adding it to the set only
afterward is what keeps an entry from pairing with its own position.
