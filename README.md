# openoj-problems

Problem sets for [OpenOJ](https://github.com/zydo/openoj) — a self-hosted,
self-motivated learning framework. Nothing here is secret: every testcase
and its expected output is public data by design.

The default set is `problems/` — our independently authored bank
(838 problems, statements and APIs written from functional
specifications; see [MAPPING.md](problems/MAPPING.md) for its
provenance). `problems-bettercode/` archives the LeetCode-derived
originals it was built from, curated by BETTERCODE.md. The archive retains
its legacy schema-1 manifests, but each bundle owns its wire structures under
`provided/<language>/`, just like the live bank. Each problem is one directory
sharded into id-range subdirectories of 100
(`problems/0001-0100/0001_pair-sum/`) — carrying its statement,
machine schema, testcase corpus, generated starters, and recommended
solutions in every offered language. See [FORMAT.md](FORMAT.md) for the
complete specification.

## Adding or changing a problem

1. Create `problems/<range>/<id>_<slug>/` (range = the inclusive 100-id
   shard, e.g. `0001-0100`) with `problem.json`, `cases.json`, and
   `statement.md` (handwritten, non-derived content only).
2. Run `python3 scripts/gen_starters.py` to generate every `starter.*`.
3. Author `solution.<ext>` for each generated starter, on top of it.
4. Run `python3 scripts/format.py` — everything is formatted with the
   pinned toolchain (see [FORMAT.md](FORMAT.md#formatting)); CI rejects
   unformatted files.
5. Check locally before pushing — CI is the last-step guardian, not the
   first:

    ```bash
    python3 scripts/check.py --skip-runtime                    # static
    python3 scripts/check.py --problems=<your-keys>            # + runtime
    ```

    The runtime tier needs a running OpenOJ serving this repository, e.g.
    from an openoj checkout:

    ```bash
    OPENOJ_PROBLEMS_PATH=$PWD/problems OPENOJ_PROBLEMS=/problems \
      docker compose up -d --build api web runner
    python3 scripts/check.py --problems=all --api http://localhost:8080
    ```

## CI

On every push, a static completeness check runs over the whole set and the
runtime judge runs only for changed problem directories (see
`.github/workflows/check.yml`).

## Serving this set

```bash
OPENOJ_PROBLEMS=zydo/openoj-problems docker compose up --build
```
