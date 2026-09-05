# Solutions — Tag Each Post With Its Topics

## Whole-word term matching with a deduplicated GROUP_CONCAT

A term occurs in a post only when it appears as a whole word, so pad the
lowercased body with sentinel spaces and look for the term wrapped the same
way — that single `INSTR` test rejects prefix traps like `harboring`
matching `harbor` without any tokenizing. The correlated subquery collects
the distinct tag ids of every term found in the post's body;
`GROUP_CONCAT(... ORDER BY ...)` renders them ascending and comma-separated
(distinctness comes from the `SELECT DISTINCT`, since one topic may be
expressed by several matched terms). Notes with no match produce an empty
aggregate, which `COALESCE` turns into `"Ambiguous!"`.

**Complexity:** `O(P · K · L)` time for `P` notes, `K` terms, and body
length `L`, `O(K)` auxiliary space.
