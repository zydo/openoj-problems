# common — the shared vocabulary every problem builds on

One version of the common data types, owned by the problem set rather
than the judge. The contract is versioned: `VERSION.json` declares the
harness version, the types it provides, and their field layout — the
consumers below read it at startup (the CLI asserts compatibility, and
the API records the version with every job). A bump here means every
bundle's `problem.json` may declare `"common": <n>` (default: the
version present in the checkout; anything older than the checkout's is
served compatibly as long as the wire layout above is unchanged). For every submission the judge assembles one complete
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
