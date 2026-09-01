# Fewest Insertions for Twin-Close Brackets

## Description

A string over `(` and `)` is _twin-closed_ when every opener is shut by a
two-character closer: each `(` may be matched only by a run of two
consecutive `)` characters appearing somewhere after it. Under this rule
`())` and `(())())))` are fine, while `()))` and `(()))` are not — in the
latter two, some `(` ends up with a single `)` or none at all to close it.

Characters may be inserted at any positions of the given string `s`. Return
the fewest insertions of `(` and `)` characters that can make `s`
twin-closed.

### Example 1

```text
Input: s = "()())"
Output: 1
Explanation: The second character ')' arrives without a partner. Adding
one ')' immediately after it closes the first '(', and the later '(' is
already shut by the final '))'.
```

### Example 2

```text
Input: s = "(((("
Output: 8
Explanation: Each of the four openers still needs its own two-character
closer, so eight ')' characters must be appended.
```

### Example 3

```text
Input: s = "))(("
Output: 5
Explanation: The leading '))' pair has no opener to belong to, so one '('
must be inserted before it. The two trailing '(' each still need a full
'))' appended, for 1 + 2 + 2 = 5 insertions.
```

### Constraints

- `1 <= s.length <= 10⁵`
- `s` consists of `(` and `)` only.

## Hints

### Hint 1

Sweep the string once, remembering how many openers are still owed a
closing pair. When a `)` shows up and the next character is not another
`)`, imagine the missing partner inserted on the spot and charge one
insertion.

### Hint 2

Whenever a complete `))` shows up with no opener owed, that pair is
missing its `(` — charge one more insertion. After the sweep, every
opener still owed costs two insertions, so add twice the leftover count.
