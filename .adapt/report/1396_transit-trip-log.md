## 1396 — Design Underground System

- New id / title / slug: 1396 / Transit Trip Log / `transit-trip-log`
- Old → new API: class `UndergroundSystem` → `TransitLog`; `checkIn` → `tapIn`; `checkOut` → `tapOut`; `getAverageTime` → `averageTrip`; parameters `stationName` → `stop`, `startStation` → `fromStop`, `endStation` → `toStop`; `id`, `t` kept
- Core algorithm / difficulty: pending-tap map keyed by card id + per-ordered-pair (sum, count) buckets / H2 (unchanged)
- Statement rewritten from spec: yes (underground railway → transit network with tap-in/tap-out cards)
- Examples newly constructed: yes (structure-preserving: n/a — no figure)
  - three cards over two pairs with an open journey mid-query (13.5 → 11.0); one pair repeated plus the reverse direction kept separate (7.0 → 5.0, reverse 9.0)
- Constraints: domain unchanged, presentation rewritten
- Skeletons regenerated: java, py (source only had those two)
- Figures: none
- Gates: check ✓ verify ✓ (2/2 languages, 14/14 cases) sandbox pending (batch) compatibility ✓ stale ✓ overlap ✓

### Notes

- Design kind: hidden `actions` strings renamed in place; the hidden cases'
  station-name *data* (short strings like "A", "B") was left untouched —
  data, not API.
- Parameter renames (`stop`, `fromStop`, `toStop`) verified unused as
  identifiers in both source solutions before renaming; invocation is
  positional so compatibility is unaffected.
- Source had exactly the two-example shape (interleaved open trip; growing
  average) — both example *scripts* are new and exercise the same two
  behaviors plus a direction-split query the source never showed.
