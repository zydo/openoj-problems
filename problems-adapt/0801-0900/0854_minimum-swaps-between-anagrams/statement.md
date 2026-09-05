# Minimum Swaps Between Anagrams

## Description

Two lowercase strings `startText` and `targetText` are anagrams of one
another. In one operation, choose any two positions in `startText` and swap
their characters.

Return the fewest operations needed to make `startText` equal `targetText`.

### Example 1

```text
Input: startText = "aabbcc", targetText = "baccab"
Output: 3
```

### Example 2

```text
Input: startText = "abcdef", targetText = "fabcde"
Output: 5
Explanation: Moving the final character to the front requires five swaps when each operation exchanges two positions optimally along the cycle.
```

### Constraints

- `1 <= startText.length <= 20`
- `targetText.length == startText.length`
- Both strings use only lowercase letters from `{'a', 'b', 'c', 'd', 'e',
'f'}`.
- `targetText` is an anagram of `startText`.

## Hints

### Hint 1

Treat every reachable arrangement as a state in a breadth-first search.

### Hint 2

At each state, find its first position that differs from the target. Only try
swaps that place the required character into this position.

### Hint 3

Do not take a character away from a position that already matches the target.
This removes unnecessary branches without discarding an optimal sequence.
