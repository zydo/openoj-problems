# Solutions — File Tree

## Directory Tree with Hash Children

The entire store is a single recursive tree. Each node is a directory holding
a map from child name to child node; a file is a leaf whose payload is the text
written so far, so one namespace covers files and subdirectories alike and no
separate registry is needed. The `FileTree` object itself keeps nothing but
the root.

Everything else is path walking. Cutting a path at each `/` and discarding
empty pieces turns `/x/y/note` into the pieces `x`, `y`, `note`; descending
one map lookup per piece resolves the path in time proportional to its
length. `mkdir` performs the insertion flavour of the same walk — when a piece
has no child by that name, an empty directory node goes in, which is also how
the intermediate levels appear. Writing a file walks to the parent (which the
input guarantees exists) and appends to the buffer, placing the first text
there if the file was just born.

`ls` makes one walk and then branches on the node kind: reached by a file
path it answers with the file's own name, reached by a directory path with
the names of its children. Ordering differs by port — the Python reference
keeps children in plain dicts and sorts the names on the way out, while the
Java port stores them in a `TreeMap` so `keySet()` is already lexicographic.
Bounds are tiny (at most 300 calls, paths of at most 100 characters, 50
characters per write), so the linear walks dominate and never strain.

**Complexity:** `O(P)` per `mkdir`/`appendToFile`/`readFile` call for a path
of `P` pieces; `ls` additionally pays `O(m log m)` to order `m` children
(`O(m)` with a sorted map); `O(N)` space for the tree.
