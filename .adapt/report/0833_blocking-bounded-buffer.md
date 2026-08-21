## 833 — Design Bounded Blocking Queue

- New id / title / slug: 833 / Blocking Bounded Buffer / `blocking-bounded-buffer`
- Old → new API: class `BoundedBlockingQueue` → `BoundedBuffer`; `enqueue` → `put`, `dequeue` → `take` (the BlockingQueue verb pair — put blocks when full, take blocks when empty); `size`, `capacity`, `element` kept (unavoidable generics / conventional)
- Core algorithm / difficulty: one mutex plus two condition variables (room-available / value-available), waits in `while` loops / H3 (unchanged)
- Statement rewritten from spec: yes — first draft mirrored the source's concurrent-judging paragraph too closely (overlap gate 8%), rewritten wholesale; second run clean
- Examples newly constructed: yes (structure-preserving: n/a — no figure)
  - capacity 2, inserted `[4,6,2,9,1]`, five readers → `[1,2,4,6,9]`; capacity 3, inserted `[7,3,8,5]` → `[3,5,7,8]` (source literals `[1,0,2,3,4]` etc. avoided)
- Constraints: domain unchanged (capacity ≤ 10, n ≤ 30 per side, elements 0–20, threads 60), presentation rewritten
- Skeletons regenerated: python3 + java via `gen_starters.py` (concurrent offers only these two — cpp/go/rust/js/ts are out of scope for the threads/actions protocol)
- Hidden cases: data-identical except the sanctioned rename — `threads[].call` `enqueue`/`dequeue` → `put`/`take` in place; nothing else touched (verified programmatically)
- Figures: none
- Gates: check ✓ (per-bundle CLEAN) · verify ✓ (2/2 languages, 17/17 cases each) · compatibility ✓ (gate itself green — no provided/ to lose to the shard-path bug) · stale ✓ · overlap ✓ · sandbox pending (batch)

### Notes

- The class rename rides `problem.json`'s `class_name` and the method renames ride `methods[].name`, so the compatibility gate derived them all by itself — no ledger lookup needed (the fragment is in `.adapt/incoming-b/` for the merge, as always).
- The stale gate skips `cases.json`, so the renamed call strings there are invisible to it — by design; the real proof the schedules still dispatch is verify 17/17 in both languages.
- `element` stayed a parameter: the source solutions use it as a local (`element = items.popleft()`), so renaming it would have flagged my own solution copies (the 0587 trap in reverse).
