# Rotation-Twin Words

## Description

You are given an array `words` of `n` strings. Every string has length `m`
and uses only lowercase English letters.

Two strings are twins if repeated use of this operation — as many or as few
times as you like, including none — can make them equal:

- Pick one of the two strings.
- Advance every letter of that string to the following letter of the
  alphabet, wrapping `z` around to `a`.

Count the index pairs `(i, j)` with `i < j` whose strings `words[i]` and
`words[j]` are twins. Return that count.

### Example 1

```text
Input: words = ["pilot","unqty","stone"]
Output: 1
Explanation: "pilot" and "unqty" are twins: advancing each letter of
"pilot" by 5 positions turns it into "unqty". Neither is related to
"stone", so only one pair counts.
```

### Example 2

```text
Input: words = ["log","mph","zao","mph"]
Output: 3
Explanation: Advancing "log" by 1 gives "mph", so "log" pairs with both
copies of "mph" at indices 1 and 3. The two "mph" strings are identical,
so they pair with each other as well (the operation zero times is
allowed). That makes 3 pairs; "zao" belongs to no pair.
```

### Example 3

```text
Input: words = ["abc","xyz","ba","cb"]
Output: 2
Explanation: Advancing "abc" by 23 reaches "xyz" (the letters wrap past
z), and advancing "ba" by 1 reaches "cb". The pairs are (0, 1) and
(2, 3).
```

### Constraints

- `1 <= n == words.length <= 10⁵`
- `1 <= m == words[i].length <= 10⁵`
- `1 <= n * m <= 10⁵`
- `words[i]` consists only of lowercase English letters.

## Hints

### Hint 1

Two words are twins exactly when the gaps between neighboring letters are
the same in both — shift each word so its first letter becomes 'a' and
compare the results.

### Hint 2

Build a hashable key per word from those letter-to-letter differences.

### Hint 3

Tally how many words fall into each key's class with a map, then combine
the counts.
