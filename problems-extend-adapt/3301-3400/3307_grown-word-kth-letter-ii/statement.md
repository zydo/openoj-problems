# The Grown Word's K-th Letter II

## Description

A word starts out as the single letter `"a"` and then grows through a list
of doubling steps. Every step is one of two kinds:

- Kind `0` appends an exact copy of the word to itself.
- Kind `1` appends a copy in which every letter has moved one position
  forward in the alphabet, with `'z'` wrapping around to `'a'`. Applying
  this step to `"c"` yields `"cd"`, and applying it to `"zb"` yields
  `"zbac"`.

You are given the step list `operations`, where `operations[i]` is the kind
of the ith step, and a position `k`. Return the letter that occupies
position `k` (counting from 1) once every step has been applied.

### Example 1

```text
Input: k = 4, operations = [1,0]
Output: "b"
Explanation: The word grows "a" -> "ab" -> "abab". Position 4 holds 'b'.
```

### Example 2

```text
Input: k = 7, operations = [0,1,1]
Output: "c"
Explanation: The word grows "a" -> "aa" -> "aabb" -> "aabbbbcc".
Position 7 holds 'c'.
```

### Example 3

```text
Input: k = 12, operations = [1,1,0,1]
Output: "d"
Explanation: The word grows "a" -> "ab" -> "abbc" -> "abbcabbc" ->
"abbcabbcbccdbccd". Position 12 holds 'd'.
```

### Constraints

- `1 <= k <= 10¹⁴`
- `1 <= operations.length <= 100`
- Each `operations[i]` is `0` or `1`.
- The steps are guaranteed to grow the word to at least `k` letters.

## Hints

### Hint 1

The final word is far too long to build. Instead, follow position `k`
backwards: the last step either left it alone or copied it down from an
earlier, cheaper position.

### Hint 2

A step only rewires position `k` when `k` lands in the half it appended;
then `k` maps to `k` minus half the final length, and a kind-`1` step
advances the letter one extra time. Count those advances.
