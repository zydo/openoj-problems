# Tidy The Path

## Description

You are given `path`, an absolute path in a Unix-style file system. It
always starts with a slash. Reduce it to its tidiest canonical form.

Three conventions of such a file system drive the cleanup:

- A lone `'.'` names the directory you are already in and contributes
  nothing.
- A `'..'` names the parent directory and cancels the name before it.
- A run of several slashes counts as one, and any other run of periods —
  `'...'`, `'....'` and the like — is just an ordinary directory name.

The canonical form you return must begin with one slash, use exactly
one slash between surviving names, and never end in a slash unless the
whole path is the root. No `'.'` or `'..'` may remain; a `'..'` that
finds nothing above it, at the root, simply disappears.

### Example 1

```text
Input: path = "/projects/../notes//"
Output: "/notes"
Explanation: The double period cancels `projects`, and the doubled
trailing slash collapses to nothing.
```

### Example 2

```text
Input: path = "/docs/./_drafts/todo/.."
Output: "/docs/_drafts"
Explanation: The lone period is dropped, and `todo` is undone by the
`..` after it.
```

### Example 3

```text
Input: path = "/..."
Output: "/..."
Explanation: Three periods are an ordinary name, not a navigation
directive, so the path is already canonical.
```

### Example 4

```text
Input: path = "/up/../../down///deep/"
Output: "/down/deep"
Explanation: The first `..` removes `up`; the second rises above the
root and has no effect.
```

### Constraints

- `1 <= path.length <= 3000`
- `path` consists of English letters, digits, periods, slashes, or
  underscores.
- `path` is a valid absolute path in the sense above.
