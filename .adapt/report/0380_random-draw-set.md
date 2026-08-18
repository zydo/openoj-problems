## 0380 — Insert Delete GetRandom O(1)

- New id / title / slug: 380 / Random Draw Set / `random-draw-set`
- Old → new API: class `RandomizedSet` → `RandomDrawSet`; `getRandom` → `draw`;
  `insert`/`remove` **kept** (universal set vocabulary, per the 0146 precedent)
- Core algorithm / difficulty: values array + value→slot map, swap-with-last
  removal / H3 (unchanged)
- Statement rewritten from spec: yes
- Examples newly constructed: yes (structure-preserving: n/a — no figure)
  - two traces: re-inserting a removed value plus absent-value calls; and a
    3-element live set shrinking to 2, so the judged draw distributions cover
    100%, 50/50, and thirds
- Constraints: domain unchanged, presentation rewritten
- Skeletons regenerated: python3 + java (design problems offer only these)
- Figures: none
- Gates: check ✓ (no failures in this bundle on the adapted tree) verify ✓
  (2/2 languages, 13/13 cases) sandbox deferred to the batch run compatibility
  ✓ stale ✓ overlap ✓

### Notes

- **Public `draw` actions must carry the repeat marker.** A public case whose
  action list says plain `"draw"` but whose expected holds a
  `{"mode": "distribution", ...}` block fails every run: the judge invokes the
  method once and compares a scalar against a distribution. The action has to
  be `{"call": "draw", "repeat": 2000}`, exactly as the source's public cases
  encode it. Caught by the compatibility gate before it could mislead.
- **The statistical draw judge is mildly flaky — in the source too.** With the
  hidden data byte-identical, a correct uniform sampler occasionally lands one
  case outside the 0.12 tolerance band (observed twice in five verify runs,
  once in java, once in py; three subsequent runs fully green, and the source
  bundle shares the property since the data is the same). Reruns settle it;
  the tolerance itself lives in the cases and is out of bounds for adaptation.
  Worth knowing for the batch sandbox run: a single red case here is not
  evidence of a bad solution.
- Family naming: 0380/0381 are a numbered pair and were titled together —
  Random Draw Set / Random Draw Multiset, methods `draw` in both. 0382 also
  names its draw `getRandom` in the source and is adapted to `draw` in this
  same chunk for clan consistency.
