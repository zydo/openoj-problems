## 0983 — Minimum Cost For Tickets

- New id / title / slug: 983 / Cheapest Pass Plan / `cheapest-pass-plan`
- Old → new API: `mincostTickets` → `cheapestPassPlan` (go `cheapestPassPlan`, rust `cheapest_pass_plan`, ts `cheapestPassPlan`); parameter `costs` → `prices`; `days` kept
- Core algorithm / difficulty: dynamic programming indexed by calendar day, three-way branch on pass length / H2 (unchanged)
- Statement rewritten from spec: yes — the "a pass can always be slid to end on today" argument that makes the recurrence work is left for the hints, and the interface is described as validity windows rather than a travel narrative
- Examples newly constructed: yes (structure-preserving: n/a — no figure)
  - `days=[2,3,9,10,11,25], prices=[4,11,40] → 23` (the same pass length wins on one cluster and loses on another)
  - `days=[3,5,12,18,22,28,29,30,31], prices=[6,20,45] → 45` (thin spread, long pass wins)
  - `days=[7], prices=[9,9,2] → 2` (prices need not increase with length)
- Constraints: domain unchanged, presentation rewritten
- Skeletons regenerated: all 7
- Figures: none
- Gates: check ✓ verify ✓ (7/7 languages, 16/16 cases) compatibility ✓ stale ✓ overlap ✓ sandbox pending (batch run)

### Notes

- **The stale gate reads fenced example blocks as code spans, so an ordinary
  English use of a renamed parameter fails there.** "the thirty-day pass
  covering everything costs 40" inside an ```text explanation tripped
  `source parameter 'costs'`, even though nothing about it is an identifier.
  When a renamed parameter is also a common verb or noun (`costs`, `values`,
  `times`, `words`), keep it out of example explanations entirely — rephrase
  to "would run to 40". The prose outside fences is not scanned for bare-word
  parameters, so only the fenced blocks and backticks need policing.
