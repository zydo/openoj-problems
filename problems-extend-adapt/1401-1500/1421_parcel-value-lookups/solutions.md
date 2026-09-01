# Solutions — Parcel Value Lookups

## Left join on the composite key

The answer's rows correspond one-to-one with the `Lookups` rows, each
carrying the value `Valuations` stores for that `(parcel_id, year)`
pair — or 0 when it stores none. That shape is a textbook left join:
`Lookups r LEFT JOIN Valuations v ON r.parcel_id = v.parcel_id AND
r.year = v.year` keeps every request row and attaches the stored value
where one exists.

The only subtlety is the miss case: a request that matches nothing
carries a null in the joined `value` column, and the statement wants 0
there instead. `COALESCE(v.value, 0)` substitutes exactly when the
join found nothing, and leaves a stored 0 (or a negative value)
untouched, so both kinds of zero are reported identically.

Because `(parcel_id, year)` is `Valuations`' primary key, the join
multiplies no rows — each request matches at most one valuation row —
and the output cardinality is precisely the request count. Row order
is free ("in any order"), which the multiset comparison accepts.

**Complexity:** `O(L + V)` for a hash join over the two tables, `O(L)`
space for the result.
