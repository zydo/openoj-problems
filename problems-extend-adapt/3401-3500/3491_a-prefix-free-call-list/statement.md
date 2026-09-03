# A Prefix-Free Call List

## Description

You are given an array `numbers` of digit strings, each standing for a
phone number. The list is prefix-free when no entry is a prefix of any
other entry — nothing dials into the middle of something longer.

Return `true` if `numbers` is prefix-free, or `false` otherwise.

### Example 1

```text
Input: numbers = ["61","29","7","445"]
Output: true
Explanation: Every number differs from the others before any of them
runs out of digits, so no number is a prefix of another.
```

### Example 2

```text
Input: numbers = ["702","70","7050","90"]
Output: false
Explanation: "70" is a prefix of both "702" and "7050", so the list is
not prefix-free.
```

### Example 3

```text
Input: numbers = ["5","5"]
Output: false
Explanation: The two entries are identical, and a number counts as a
prefix of its own equal copy.
```

### Constraints

- `2 <= numbers.length <= 50`
- `1 <= numbers[i].length <= 50`
- Every number consists only of the digits `'0'` through `'9'`.

## Hints

### Hint 1

Put the numbers in sorted order first — a prefix always sorts no later
than any string it extends.

### Hint 2

After sorting, it suffices to test each number against its immediate
successor: if any prefix relationship exists in the list, it must show up
between two neighbors.
