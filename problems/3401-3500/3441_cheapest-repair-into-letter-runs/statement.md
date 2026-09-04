# Cheapest Repair Into Letter Runs

## Description

A string is tidy when every letter it contains shows up as a run of at
least 3 consecutive equal characters. For instance, `"aaabbb"` and
`"aaaaccc"` are tidy, while `"aabbb"` and `"ccccd"` are not — both leave a
run shorter than 3.

One operation picks an index `i` (`0 <= i < n`) and steps the character
there one position across the alphabet, either:

- one letter backward, toward `'a'` (allowed unless `caption[i] == 'a'`),
- or one letter forward, toward `'z'` (allowed unless `caption[i] == 'z'`).

Given a string `caption` of length `n`, apply operations until the string
is tidy, spending as few operations as possible, and return the repaired
string. Among all tidy strings reachable at that minimum cost, return the
lexicographically smallest. If no number of operations can ever tidy the
string, return an empty string `""`.

### Example 1

```text
Input: caption = "abab"
Output: "aaaa"
Explanation: Two operations are needed at minimum: changing caption[1] and
caption[3] from 'b' to 'a' produces "aaaa". The alternative "bbbb" also
costs two operations, but "aaaa" is lexicographically smaller.
```

### Example 2

```text
Input: caption = "aabbcc"
Output: "aaaccc"
Explanation: Changing caption[2] to 'a' and caption[3] to 'c' yields
"aaaccc" after exactly 2 operations, and no tidy string costs less.
```

### Example 3

```text
Input: caption = "ab"
Output: ""
Explanation: A string of length 2 can never hold a run of 3 equal
characters, so no sequence of operations helps.
```

### Constraints

- `1 <= caption.length <= 5 * 10⁴`
- `caption` consists only of lowercase English letters.

## Hints

### Hint 1

Work position by position with a dynamic program whose state remembers the
character of the run just behind the current index once that run is
finished; a fresh run always consumes three positions at a stroke.

### Hint 2

Reconstruct the answer greedily from the left: at every index take the
smallest letter that still lets the remaining positions be finished within
the exact cost the table promised.
