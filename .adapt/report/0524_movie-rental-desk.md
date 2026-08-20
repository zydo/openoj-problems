## 524 — Design Movie Rental System

- New id / title / slug: 524 / Movie Rental Desk / `movie-rental-desk`
- Old → new API: class `MovieRentingSystem` → `MovieRentalDesk`; methods `search`, `rent`, `report` kept (generic verbs); `drop` → `handBack`; parameters `n`, `entries`, `shop`, `movie` kept (conventional)
- Core algorithm / difficulty: per-movie unrented heaps + one global rented heap, token invalidation for lazy deletion / H3 (unchanged)
- Statement rewritten from spec: yes — the four operation contracts restated; "movie renting company" framing replaced by a plain service description
- Examples newly constructed: yes (structure-preserving: n/a — no figure)
  - 6 shops over movie 1 so `search` actually truncates at five, plus rent/report/handBack cycle; 2 shops exercising the report's price tie (smaller shop first) and a one-shop `search`
- Constraints: domain unchanged, presentation rewritten
- Skeletons regenerated: python3 + java (design problems offer only these)
- Figures: none
- Gates: check ✓ verify ✓ (2/2 languages, 14/14 cases) sandbox pending (batch) compatibility ✓ stale ✓ overlap ✓

### Notes

- The stale gate checks example data at the granularity of individual
  bracketed triples: `[0,1,5]` and later `[0,2,6]` from my first drafts
  both appear inside the source's example catalogue and were rejected
  wholesale triples, not just whole-example matches. Design problems with
  `[shop, movie, price]` tables need their catalogue entries checked
  triple by triple against the source example.
