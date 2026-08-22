# common — the shared vocabulary every problem builds on

One version of the common data types, owned by the problem set rather
than the judge. The contract is versioned: `VERSION.json` declares the
harness version, the types it provides, and their field layout — the
consumers below read it at startup (the CLI asserts compatibility) and
the live judge checks every bundle's declaration at assembly. Every
bundle's `problem.json` declares the common version it was authored
against as `"common_version": <n>` (required; the whole bank declares 1
today). A bundle may not target a version newer than the checkout's
`common/` — both the authoring CLI and the judge refuse to assemble it —
and an older declaration is served compatibly as long as the wire layout
above is unchanged. For every submission the judge assembles one complete
program:

    common/<language>  +  problems/<key>/provided/<language>  +  submission

and compiles or runs the whole (see openoj/TODO.md's history and
docs/CODECS.md). The types here are never editable in the editor — the
editor shows a generated comment block describing the shape instead.

Currently: `ListNode`, `TreeNode`, and the n-ary `Node`. Narrow,
few-problem types do NOT belong here — they are problem-owned and live
in the using problem's `provided/` directory.

Field layout is the wire contract the judge's codecs rely on:

| type           | fields                                        |
| -------------- | --------------------------------------------- |
| `ListNode`     | `val: int`, `next: ListNode \| null`          |
| `TreeNode`     | `val: int`, `left`, `right: TreeNode \| null` |
| `Node` (n-ary) | `val: int`, `children: list[Node]`            |

Every linked list and tree in the bank is integer-valued, so the item
type is fixed, not templated.
