## 117 — Serialize and Deserialize Binary Tree

- New id / title / slug: 117 / Encode and Decode a Tree / `encode-and-decode-a-tree`
- Old → new API: class `Codec` → `TreeCodec`; `serialize`/`deserialize` kept (the task's universal vocabulary); parameters `root`/`data` kept
- Core algorithm / difficulty: breadth-first encoding with `#` gap markers, queue replay on decode / H2 (unchanged)
- Statement rewritten from spec: yes
- Examples newly constructed: yes (structure-preserving: n/a — no figure)
  - `[4,2,7,null,3,6,9]` (missing left child mid-tree) and the empty tree
- Constraints: domain unchanged, presentation rewritten
- Skeletons regenerated: python3 + java (design offers only these)
- Figures: none
- Gates: check ✓ verify ✓ (2/2 languages, 14/14 cases) compatibility ✓ stale ✓ overlap ✓ sandbox pending (batch run)

### Notes

- Public cases use the judge's `$prev` protocol (deserialize receives
  serialize's own output) and `{"mode": "opaque"}` for the never-compared
  string — both copied structurally from the source's case shape, with new
  tree data and round-trip verified by actually running the renamed
  reference.
- The stale gate caught even the *placeholder prose* in the example block:
  `[<the string serialize returned>]` is a bracketed literal to the gate,
  and mine matched the source's. Reworded to `[<the text serialize
  produced>]`. Placeholder text in example blocks is copyable content too.
