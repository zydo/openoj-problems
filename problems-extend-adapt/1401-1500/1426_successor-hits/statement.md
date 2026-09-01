# Successor Hits

## Description

You are given an integer array `arr`. Count the entries `x` whose
successor — the value `x + 1` — also appears somewhere in `arr`. Each
entry is judged on its own: if the same value occurs several times and
qualifies, every one of its occurrences adds to the count.

Return that count.

### Example 1

```text
Input: arr = [4,7,10,11,12]
Output: 2
Explanation: 10 qualifies (11 is present) and 11 qualifies (12 is
present); 4 and 7 have no successor in the array.
```

### Example 2

```text
Input: arr = [2,2,3,3]
Output: 2
Explanation: Both copies of 2 qualify because 3 is present; the 3's do
not, since 4 never appears.
```

### Example 3

```text
Input: arr = [0,1,1,2,1000,999]
Output: 4
Explanation: The 0, both 1's, and the 999 qualify; 2 has no 3 and 1000
has no 1001 to pair with.
```

### Constraints

- `1 <= arr.length <= 1000`
- `0 <= arr[i] <= 1000`

## Hints

### Hint 1

Pour every value into a hash set first; successor lookups then cost
constant time.

### Hint 2

Walk the original array afterwards and count each entry whose `x + 1`
is a member of that set — the two passes must not be merged, or later
values would be invisible.
