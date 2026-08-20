## 316 — Time Based Key-Value Store

- New id / title / slug: 316 / Value History Store / `value-history-store`
- Old → new API: class `TimeMap` → `HistoryStore`; methods `set`/`get` **kept** (see notes); parameters `key`/`value`/`timestamp` kept
- Core algorithm / difficulty: hash map of per-key append-only histories + binary search for the newest entry at or before a moment / H2 (unchanged)
- Statement rewritten from spec: yes — framed around "what did this key carry at that moment", with the two empty-answer situations spelled out in the interface description rather than left to an aside
- Examples newly constructed: yes (structure-preserving: n/a — no figure)
  - one key rewritten once, read at the write moment, between writes, at the second write, and far past it → `[null,null,"west","west",null,"east","east"]`
  - a read one tick before the only write plus a read of a never-written key → `[null,null,"",""]`
- Constraints: domain unchanged, presentation rewritten
- Skeletons regenerated: python3 + java (design offers only these)
- Figures: none
- Gates: check ✓ verify ✓ (2/2 languages, 14/14 cases) compatibility ✓ stale ✓ overlap ✓ sandbox pending (batch run)

### Notes

- **`get` must not be renamed here, and the reason generalises.** The
  compatibility gate rewrites the source solution with a word-boundary regex
  per rename. Both source solutions call `.get(` on a real map —
  `self.stamps.get(key)` in Python, `history.get(mid)` / `values.get(key)`
  in Java — so renaming the *problem's* `get` method would silently rewrite
  those library calls and make the staged source solution uncompilable. The
  same trap waits for any design problem whose method is named after a
  container operation (`get`, `add`, `put`, `remove`, `size`, `contains`).
  Grep the source solutions for `\.<candidate>(` before renaming a method,
  not just for the parameter names the protocol already warns about.
- `set` was safe (`setdefault` has no word boundary after `set`) but was kept
  anyway: `set`/`get` are the conventional pair for a key-value container and
  ADAPT's naming rule says not to rename merely to differ.
