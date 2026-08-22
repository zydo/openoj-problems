# openoj-problems format

A problem-set repository for [OpenOJ](https://github.com/zydo/openoj). Each
problem is one directory under `problems/`, named `<zero-padded id>_<slug>`,
inside an inclusive id-range shard directory of 100 problems
(`<lo>-<hi>`, e.g. `0001-0100` for ids 1-100) — the directory name is
the single source of the problem key:

```text
problems/
└── 0001-0100/           inclusive id-range shards of 100
    └── 0001_pair-sum/
        ├── problem.json     machine data: metadata, invocation, limits
        ├── cases.json       testcase corpus ({public, hidden} display grouping)
        ├── statement.md     the human-readable problem statement
        ├── starter.py       generated — never handcrafted
        ├── starter.java     generated
        ├── starter.cpp      generated
        ├── starter.go       generated
        ├── starter.rust     generated
        ├── starter.js
        ├── starter.ts
        ├── solution.py      authored — must match the starter signature and pass
        ├── solution.java    every case in cases.json
        └── ...
```

Starters are always generated from `problem.json` by
`scripts/gen_starters.py`. Editors handwrite only non-derived content: the
statement, the invocation schema, the cases, and the solution bodies.
Solutions are authored on top of the generated starters.

## problem.json

```json
{
    "schema_version": 1,
    "id": 1,
    "slug": "two-sum",
    "title": "Two Sum",
    "difficulty": "H1",
    "tags": ["Array", "Hash Table"],
    "invocation": { "...": "see below" },
    "limits": { "time_ms": 1500, "memory_mb": 256, "output_kb": 64 }
}
```

- `id` matches the numeric directory prefix; `slug` and `title` match the
  directory and the statement's `# Title` heading.
- `difficulty` is one of `H1`–`H5`; `tags` is a non-empty array of strings.
- `invocation.type` is `function` or `sql`.

### Function invocation

LeetCode-style, with a neutral `value_type` tree shared by every language:

```json
{
    "type": "function",
    "class_name": "Solution",
    "method": "twoSum",
    "parameters": [
        {
            "name": "nums",
            "codec": "json",
            "value_type": { "kind": "array", "items": { "kind": "integer", "bits": 32 } }
        },
        { "name": "target", "codec": "json", "value_type": { "kind": "integer", "bits": 32 } }
    ],
    "return_codec": "json",
    "return_type": { "kind": "array", "items": { "kind": "integer", "bits": 32 } },
    "entrypoints": { "go": "twoSum", "rust": "two_sum", "typescript": "twoSum" },
    "comparison": "exact"
}
```

- `kind` is one of `integer` (`bits` 32 or 64), `number` (finite float),
  `boolean`, `string` (UTF-8), `array` (with `items`), `linked_list`,
  `binary_tree` (each with integer `items`).
- `entrypoints` override the entry name per language (Go/Rust/TypeScript
  follow their casing conventions; Python/Java/C++/JavaScript use `method`).
- `comparison` is `exact` (default), `sorted`, `multiset`, or `set`. Anything
  but `exact` must be justified by the statement ("in any order").

### SQL invocation

```json
{
    "type": "sql",
    "parameters": [{ "name": "dataset", "codec": "sql_setup" }],
    "return_codec": "rows",
    "comparison": "set"
}
```

The table DDL lives in `invocation.sql.schema`; each case's `dataset` value
seeds the tables with `INSERT` statements.

## cases.json

```json
{
    "public": [{ "input": [[2, 7, 11, 15], 9], "expected": [0, 1] }],
    "hidden": [{ "input": [[3, 2, 4], 6], "expected": [1, 2] }]
}
```

`input` is the positional argument array (design problems use an
`{"actions": [...], "params": [...]}` sequence instead). `public` cases are
the statement's examples and are shown in the problem pane; `hidden` cases
are everything else. **The grouping is display-only — all case data is public
by design.** This is a self-hosted, self-motivated learning framework:
nothing is secret. Every `expected` value must be produced by running a
reference solution, never hand-computed.

## statement.md

Pure prose, one required grammar:

````text
# <Title>                       required — no numbering
## Description                  required
### Example N                   required (N counts from 1), a ```text block
### Constraints                 required, bullet list (#### Constraint N optional)
### Follow up                   optional
## Hints                        optional
### Hint 1, ### Hint 2, …       hints, when present, use this form
````

The `# <Title>` heading must equal `problem.json`'s `title`. Example inputs
must correspond one-to-one, in order, to the `public` cases. SQL problems
state their contract as the schema DDL, so `### Constraints` is optional for
them and required for every function problem.

## Starters and solutions

`scripts/gen_starters.py` writes `starter.*` from `problem.json`; the file
extension selects the language (`py`, `js`, `ts`, `java`, `cpp`, `go`,
`rust`, `sql`). The set of `starter.*` files defines the
languages the problem offers. Never edit a starter by hand — change
`problem.json` and regenerate.

Every problem must carry `solution.<ext>` for **every** `starter.<ext>`. A
solution matches its starter's signature exactly and must pass every case in
`cases.json` under OpenOJ's judge. `scripts/check.py` enforces this.

## Formatting

Every file in the repository is formatted by **one toolchain, owned by the
openoj runner image**: `openoj/runner/formatters.py` (in the openoj repo)
holds the implementation and every version pin, and this repo's
`scripts/format.py` is only a loader that imports it — from inside the
image in CI, or from a sibling openoj checkout locally (`OPENOJ_RUNNER_DIR`
to point elsewhere). Generation (`gen_starters.py`), checking
(`check.py`), CI, the editor's Format button, and the `openoj format` CLI
all format through that single module, so output is byte-identical
everywhere. This repo deliberately carries no formatter pins or
`node_modules` of its own.

| Files          | Formatter                                 | Language key in formatters.py |
| -------------- | ----------------------------------------- | ------------------------------ |
| `*.py`         | `ruff format` (line length 120)          | `python3`                      |
| `*.go`         | `gofmt`                                   | `go`                           |
| `*.rust`       | `rustfmt --edition 2021` (width 120)     | `rust`                         |
| `*.cpp`        | `clang-format` (LLVM style, indent 4)    | `cpp`                          |
| `*.js`         | `prettier`                                | `javascript`                   |
| `*.ts`         | `prettier`                                | `typescript`                   |
| `*.java`       | `prettier` + `prettier-plugin-java`       | `java`                         |
| `*.sql`        | `sql-formatter` (sqlite dialect)          | `sql`                          |
| `*.json`       | canonical 2-space JSON + trailing newline | `json`                         |
| `*.md`         | `prettier` (`proseWrap: preserve`)        | `markdown`                     |

Tool versions are pinned in the runner image's Dockerfile (the same build
the editor's Format button runs on). Run `python3 scripts/format.py` to
format everything or `--check` to verify without writing; equivalently,
from the image:

```bash
docker run --rm --user 0:0 -v "$PWD":/repo:rw \
  ghcr.io/zydo/openoj:latest openoj format --check /repo
```

When you add or edit a solution, run the formatter before pushing — CI
rejects unformatted files.

## Checking

```bash
python3 scripts/check.py --problems=all
python3 scripts/check.py --problems=0001_pair-sum,0002_add-digit-lists
```

The static tier (bundle completeness, schema conformance, statement grammar,
duplicate ids/slugs, `solution.* ⊇ starter.*`, starter generator round-trip)
always runs over the whole set regardless of the filter. The runtime tier
(executing each selected problem's solutions against its cases through
OpenOJ) runs only on the selected problems. CI passes the changed problem
keys from the push's diff.
