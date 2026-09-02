# Solutions — The Honor Roll

## Two double NOT EXISTS gates per cadet

Qualification is a conjunction of two absence proofs, and each one is the SQL
for "there is no counterexample." The first gate asks: is there a module of
this cadet's track that they never registered for? The inner-inner probe
`en.cadet_id = s.cadet_id AND en.module_id = c.module_id` makes
`NOT EXISTS` a membership test — if it fails for every own-track module,
coverage is complete. Because the requirement binds cadets to _their_ track's
module list, cadets whose track offers nothing at all trivially pass: no row
inside can witness a missing module.

The second gate covers the grades side with the same shape, inverted outward:
does there exist any registration by this cadet in an own-track module whose
grade differs from `'A'`? One non-A attempt disqualifies outright — retaking
the module later and scoring A does not undo the earlier attempt, since the
counterexample row still exists. The join to `Modules` restricts that check
to own-track registrations only, so electives outside the cadet's track are
invisible here (and also to gate one, which never consults them). Both gates
run over an indexed-ish equality lookup per cadet; the final `ORDER BY`
just emits surviving ids ascending.

**Complexity:** `O(s · (c + e))` time worst case, `O(1)` extra space beyond
scan buffers — for each of the `s` cadets the probes touch their track's
module list and that cadet's registrations.
