## 67 — Repeated DNA Sequences

- New id / title / slug: 67 / Repeated Ten-Letter Windows / `repeated-ten-letter-windows`
- Old → new API: `findRepeatedDnaSequences` → `findRepeatedWindows` (go `findRepeatedWindows`, rust `find_repeated_windows`, ts `findRepeatedWindows`); parameter `s` kept
- Core algorithm / difficulty: fixed-length window slide with seen/repeated sets / H2 (unchanged)
- Statement rewritten from spec: yes
- Examples newly constructed: yes (structure-preserving: n/a — no figure)
  - `"GGGGGTTTTTGGGGGTTTTTGCGCGCATAT" → ["GGGGGTTTTT","GGGGTTTTTG"]` (whole repeat plus an overlap window), `"CCCCCCCCCCCCCC" → ["CCCCCCCCCC"]` (five identical windows, one answer), `"ACGTTGCAAC" → []` (single window)
- Constraints: domain unchanged, presentation rewritten
- Skeletons regenerated: all 7
- Figures: none
- Gates: compatibility ✓ stale ✓ overlap ✓ (verify 7/7 languages, 15/15 cases)

### Notes

- The DNA molecule framing is gone; the alphabet `A/C/G/T` stays because the
  hidden data is written in it (decision 5: same data shapes). The window
  length 10 is part of the task and is named in the title.
- `comparison` is `sorted`, so the guide keeps the sort-before-return detail
  and the statement says order does not matter.
