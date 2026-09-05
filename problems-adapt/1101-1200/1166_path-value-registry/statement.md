# Path Value Registry

## Description

Build a registry that stores an integer value under a slash-separated path
and controls which paths may be created.

A valid path is a sequence of one or more segments, where every segment is a
`/` followed by one or more lowercase English letters. So `"/archive/2024"`
is a valid path, while the empty string and a bare `"/"` are not. A new path
may only be registered when every directory above it has already been
registered.

Implement the `PathRegistry` class:

- `PathRegistry()` initializes the empty registry.
- `boolean addPath(string path, int value)` registers `path` with the given
  `value` and returns `true`, or returns `false` without changing anything
  when `path` is already registered or its parent path has not been
  registered yet.
- `int get(string path)` returns the value registered under `path`, or `-1`
  when nothing is registered there.

### Example 1

```text
Input:
["PathRegistry","addPath","get"]
[[],["/docs",5],["/docs"]]
Output: [null,true,5]
Explanation: The path "/docs" starts from the root, so no parent is needed.
It registers successfully and later reads back as 5.
```

### Example 2

```text
Input:
["PathRegistry","addPath","addPath","get","addPath","get","addPath"]
[[],["/app",3],["/app/main",8],["/app/main"],["/log/old",2],["/log"],["/app",9]]
Output: [null,true,true,8,false,-1,false]
Explanation: "/app" registers first, which then lets its child "/app/main"
register and read back as 8. "/log/old" is rejected because its parent
"/log" was never registered, and reading "/log" yields -1. Registering
"/app" again is rejected because it already exists.
```

### Constraints

- `2 <= path.length <= 100`
- `1 <= value <= 10⁹`
- Every `path` is valid and built from lowercase English letters and `/`.
- At most `10⁴` calls total are made to `addPath` and `get`.

## Hints

### Hint 1

Picture the registered paths as a tree hanging off the root.

### Hint 2

Storing the full path string as a dictionary key is enough — the parent of a
path is simply the prefix before its last slash.
