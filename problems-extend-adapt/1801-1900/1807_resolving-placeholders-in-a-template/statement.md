# Resolving Placeholders in a Template

## Description

The string `s` is a small template built from lowercase English letters
and bracket pairs: each `(...)` wraps a non-empty key. The pairs never
nest, and every opening bracket has its closing partner — for instance
`(name)is(age)yearsold` carries two placeholders, wrapping the keys
`name` and `age`.

A table `knowledge` pairs some keys with their substitutions: each
`knowledge[i] = [key_i, value_i]` says that `key_i` resolves to
`value_i`, and no key appears in the table twice. Resolve every
placeholder of the template:

- a bracket pair wrapping a key that the table knows is replaced by that
  key's value;
- a bracket pair wrapping an unknown key is replaced by a single question
  mark `?`.

Characters outside a bracket pair are copied through untouched. Return
the fully resolved string.

### Example 1

```text
Input: s = "(lang)rocks(and)(lang)too",
knowledge = [["lang","rust"],["and","go"]]
Output: "rustrocksgorusttoo"
Explanation: Both placeholders resolve through the table, and the same
key may appear several times — the second (lang) substitutes exactly
like the first.
```

### Example 2

```text
Input: s = "(x)plus(y)makes(z)",
knowledge = [["x","ten"],["y","two"],["z","twelve"]]
Output: "tenplustwomakestwelve"
Explanation: Each of the three placeholders takes its table value; the
words between them are copied unchanged.
```

### Example 3

```text
Input: s = "(mystery)box", knowledge = []
Output: "?box"
Explanation: The table is empty, so the placeholder resolves to "?".
```

### Example 4

```text
Input: s = "plain", knowledge = [["plain","nope"]]
Output: "plain"
Explanation: With no bracket pair anywhere, the template is copied
verbatim and the table never comes into play.
```

### Constraints

- `1 <= s.length <= 10⁵`
- `0 <= knowledge.length <= 10⁵`
- `knowledge[i].length == 2`
- `1 <= key_i.length, value_i.length <= 10`
- `s` consists of lowercase English letters and the round brackets
  `'('` and `')'`.
- Every opening bracket `'('` in `s` has a matching closing bracket
  `')'`.
- The key inside each bracket pair is non-empty.
- No bracket pair in `s` is nested.
- `key_i` and `value_i` consist of lowercase English letters.
- Each `key_i` in `knowledge` is unique.

## Hints

### Hint 1

Load the table into a hash map once up front; every lookup afterwards is
constant time, and an absent key falls out of the lookup naturally.

### Hint 2

Sweep the template once. Copy ordinary letters, and on an opening bracket
jump straight to its closing partner — with nesting ruled out that is
simply the next `')'` — then emit the looked-up value or `"?"` and resume
after the pair.

### Hint 3

Values are pure letters, so a substitution can never contain a bracket:
emitted text is final and never needs re-examining, which is what keeps
the single pass honest.
