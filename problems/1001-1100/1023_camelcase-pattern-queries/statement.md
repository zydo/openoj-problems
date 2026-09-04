# CamelCase Pattern Queries

## Description

You are given a list of query words `queries` and a pattern string
`pattern`. A query word matches the pattern when the word can be produced
from `pattern` by inserting lowercase English letters at arbitrary
positions — possibly inserting none at all. Insertions are always
lowercase, so every uppercase letter of the query has to come from the
pattern itself, in order.

Return a boolean array `answer`, where `answer[i]` is whether
`queries[i]` matches `pattern`.

### Example 1

```text
Input: queries = ["NetworkPoint","NetworkFlow","netPoint","NodePath"], pattern = "NP"
Output: [true,false,false,true]
Explanation: "NetworkPoint" builds as "N" + "etwork" + "P" + "oint", and
"NodePath" as "N" + "ode" + "P" + "ath". "NetworkFlow" has no P among its
uppercase letters, and "netPoint" cannot supply the pattern's leading
uppercase N, since insertions are lowercase only.
```

### Example 2

```text
Input: queries = ["VersionControl","ViewCounter","vectorField"], pattern = "VC"
Output: [true,true,false]
Explanation: "VersionControl" is "V" + "ersion" + "C" + "ontrol" and
"ViewCounter" is "V" + "iew" + "C" + "ounter". In "vectorField" both
uppercase letters appear too late to serve the pattern's opening V.
```

### Example 3

```text
Input: queries = ["HomePage","Home","HomeScreenPage","ScreenHome"], pattern = "Home"
Output: [false,true,false,false]
Explanation: Only the exact word "Home" matches here: in "HomePage" the
extra uppercase P cannot be inserted, "HomeScreenPage" fails the same way
at its S, and "ScreenHome" starts with an uppercase S where the pattern
needs an H.
```

### Constraints

- `1 <= pattern.length, queries.length <= 100`
- `1 <= queries[i].length <= 100`
- `queries[i]` and `pattern` consist of English letters.

## Hints

### Hint 1

Handle one query word at a time: what property of a word makes it
impossible to reach from the pattern?

### Hint 2

Scan the word with a pointer into the pattern. A character equal to the
one waiting in the pattern advances both; a lowercase word character can
be skipped as an inserted letter; an uppercase word character that does
not match the waiting pattern character fails the whole word at once,
because insertions can never create an uppercase letter.
