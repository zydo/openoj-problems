## 363 — Connecting Cities With Minimum Cost

- New id / title / slug: 363 / Cheapest Spanning Network / `cheapest-spanning-network`
- Old → new API: `minimumCost` → `cheapestSpanningNetwork` (go `cheapestSpanningNetwork`, rust `cheapest_spanning_network`, ts `cheapestSpanningNetwork`); parameter `connections` → `links`
- Core algorithm / difficulty: Kruskal's minimum spanning tree over a union-find / H2 (unchanged)
- Statement rewritten from spec: yes — framed as a catalogue of priced links you may buy, with the `-1` condition stated as "no subset leaves all nodes mutually reachable"
- Examples newly constructed: yes (structure-preserving: **yes** — both figures kept their geometry)
  - `n=3, [[1,2,4],[1,3,9],[2,3,3]] → 7`; `n=4, [[1,2,8],[3,4,2]] → -1`; `n=4, [[1,2,2],[2,3,7],[3,4,1],[1,4,5],[2,4,3]] → 6` (third example, no figure, exercises redundant offers that only close cycles)
- Constraints: domain unchanged, presentation rewritten
- Skeletons regenerated: all 7 (cpp, go, java, js, py, rust, ts)
- Figures: **labels updated** — both SVGs kept their node layout; edge price labels, the data comment and the footnote line were rewritten, and the alt text in the statement was written fresh
- Gates: check ✓ verify ✓ (7/7 languages, 15/15 cases) sandbox n/a compatibility ✓ stale ✓ overlap ✓

### Notes

- `links` was checked against every source solution before being adopted: the
  sources use `conns`, `edges`, `total`, `cost` and never `links`.
- The source solutions derive a local `conns` from the parameter. Renaming the
  parameter to `links` leaves `conns` reading slightly oddly in go/rust/ts, but
  the protocol forbids editing anything but API identifiers, so it stands.
- Rewriting the edge prices was enough to keep both figures: an MST figure
  encodes *which* edges are chosen in geometry (solid vs dashed), so pick new
  weights that preserve the chosen set and only the number labels move.
