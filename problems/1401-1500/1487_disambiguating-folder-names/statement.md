# Disambiguating Folder Names

## Description

Folder creation requests arrive one at a time as the string array
`names`: request `i` asks for a folder called `names[i]`.

No two folders may share a name. When a request names a folder that
already exists, the system rewrites it by appending `(k)` — choosing the
smallest positive integer `k` that makes the rewritten name unused — and
creates the folder under that rewritten name instead.

Return the array of final names, where entry `i` is the name the system
actually used for request `i`.

### Example 1

```text
Input: names = ["docs","docs","docs(2)","docs"]
Output: ["docs","docs(1)","docs(2)","docs(3)"]
Explanation: The literal "docs(2)" is still free when it is requested,
so it is taken as is; the final request finds "docs", "docs(1)", and
"docs(2)" all occupied and settles on "docs(3)".
```

### Example 2

```text
Input: names = ["note","note","note(1)"]
Output: ["note","note(1)","note(1)(1)"]
Explanation: The second request becomes "note(1)". The third request
names "note(1)" too — now occupied — so its base is "note(1)" and the
smallest free suffix yields "note(1)(1)".
```

### Example 3

```text
Input: names = ["log","log","log","log"]
Output: ["log","log(1)","log(2)","log(3)"]
Explanation: Every repeat of the same request appends the next free
suffix.
```

### Constraints

- `1 <= names.length <= 5 * 10^4`
- `1 <= names[i].length <= 20`
- `names[i]` is made of lowercase English letters, digits, and/or round
  brackets.

## Hints

### Hint 1

Track every name already handed out, and remember for each base string
the smallest suffix number that has not been ruled out yet.

### Hint 2

A request whose name has never been used needs no suffix at all.

### Hint 3

For a colliding request, probe suffixes from the remembered point
onward; when a suffixed name is assigned, that name's own base memory
should jump past the number just consumed.
