# openoj-problems format

A problem-set repository for [OpenOJ](https://github.com/zydo/openoj). Each
problem is one directory under `problems/`, named `<zero-padded id>_<slug>`,
inside an inclusive id-range shard directory of 100 problems
(`<lo>-<hi>`, e.g. `0001-0100` for ids 1-100) — the directory name is
the single source of the problem key:

```text
problems/
└── 0001-0100/           inclusive id-range shards of 100
    └── 0001_two-sum/
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

Every file in the repository is formatted by a pinned toolchain, applied at
generation time (`gen_starters.py` formats its output) and enforced in CI
(`format.py --check` inside the `scripts/format.Dockerfile` all-in-one
container, so CI and the pinned local container are the same environment).
The workspace `.vscode/settings.json` maps every language to an
`editor.defaultFormatter` that delegates to the same pinned engine as the
CLI: ruff, gofmt, rustfmt, clang-format, and sql-formatter via their
language extensions, and prettier (workspace `node_modules`, driven by
`.prettierrc.json`) via `esbenp.prettier-vscode` for JavaScript,
TypeScript, Java, and Markdown. Editor, generator, and CI therefore all
produce identical bytes. Without the tools installed locally, run the
container:

```bash
docker build -f scripts/format.Dockerfile -t openoj-format .
docker run --rm -v "$PWD":/repo -w /repo openoj-format --check
```

| Files          | Formatter                                 | Pin / install                |
| -------------- | ----------------------------------------- | ---------------------------- |
| `*.py`         | `ruff format` (line length 88)            | `ruff==0.16.3` (pip)         |
| `*.go`         | `gofmt`                                   | Go 1.24 toolchain            |
| `*.rust`       | `rustfmt --edition 2021`                  | rust 1.85 toolchain          |
| `*.cpp`        | `clang-format` (LLVM style, indent 4)     | `clang-format==22.1.8` (pip) |
| `*.js`         | `prettier`                                | `prettier@3.9.6` (npm)       |
| `*.ts`         | `prettier`                                | `prettier@3.9.6` (npm)       |
| `*.java`       | `prettier` + `prettier-plugin-java`       | plugin `@2.10.3` (npm)       |
| `*.sql`        | `sql-formatter` (sqlite dialect)          | `sql-formatter@15.8.2` (npm) |
| `*.json`       | canonical 2-space JSON + trailing newline | matches VS Code's built-in   |
| `statement.md` | `prettier` (`proseWrap: preserve`)        | `prettier@3.9.6` (npm)       |

npm tools are pinned in `package.json` / `package-lock.json`
(`npm ci`). Config lives in `.prettierrc.json`, `.clang-format`, and
`ruff.toml`. Run `python3 scripts/format.py` to format everything, or
`--check` to verify without writing. When you add or edit a solution, run
the formatter before pushing — CI rejects unformatted files.

Two deliberate substitutions where an editor engine has no CLI: the VS Code
built-in JS/TS formatter is replaced by prettier (the ecosystem standard),
and Java's JDT formatter is replaced by prettier-plugin-java; both are
pinned so output is deterministic everywhere.

## Checking

```bash
python3 scripts/check.py --problems=all
python3 scripts/check.py --problems=0001_two-sum,0002_add-two-numbers
```

The static tier (bundle completeness, schema conformance, statement grammar,
duplicate ids/slugs, `solution.* ⊇ starter.*`, starter generator round-trip)
always runs over the whole set regardless of the filter. The runtime tier
(executing each selected problem's solutions against its cases through
OpenOJ) runs only on the selected problems. CI passes the changed problem
keys from the push's diff.
