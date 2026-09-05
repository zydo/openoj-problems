# Words From Letter Options

## Description

The string `s` is a compact recipe for a whole list of words. Every
position of the recipe offers one or more letter choices:

- A single option is written as the bare letter itself.
- Several options are wrapped in curly braces and separated by commas:
  `"{a,b,c}"` stands for the choices `"a"`, `"b"`, and `"c"`.

As an illustration, `s = "a{b,c}"` fixes the first letter as `'a'` and
leaves the second as either `'b'` or `'c'`, so the list behind it is
`["ab", "ac"]`.

Build every word the recipe can produce — one choice per position — and
return them all in lexicographically sorted order.

### Example 1

```text
Input: s = "{x,y}m{n,o}"
Output: ["xmn","xmo","ymn","ymo"]
```

### Example 2

```text
Input: s = "{z,y}q{a,b}"
Output: ["yqa","yqb","zqa","zqb"]
Explanation: The first group lists z before y, but the returned words
are still handed back sorted, so the y-words come first.
```

### Example 3

```text
Input: s = "solo"
Output: ["solo"]
Explanation: With no brace group anywhere, the recipe stands for
exactly one word.
```

### Constraints

- `1 <= s.length <= 50`
- `s` consists of curly brackets `'{}'`, commas `','`, and lowercase
  English letters.
- `s` is guaranteed to be a valid input.
- Curly brackets never nest.
- Within any one brace group, all the letters are different.

## Hints

### Hint 1

Every finished word has the same length — one letter per recipe
position. Walk the positions from left to right, extending a partial
word by each available choice.

### Hint 2

A bare position contributes its only letter, while a brace group lets
the search fan out over all of its options; this backtracking enumerates
every combination, and one final sort fixes the required order.
