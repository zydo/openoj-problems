# common — the shared vocabulary every problem builds on

One version of the common data types, owned by the problem set rather
than the judge. The contract is versioned: `VERSION.json` declares the
harness version, the types it provides, and their field layout — the
consumers below read it at startup (the CLI asserts compatibility) and
the live judge checks every bundle's declaration at assembly. Every
bundle's `problem.json` declares the common version it was authored
against as `"common_version": <n>` (required; bundles may declare 1 or
2 — v2 only ADDS types, so a v1 bundle assembles identically under a
v2 checkout). A bundle may not target a version newer than the
checkout's `common/` — both the authoring CLI and the judge refuse to
assemble it. For every submission the judge assembles one complete
program:

    common/<language>  +  problems/<key>/provided/<language>  +  submission

and compiles or runs the whole (see openoj/TODO.md's history and
docs/CODECS.md). The types here are never editable in the editor — the
editor shows a generated comment block describing the shape instead.

Currently: `ListNode`, the binary `TreeNode`, the n-ary `Node`,
`QuadNode`, `NestedInteger`, `NodeWithNext`, and `MultiListNode`. Each
v2 addition serves a whole class of problems (quad trees; nested-list
integers; next/parent-connected trees; multilevel lists). Narrow,
few-problem types do NOT belong here — they are problem-owned and live
in the using problem's `provided/` directory (graph nodes, random-
pointer nodes, struct records: each is a single problem's shape).

Field layout is the wire contract the judge's codecs rely on (see
`VERSION.json` for the authoritative table):

| type            | fields                                                         |
| --------------- | -------------------------------------------------------------- |
| `ListNode`      | `val: int`, `next: ListNode \| null`                           |
| `TreeNode`      | `val: int`, `left`, `right: TreeNode \| null`                  |
| `Node` (n-ary)  | `val: int`, `children: list[Node]`                             |
| `QuadNode`      | `val: bool`, `isLeaf: bool`, four `QuadNode \| null` quadrants |
| `NestedInteger` | holds exactly one of `int` or `list[NestedInteger]`            |
| `NodeWithNext`  | `val: int`, `left`, `right`, `next`, `parent: … \| null`       |
| `MultiListNode` | `val: int`, `prev`, `next`, `child: … \| null`                 |

`NestedInteger` carries the LeetCode API in every language
(`isInteger`/`getInteger`/`setInteger`/`add`/`getList`; the Rust shape
is the `Integer | List` enum — landing with the rust executor port).
`NodeWithNext.next` is the level link (116/117) and `.parent` the
in-order back-pointer (510); the 426 flatten reuses the same class with
`left` as prev and `right` as next. Reuses without a new class:
`circular_list` and `alias_list` ride `ListNode`, and `doubly_circular`
rides `NodeWithNext`.

Every linked list and tree in the bank is integer-valued, so the item
type is fixed, not templated. Graph nodes, random-pointer nodes, and
struct records decode into the using problem's own `provided/` class —
the judge builds them reflectively from the case data, so the class the
submission declares is the class that gets constructed.
