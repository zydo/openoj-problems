# Part F blocked sources

Problems that cannot be honestly adapted until a central (main-agent or
owner) fix lands in the live tree. Hidden case data may not be regenerated
by adapting agents, and the staged-source compatibility gate runs every
`solution.*` of the source verbatim, so a source whose reference solution
does not even compile stops here. Mirrors `blocked-b.md`.

## 3123_find-edges-in-shortest-paths

Blocked 2026-08-19 by wave-f-05. **The live bundle's `solution.java` does
not compile: its edge-classification loop uses three variables it never
declares.**

- `solution.java` line 30 reads
  `if (dist0[u] + w + distN[v] == total || dist0[v] + w + distN[u] == total)`
  but `u`, `v`, `w` exist only as locals of the private `dijkstra` method;
  the `for (int i = 0; i < edges.length; i++)` loop never extracts
  `edges[i]`'s endpoints and weight. javac reports 6 "cannot find symbol"
  errors.
- `verify_solution.py problems/3123_find-edges-in-shortest-paths` fails on
  java (prepare/compile failed) and passes 15/15 for cpp, go, js, py, rust,
  ts — so statement, data, and algorithm agree; only the Java port is
  broken.
- Both gate 2 (`verify` on the adapted copy, which is a copy of this file)
  and gate 4 (compatibility, which stages the source java with only API
  renames) fail mechanically. Nothing a chunk agent may edit can fix this.

Needed centrally: declare the loop locals (e.g.
`int u = edges[i][0], v = edges[i][1], w = edges[i][2];`) in the live
`solution.java`, re-verify the live bundle for all 7 languages, then
re-dispatch 3123.

Re-dispatch notes (wave-f-05 scratch, `.localonly/wave-f-05/`):
`search3123.py` searches structure-preserving weights for both figures;
target identity was title "Edges on a Shortest Path", slug
`edges-on-a-shortest-path`, `findAnswer` -> `shortestPathEdges` /
`find_answer` -> `shortest_path_edges` (no identifier collisions in any
source solution). Two caveats found the hard way when the bundle was built
and then deleted: (a) the new examples' expected arrays must differ from
the source's `[true,true,true,false,true,true,true,false]` /
`[true,false,false,true]` or the stale gate flags them as source literals —
pick weights whose qualifying edge set differs, and regroup the blue/gray
`<line>` lists in the SVGs accordingly; (b) the figure alt texts and the
"You are given an undirected weighted graph" opening must be reworded from
scratch or the overlap gate trips — `![...]` alt text is prose to the
shingler.


**RESOLVED 2026-08-19** (central fix applied by the Part B session, commit b7ebc217): loop locals declared, solution.java compiles, live bundle re-verified 7/7 x 15/15. Re-dispatched via wave-f-07.json.
