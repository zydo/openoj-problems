## 0470 — Implement Rand10() Using Rand7()

- New id / title / slug: 470 / Ten-Sided Roll From a Seven-Sided Die / `ten-sided-roll-from-seven`
- Old → new API: `rand10` → `roll10` (go `roll10`, rust `roll10`, ts `roll10`); parameter `rand7_outputs` → `seven_rolls`
- Core algorithm / difficulty: rejection sampling over the 49 outcomes of two draws, cutoff 40 / H2 (unchanged)
- Statement rewritten from spec: yes — the fixed construction is given as a numbered procedure, and the reason the judge replays a recorded face sequence is stated as its own paragraph
- Examples newly constructed: yes (structure-preserving: n/a — no figures)
  - `[1,4] → 4`, `[5,4] → 2` (wrap past 10), `[6,6,4,2] → 3` (rejected attempt discards both faces)
  - checked against the hidden inputs so no public case repeats one
- Constraints: domain unchanged (`10^5` faces, values 1..7), presentation rewritten; the source's two follow-up questions are kept but reworded
- Skeletons regenerated: all 7
- Figures: none
- Gates: check ✓ verify ✓ (7/7 languages, 16/16 cases) sandbox n/a compatibility ✓ stale ✓ overlap ✓

### Notes

- **The compatibility gate applies its renames in a fixed order — method
  first, then per-language entrypoints — so a source whose method name equals
  its Rust entrypoint cannot be given differing names in the adaptation.**
  Here the source is `rand10` in every language. Naming the method `rollTen`
  and the Rust entrypoint `roll_ten` made the gate rewrite the staged Rust
  source to `rollTen` (the method rename fires first, and the entrypoint
  rename then matches nothing), and it failed to compile with E0599. The fix
  is to pick a name that is spelled the same in both conventions — `roll10` —
  which is also what the source did. Worth checking up front: if
  `invocation.method == invocation.entrypoints.rust` in the source, keep that
  equality in the adaptation.
- The API name is deliberately not derived from the title here: a title-derived
  `rollTen` would reintroduce the case-convention split above.
