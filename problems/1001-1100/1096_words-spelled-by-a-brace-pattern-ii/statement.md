# Words Spelled by a Brace Pattern II

## Description

A brace pattern is a string built from lowercase letters, `{`, `}`, and
`,`, and it stands for a whole set of words. Write `S(e)` for the set of
words an expression `e` stands for. Three rules build it up:

- A single lowercase letter `x` stands for the one-word set `S(x) =
{x}`.
- A comma-separated group `{e1,e2,...,ek}` with at least two pieces
  stands for the union of its pieces: every word any piece stands for,
  each word counted once no matter how many pieces produce it.
- Two expressions written side by side stand for every concatenation of
  a word of the first with a word of the second, in that order:
  `S(e1e2) = {uv for u in S(e1), v in S(e2)}`.

A few illustrations:

- `S("{p,q,r}") = {"p","q","r"}`
- `S("{{p,q},{q,r}}") = {"p","q","r"}` — both pieces contribute `q`,
  but the union keeps a single copy.
- `S("{p,q}{r,s}") = {"pr","ps","qr","qs"}`

Given a pattern, return the sorted list of every word it stands for.

### Example 1

```text
Input: expression = "{w,x}y{z,{p,q}}"
Output: ["wyp","wyq","wyz","xyp","xyq","xyz"]
Explanation: The leading group picks w or x, the fixed y follows, and
the trailing group offers z or the nested pair p, q — six combinations
in all.
```

### Example 2

```text
Input: expression = "h{i,{i,j}}k"
Output: ["hik","hjk"]
Explanation: The letter i is reachable through either branch of the
group, yet hik appears only once in the answer.
```

### Example 3

```text
Input: expression = "a{{b,c},{d,e}}f"
Output: ["abf","acf","adf","aef"]
Explanation: The outer group's two pieces are themselves groups; their
union has four letters, each glued between the fixed a and f.
```

### Constraints

- `1 <= expression.length <= 60`
- `expression[i]` is `'{'`, `'}'`, `','`, or a lowercase English
  letter.
- The given expression stands for a set of words under the grammar
  above.

## Hints

### Hint 1

Concatenation binds tighter than the comma union, which suggests a
stack. Keep the words of the current run in one set; an opening brace
parks that set as a pending prefix and starts a group, and a comma folds
the current run into the group's union slot before a fresh run begins.

### Hint 2

A closing brace unites the last run with the group's union slot,
concatenates the result onto the parked prefix, and the group collapses
to a single set again. Working with sets the whole way gives the
deduplication for free — sort once at the very end.
