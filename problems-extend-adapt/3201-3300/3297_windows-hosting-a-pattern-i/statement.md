# Windows That Can Host A Pattern I

## Description

You are given two lowercase strings, `word1` and `word2`.

Call a substring of `word1` a host if its letters can be reshuffled into
an arrangement that begins with `word2`. Reshuffling reorders characters
but never adds or drops any, so a host must simply contain every letter
`word2` needs, in at least the quantity `word2` needs.

Return how many substrings of `word1` are hosts. Substrings that occupy
different index ranges count separately even when they spell the same
text.

### Example 1

```text
Input: word1 = "acbbac", word2 = "abc"
Output: 8
Explanation: Each of the 8 windows holding at least one a, one b and one
c is a host — for instance "acb" reshuffles into "abc" itself.
```

### Example 2

```text
Input: word1 = "aab", word2 = "ab"
Output: 2
Explanation: The whole string "aab" rearranges to "aba", which starts
with "ab", and the window "ab" at indices 1..2 is already in shape.
```

### Example 3

```text
Input: word1 = "xyzw", word2 = "zz"
Output: 0
Explanation: `word1` holds no z at all, so no window can supply the two
that `word2` demands.
```

### Constraints

- `1 <= word1.length <= 10⁵`
- `1 <= word2.length <= 10⁴`
- Both strings consist only of lowercase English letters.

## Hints

### Hint 1

Rearranging never changes a letter count, so a window is a host exactly
when, for every letter, the window holds at least as many copies as
`word2` does.

### Hint 2

That coverage is monotone: grow a window and it stays a host. Sweep one
right end across `word1`, keep the letter counts of the current window,
and for each right end find the shortest covering left end — every start
to the left of it hosts too, and all of them count at once.
