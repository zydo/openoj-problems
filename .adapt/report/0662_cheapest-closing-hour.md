## 662 — Minimum Penalty for a Shop

- New id / title / slug: 662 / Cheapest Closing Hour / `cheapest-closing-hour`
- Old → new API: `bestClosingTime` → `cheapestClosingHour` (go `cheapestClosingHour`, rust `cheapest_closing_hour`, ts `cheapestClosingHour`); parameter `customers` kept
- Core algorithm / difficulty: prefix-'N' + suffix-'Y' running counts, one upward sweep, strict-improvement tie-break / H2 (unchanged)
- Statement rewritten from spec: yes (shop scenario kept — the computation genuinely is a shop closing choice)
- Examples newly constructed: yes (structure-preserving: n/a — example figures none; solution figure dropped)
  - `"YNYN"` → 1 (tie at hours 1 and 3, earliest wins; profile 2,1,2,1,2), `"NNYNN"` → 0 (quiet log, close before opening), `"NYYY"` → 4 (busy tail, close at n)
- Constraints: domain unchanged, presentation rewritten
- Skeletons regenerated: all 7
- Figures: dropped — `solution-penalty-sweep.svg` walks the source example "YYNY"; its stacked-bar geometry encodes that string's penalty profile (3,2,1,2,1), which no other 4-hour string produces, so a label edit cannot rescue it and no renderer family covers it
- Gates: check ✓ (no failures for this bundle) verify ✓ (7/7 languages, 18/18 cases) compatibility ✓ stale ✓ overlap ✓
- Sandbox: function kind, deferred to batch run

### Notes

- Hand-computed "NNYYY" → 0 was wrong (its profile bottoms at j = 5); the
  brute-force cross-check in the scratch script caught it before it reached
  cases.json. Never trust a hand tally — I enumerated the full penalty profile
  for every example.
- Dropping the solution figure also meant rewriting solutions.md's figure
  paragraph as prose; the "YNYN" tie walk (2,1,2,1,2) replaced it, verified
  against the same profile output.
