## 1117 — Building H2O

- New id / title / slug: 1117 / Water Molecule Barrier / `water-molecule-barrier`
- Old → new API: class `H2O` → `WaterMolecule`; methods `hydrogen`/`oxygen` **kept** — they are the scenario's own vocabulary, and the water-molecule barrier is a generic textbook exercise, not distinctive LeetCode framing
- Core algorithm / difficulty: two counting semaphores (2 + 1) plus a three-way cyclic barrier / H3 (unchanged)
- Statement rewritten from spec: yes — after four rounds of the overlap gate
- Examples newly constructed: yes (structure-preserving: n/a) — `"OHH"` (one molecule) and `"OHHOHH"` (two)
- Constraints: domain unchanged, presentation rewritten
- Skeletons regenerated: python3 + java (concurrency offers only these)
- Figures: none
- Gates: check ✓ verify ✓ (2/2 languages, 18/18 cases) sandbox ✓ compatibility ✓ stale ✓ overlap ✓ (needed several rewording rounds)

### Notes for the pilot review

- **Hidden cases stayed byte-identical** — the pleasant surprise of this
  kind. Concurrent cases name methods (`hydrogen`, `oxygen`) in
  `threads[].call` but never the class, so keeping the scenario's method
  vocabulary (the right call anyway) leaves the case file untouched.
- **`grouped` expectations have per-group counts, not totals.** My first
  public case wrote `counts: {H:4, O:2}` for a six-thread case; the mode
  wants `{H:2, O:1}` with `total: 6`. The compatibility gate did not catch
  it — the source solutions happened to produce logs matching either — but
  a valid interleaving then failed judging. Worth a check.py rule.
- The stale gate's example-literal check needed an alphabet rule: a list
  over a two-symbol alphabet (`["H","H","O"]`) is a forced permutation any
  statement of this task would show, not source data. Literals with ≤2
  distinct characters are no longer treated as identifying.
- The overlap gate did real work here: my first statement tracked the
  source's phrasing in a dozen places ("a hydrogen thread is handed a
  callback and an oxygen thread a…", "a barrier that trips on three
  arrivals", "is judged as a timeout"). Four rewording rounds got it to
  0% — and the result reads better than the draft did.
