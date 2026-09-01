# Prune Nested Folders

## Description

A list of absolute paths names the folders of a file system. A path is built
from one or more pieces, each piece being a `'/'` followed by one or more
lowercase letters — `"/docs"` and `"/docs/specs"` are well-formed, while an
empty string and `"/"` are not. Every path in the list is distinct.

One folder sits inside another when its path begins with the other's path
followed by one more `'/'`: `"/x/y"` lives inside `"/x"`, but `"/xy"` does
not live inside `"/x"`. Clear out every folder from the list that lives
inside some other folder on the list, and return what remains. The leftover
paths may be reported in any order.

### Example 1

```text
Input: folder = ["/x/y","/x","/z/w","/z/w/v"]
Output: ["/x","/z/w"]
Explanation: "/x/y" sits inside "/x", and "/z/w/v" sits inside "/z/w";
removing both leaves "/x" and "/z/w".
```

### Example 2

```text
Input: folder = ["/ab","/a/b","/a"]
Output: ["/a","/ab"]
Explanation: "/a/b" is dropped because it lives inside "/a". "/ab" merely
starts with the same two characters as "/a" but is a separate top-level
folder, so it stays.
```

### Example 3

```text
Input: folder = ["/p","/p/q","/p/q/r"]
Output: ["/p"]
Explanation: The whole chain hangs under "/p", so only "/p" survives.
```

### Constraints

- `1 <= folder.length <= 4 * 10⁴`
- `2 <= folder[i].length <= 100`
- `folder[i]` contains only lowercase letters and `'/'`.
- Every `folder[i]` begins with `'/'`.
- All folder paths are unique.

## Hints

### Hint 1

Put the paths in lexicographic order first — a parent then lands directly
before everything nested inside it.

### Hint 2

With the paths sorted, a path needs to be compared against only the most
recent survivor: nothing kept earlier could possibly contain it.

### Hint 3

When comparing, append a `'/'` to the surviving path before testing the
prefix — that single character is what tells a genuine child apart from a
sibling whose name merely shares the same leading letters.
