# The Tidiest Substring With K Ones

## Description

You are given a binary string `s` and a positive integer `k`. Call a
substring of `s` _tidy_ when it contains exactly `k` ones.

Among all tidy substrings, let `len` be the length of the shortest one.
Return the tidy substring of length `len` that is lexicographically
smallest. If `s` contains no tidy substring at all, return the empty
string.

For two strings of equal length, the lexicographically smaller one is the
string holding the strictly smaller character at the first position where
the two differ — `"1011"` beats `"1101"` because they first diverge at the
second character, where `0 < 1`.

### Example 1

```text
Input: s = "010010111", k = 3
Output: "111"
Explanation: The tidy substrings include "100101" (ones at positions
1, 4, 6 of the window), "1011", and "111". The last one uses the three
consecutive ones at the end and is only 3 long — nothing shorter can
hold 3 ones, so "111" is the answer.
```

### Example 2

```text
Input: s = "1101011", k = 3
Output: "1011"
Explanation: Two tidy substrings tie for the shortest length of 4:
"1101" (positions 0-3) and "1011" (positions 3-6). Comparing them
character by character, "1011" has the smaller second character, so
"1011" is returned.
```

### Example 3

```text
Input: s = "1001", k = 3
Output: ""
Explanation: The string holds only two ones in total, so no substring
can ever contain exactly 3. The empty string comes back.
```

### Constraints

- `1 <= s.length <= 100`
- `1 <= k <= s.length`

## Hints

### Hint 1

Fix the left end of the window. Extending to the right until the window
first accumulates exactly `k` ones produces the only shortest tidy
candidate starting there — stopping earlier leaves too few ones, and
pushing further only lengthens the string.

### Hint 2

Keep the best candidate seen: prefer the shorter one, and on a tie prefer
the lexicographically smaller. Every left end contributes at most one
candidate, so one pass over all left ends settles it.
