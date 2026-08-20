## 48 — Candy

- New id / title / slug: 48 / Weight Apportionment / `weight-apportionment`
- Old → new API: `candy` → `apportion` (go `apportion`, rust `apportion`, ts `apportion`); parameter `ratings` → `scores`; the reference solutions' local `candies` → `weights`
- Core algorithm / difficulty: two monotone sweeps, forward assign then backward max / H3 (unchanged)
- Statement rewritten from spec: yes
- Examples newly constructed: yes (structure-preserving: n/a — no figure)
  - `[2,5,8,6,3] → 9` (rise then fall), `[6,6,6,6] → 4` (all ties), `[9,4,4,7,1] → 7` (flat pair inside)
- Constraints: domain unchanged, presentation rewritten
- Skeletons regenerated: all 7
- Figures: none
- Gates: compatibility ✓ stale ✓ overlap ✓ check ✓ (verify 7/7 languages, 15/15 cases)

### Notes

- **Gate bug worth passing on.** `adapt_gates.py`'s compatibility gate builds
  one flat list of `(old, new)` renames and applies them in sequence, method
  first and per-language entrypoints after. When the *source* method name is
  also its rust entrypoint — true here, `candy`/`candy` — the method rename
  consumes the token and the rust-specific snake_case rename never fires, so
  the staged rust solution declares a camelCase `fn` and fails to compile.
  Fixing it means substituting per language rather than globally. Until then,
  any source whose method is a single lowercase word forces the adapted method
  to be a single lowercase word too. That is what pushed this bundle from
  `minimumWeightDistribution` to `apportion`; the name is honest for the task,
  but the constraint was the gate's, not the problem's.
- The reference solutions' comments named children and candies throughout;
  they were rewritten to positions and weights rather than mechanically
  substituted, which is what the mechanical substitution produced first.
