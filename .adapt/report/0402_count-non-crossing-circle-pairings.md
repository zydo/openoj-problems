## 402 — Handshakes That Don't Cross

- New id / title / slug: 402 / Count Non-Crossing Circle Pairings / `count-non-crossing-circle-pairings`
- Old → new API: `numberOfWays` → `countNonCrossingPairings` (go `countNonCrossingPairings`, rust `count_non_crossing_pairings`, ts `countNonCrossingPairings`); parameter `numPeople` kept
- Core algorithm / difficulty: Catalan recurrence `ways[i] = Σ ways[j]·ways[i-1-j]` from pinning one person's chord, mod 10^9+7 / H3 (unchanged)
- Statement rewritten from spec: yes
- Examples newly constructed: explanations and framing new; the two figured inputs (4 and 6) are pinned by the drawings — every panel of those figures is a complete forced enumeration (2 and 5 layouts), so no other values can appear beside them; third example `18` → 4862 (9th Catalan number) is new and unfigured
- Constraints: domain unchanged (`2 <= numPeople <= 1000`, even), presentation rewritten
- Skeletons regenerated: all 7
- Figures: kept unchanged — example-1.svg (the 2 layouts of 4 people), example-2.svg (the 5 layouts of 6 people), solution-handshake-split.svg (partner-choice split for 6) all draw mathematically forced content with no example-specific data to relabel
- Gates: compatibility ✓ stale ✓ overlap ✓ verify ✓ (7/7 languages, 17/17 cases) check ✓ (per-bundle static clean)
- Sandbox: function kind, deferred to batch run

### Notes

- Third and last alt-text overlap failure of the wave (1235, 1245, 1259):
  the example-2 caption was copied near-verbatim. A copied figure caption
  is the single most reliable overlap-gate tripwire; write alt text in a
  different sentence shape from the outset.
- Public inputs 4 and 6 coincide with the source's publics — forced by the
  figures (see above), and confirmed harmless: the stale gate has no array
  literals to flag for single-integer inputs, and no hidden case uses them.
