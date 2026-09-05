# Reachable by Replacing With the Sum

## Description

An array `arr` of `n` integers starts as `n` copies of `1`. One move:

- compute `x`, the sum of everything currently in `arr`;
- pick any index `0 <= i < n` and set `arr[i] = x`.

Moves may be repeated any number of times.

Given an array `target` of `n` integers, return `true` if some sequence of
moves turns the starting array into `target`, and `false` otherwise.

### Example 1

```text
Input: target = [3,5,9]
Output: true
Explanation: Start with arr = [1, 1, 1]
[1, 1, 1], sum 3, write index 0
[3, 1, 1], sum 5, write index 1
[3, 5, 1], sum 9, write index 2
[3, 5, 9] Done
```

### Example 2

```text
Input: target = [2,1,1,1]
Output: false
Explanation: Four ones sum to 4, so the very first move writes a value of
at least 4, and sums only grow from there. No move can ever produce a 2,
and a 2 is not one of the starting ones.
```

### Example 3

```text
Input: target = [3,7]
Output: true
Explanation: [1,1] -> [2,1] -> [3,1] -> [3,4] -> [3,7], writing index 0,
index 0, index 1, then index 1 again.
```

### Constraints

- `n == target.length`
- `1 <= n <= 5 * 10^4`
- `1 <= target[i] <= 10^9`

## Hints

### Hint 1

Each move strictly raises the total sum, so the largest entry of any
reachable state is always the one written last. Instead of guessing which
index to write, run the process backwards.

### Hint 2

Undoing a write means taking the current maximum and giving back the sum of
everything else. Repeat the undo until the array is all ones — or until it
cannot be undone.

### Hint 3

Values climb toward `10^9`, and one entry may need undoing many times in a
row; a modulo collapses that whole run of undos into a single step.
