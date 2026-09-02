# Smallest Anagram Tile

## Description

You are given a string `s` with a guarantee: it was assembled by
laying down several pieces one after another, every piece a
reshuffling of the same base string `t`. Two reshufflings may spell
different words, but both use exactly the same letters with the same
repetitions — "aab", "aba", and "baa" all reshuffle one another.

Report the shortest length `t` can possibly have.

### Example 1

```text
Input: s = "silentenlisttinsel"
Output: 6
Explanation: Each of the three pieces — "silent", "enlist",
"tinsel" — rearranges the letters of "listen", so `t` of length 6
works, and no shorter base does.
```

### Example 2

```text
Input: s = "acttac"
Output: 3
Explanation: The pieces "act" and "tac" both reshuffle `t = "cat"`;
no base of length 1 or 2 tiles the whole string.
```

### Example 3

```text
Input: s = "babaab"
Output: 2
Explanation: The pieces "ba", "ba", "ab" all reshuffle `t = "ab"`.
```

### Example 4

```text
Input: s = "zzzz"
Output: 1
Explanation: Four copies of `t = "z"` were laid down.
```

### Constraints

- `1 <= s.length <= 10^5`
- `s` consists only of lowercase English letters.

### Hint 1

If pieces of length `L` tile `s`, then `L` must divide the string's
length — start your search among the divisors.

### Hint 2

Try each candidate divisor in increasing order and confirm it with
letter counts alone: every chunk of that length must hold exactly the
same multiset of letters.
