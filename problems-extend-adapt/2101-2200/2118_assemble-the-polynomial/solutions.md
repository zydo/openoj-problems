# Solutions — Assemble the Polynomial

## Format ordered terms, then concatenate

An inner query formats each row with its explicit sign and absolute
coefficient, then chooses no variable text for exponent zero, `X` for
exponent one, or `X^exponent` otherwise. Ordering this query by descending
exponent fixes the required term sequence before aggregation.

`GROUP_CONCAT` joins the ordered terms without a separator, and appending
`=0` completes the expression. The nonzero-coefficient constraint avoids a
zero-sign special case.

**Complexity:** `O(r log r)` time and `O(r)` space for sorting and
concatenating `r` terms.
