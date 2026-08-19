## 1146 — Snapshot Array

- New id / title / slug: 1146 / Versioned Array / `versioned-array`
- Old → new API: class `SnapshotArray` → `VersionedArray`; `snap` → `commit`;
  parameter `snap_id` → `commit_id` (Java `snapId` → `commitId`);
  `set`/`get`/`length`/`index`/`val` kept (generic vocabulary)
- Core algorithm / difficulty: per-index `(commit_id, val)` histories, binary
  search on read / H3 (unchanged)
- Statement rewritten from spec: yes
- Examples newly constructed: yes (structure-preserving: n/a — no figure)
  - two commits with reads from both versions, one position never written;
    commit-before-any-write plus an overwrite inside one version
- Constraints: domain unchanged, presentation rewritten
- Skeletons regenerated: python + java (design offers only these)
- Figures: none
- Gates: check ✓ verify ✓ (2/2 languages, 15/15 cases) compatibility ✓ stale ✓
  overlap ✓ sandbox pending (batch run)

### Notes

- Design bundle with 11 MB of hidden cases: renaming the method inside every
  hidden `actions` list took seconds with a json round-trip; no data touched.
- `set` and `get` kept as method names — unavoidable generic terms, same call
  the pilot made for `get`/`put` in 0146 and 0155.
- The statement keeps the actions-table example format; it is the judge's own
  input encoding, not LeetCode prose.
