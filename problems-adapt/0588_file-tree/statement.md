# File Tree

## Description

Design a data structure that keeps a tree of directories and files in memory,
addressed by absolute paths.

Implement the `FileTree` class:

- `FileTree()` initializes an empty tree containing only the root directory
  `/`.
- `List<String> ls(String path)` lists one entry. When `path` names a file,
  the answer is a list holding just that file's name; when it names a
  directory, the answer is the names of the files and subdirectories directly
  inside it, in lexicographic order.
- `void mkdir(String path)` creates the directory at `path`. Intermediate
  directories along the path that do not exist yet are created too.
- `void appendToFile(String filePath, String content)` adds `content` to the
  file at `filePath`, creating the file if it does not exist yet; when the
  file already exists the text is appended to what is there.
- `String readFile(String filePath)` returns the full text stored in the file
  at `filePath`.

### Example 1

```text
Input:
["FileTree", "ls", "mkdir", "appendToFile", "ls", "ls", "readFile"]
[[], ["/"], ["/x/y"], ["/x/y/note", "one"], ["/x"], ["/x/y/note"], ["/x/y/note"]]
Output: [null, [], null, null, ["y"], ["note"], "one"]
Explanation:
FileTree tree = new FileTree();
tree.ls("/");                      // the root is empty, so []
tree.mkdir("/x/y");                // creates /x on the way to /x/y
tree.appendToFile("/x/y/note", "one");
tree.ls("/x");                     // ["y"]
tree.ls("/x/y/note");              // the path names a file, so ["note"]
tree.readFile("/x/y/note");        // "one"
```

### Example 2

```text
Input:
["FileTree", "mkdir", "appendToFile", "appendToFile", "ls", "appendToFile", "ls", "readFile"]
[[], ["/top"], ["/top/b", "z"], ["/top/a", "m"], ["/top"], ["/top/b", "w"], ["/top/b"], ["/top/b"]]
Output: [null, null, null, null, ["a", "b"], null, ["b"], "zw"]
Explanation:
tree.mkdir("/top");
tree.appendToFile("/top/b", "z");
tree.appendToFile("/top/a", "m");
tree.ls("/top");                   // ["a", "b"] — names come back sorted
tree.appendToFile("/top/b", "w");  // appends, the file now holds "zw"
tree.ls("/top/b");                 // ["b"]
tree.readFile("/top/b");           // "zw"
```

### Example 3

```text
Input:
["FileTree", "mkdir", "ls", "ls"]
[[], ["/p/q/r/s"], ["/p/q"], ["/p/q/r/s"]]
Output: [null, null, ["r"], []]
Explanation:
tree.mkdir("/p/q/r/s");            // every missing level is created
tree.ls("/p/q");                   // ["r"]
tree.ls("/p/q/r/s");               // a fresh directory lists as empty
```

### Constraints

- `1 <= path.length, filePath.length <= 100`
- `path` and `filePath` are absolute: they start with `/` and do not end with
  `/` unless the whole path is just `/`.
- Directory and file names consist of lowercase letters only, and one name
  never appears twice in the same directory.
- Every call is valid: no call lists, reads, or creates a path that does not
  fit the tree built so far, and the parent of any written file exists.
- `1 <= content.length <= 50`
- At most `300` calls in total to `ls`, `mkdir`, `appendToFile`, and
  `readFile`.

### Follow-up

Can each operation finish in time proportional to the number of components in
its path, with no traversal or sorting of unrelated parts of the tree?

## Hints

### Hint 1

The store is one tree: `/` is the root, each directory a node, each file a
leaf. A directory node needs nothing beyond a name-to-child mapping.

### Hint 2

Handle a path by cutting it at each `/` (empty pieces dropped) and stepping
down one child lookup per piece. `mkdir` reuses the same descent, inserting an
empty node wherever a piece is missing.

### Hint 3

Mark each node as file or directory — the file's text buffer can double as the
marker. `ls` then splits in two: a file answers with its own name, a directory
with its children's names, which stay sorted if the child map is a sorted one.
