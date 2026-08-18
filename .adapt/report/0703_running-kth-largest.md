## 0703 — Kth Largest Element in a Stream

- New id / title / slug: 703 / Running Kth Largest / `running-kth-largest`
- Old → new API: class `KthLargest` → `RunningKthLargest`; method `add` and parameters `k`, `nums`, `val` kept (all conventional)
- Core algorithm / difficulty: min-heap capped at `k`, root is the answer / H2 (unchanged)
- Statement rewritten from spec: yes — the source's university-admissions framing is dropped per ADAPT ("no invented scenarios"); the task is stated as a pool of integers
- Examples newly constructed: yes (structure-preserving: n/a — no figures)
  - `k=3`, seed `[2,7,4,7]`, adds `5, 9, 1, 8` → `[null,5,7,7,7]` (ties matter); `k=1`, empty seed, adds `5, -2, 11` → `[null,5,5,11]`
- Constraints: domain unchanged, presentation rewritten
- Skeletons regenerated: python3 + java (design offers only these)
- Figures: none
- Gates: check ✓ verify ✓ (2/2 languages, 16/16 cases) sandbox pending (batch) compatibility ✓ stale ✓ overlap ✓

### Notes

- Design bundle, so the class name appears inside every hidden case's `actions`
  list; renaming it there (and only there) is the sanctioned exception. Hidden
  `params` and `expected` untouched.
- `add` was left alone deliberately: 0295 *renamed into* `add` for the same
  family of streaming classes, so renaming away from it here would have made the
  two classes read less alike, not more.
- Parameter `val` was considered for a rename to `value`, and rejected: the
  source `solution.java` already declares a local `value` in its constructor
  loop, exactly the collision PROTOCOL warns about.
