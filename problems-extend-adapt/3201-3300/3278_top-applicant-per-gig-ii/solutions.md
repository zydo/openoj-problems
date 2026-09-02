# Solutions — Top Applicant Per Gig II

## Join on skill, require full coverage, keep the top score per gig

The pairing lives between two tables, so everything starts from the join
`Applicants c JOIN Gigs p ON c.skill = p.skill`: each surviving row is
one skill an applicant shares with a gig, carrying the level and
the demand to compare it against. Grouping by `(p.gig_id,
c.applicant_id)` collapses those rows into one applicant-gig pair, and
full coverage becomes a pure count: both tables are keyed so each shared
skill contributes exactly one row, so the group qualifies only when its
`COUNT(*)` reaches the gig's total requirement tally — a correlated
count over `Gigs` for the same id. An applicant who misses a skill
contributes no row for it at all, leaving the group short, and `matched =
needed` filters them out before any scoring matters.

The score is conditional arithmetic over the grouped rows:
`SUM(CASE WHEN c.level > p.demand THEN 1 ELSE 0 END)` tallies
the skills earning +10, its `<` twin tallies the −5 skills, equal pairs
touch neither sum, and the base is the flat 100 — integer arithmetic
throughout, so every score stays exact. Picking the winner is a ranking
over the qualified groups only: `ROW_NUMBER() OVER (PARTITION BY
gig_id ORDER BY score DESC, applicant_id)` puts the highest score
first and breaks ties toward the lower id, and the outer `rn = 1` keeps
exactly that row. A gig nobody fully qualifies for never produces a
qualified group at all, so it drops out of the result without special
handling.

The join emits one row per shared applicant-gig skill; call the
`Applicants` row count `N`, the `Gigs` row count `M`, and the joined
pair count `J`. Grouping touches each pair once, the window sorts each
gig's qualified applicants, and the final ordering sorts one row per
surviving gig.

**Complexity:** `O(N + M + J log J)` time, `O(J)` space.
